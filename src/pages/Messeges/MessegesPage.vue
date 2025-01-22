<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=trending_up" />
  <q-btn style="color: white; margin-left: 1%" @click="add" class="bg-primary " label="Wyśli nowa wiadomość" />
  <div class="q-pa-md q-gutter-sm">
    <q-banner class="q-banner" :class="{ 'bg-gray': isGray[0], 'bg-primary text-white': !isGray[0] }">
      <b>UWAGA!</b> Na dzień 22 Stycznia w godzinach 12:00 do 14:00 zaplanowano wyłączenie prądu. Dziękujemy za
      wyrozumiałość.
      <template v-slot:action>
        <q-btn flat color="white" label="Potwierdź" @click="makeGray(0)" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-banner class="q-banner" :class="{ 'bg-gray': isGray[1], 'bg-primary text-white': !isGray[1] }">
      W dniu 20.02 w budynku odbędą się kontrole stanu instalacji gazowej. Prosimy o otwieranie drzwi
      <template v-slot:action>
        <q-btn flat color="white" label="Potwierdź" @click="makeGray(1)" />
      </template>
    </q-banner>
  </div>
  <q-dialog v-model="dialog">
    <q-card style="width: 500px">
      <q-card-section>
        <p style="font-size: 22px; margin-bottom: -15px;">Wyśli nową wiadomość</p>
      </q-card-section>
      <hr>
      <q-card-section>
        Mieszkanie
        <q-select v-model="flatschoose" :options="flatsnames" color="primary" inline />
      </q-card-section>
      <q-card-section>
        Do kogo wysłać wiadomość
        <q-option-group v-model="group" :options="options" color="primary" inline />
      </q-card-section>
      <q-card-section>
        Ważność wiadomości
        <q-option-group v-model="group2" :options="options2" color="primary" inline />
      </q-card-section>
      <q-card-section>
        <q-editor v-model="tresc" min-height="12rem" />
      </q-card-section>
      <q-card-section align="right">
        <q-btn style="color: white; margin-left: 1%" @click="send" class="bg-primary " label="Wyśli" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { CheckIfOwner } from 'src/utils/CheckIfOwner';
import { GetID } from 'src/utils/GetID';
import { onMounted, Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const i18n = useI18n();

const isGray = ref([false, false]);
const dialog = ref(false);
const tresc = ref('');
const flatschoose = ref('');
const group = ref('op1');
const flatsnames: Ref<string[]> = ref(['']);
const flats: Ref<{ name: string, id: number }[]> = ref([{ name: '', id: 0 }]);
const id = GetID();
const owner = CheckIfOwner();
const options = ref([
  {
    label: 'Współlokatorzy',
    value: 'roommates'
  },
  {
    label: 'Właściciel',
    value: 'owner'
  },
  {
    label: 'Wszyscy',
    value: 'all'
  }
]);
const group2 = ref('op1');
const options2 = ref([
  {
    label: 'Niska',
    value: 'low'
  },
  {
    label: 'Przeciętna',
    value: 'mid'
  },
  {
    label: 'Wysoka',
    value: 'hi'
  }
]);


const add = () => {
  dialog.value = true;
};

const getFlats = () => {
  void api.get(`/get/flats$owner=${owner.value}&id=${id.value}`)
    .then((res: AxiosResponse<{ all: { name: string, id: number }[], names: string[] }>) => {
      if (res.data.all.length > 0) {
        flats.value = res.data.all;
        flatsnames.value = res.data.names;
      } else {
        $q.notify({
          type: 'negative',
          message: i18n.t('failed'),
        });
      }
    })
}

const send = () => {
  let wynik = flats.value.find(element => element.name === flatschoose.value) || { id: 0 };
  void api.get(`/message/add&messege=${tresc.value}&to=${group.value}&level=${group2.value}&idPlace=${wynik.id}$from=${id.value}`)
    .then((res: AxiosResponse<{ odp: number }>) => {
      if (res.data.odp == 1) {
        $q.notify({
          type: 'positive',
          message: i18n.t('success'),
        });
      } else {
        $q.notify({
          type: 'negative',
          message: i18n.t('failed'),
        });
      }
    })
};

const makeGray = (index: number) => {
  isGray.value[index] = true;
};

onMounted(() => {
  getFlats();
})

</script>

<style>
.bg-gray {
  background-color: gray !important;
  color: white !important;
}
</style>

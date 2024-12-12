<template>
  <q-card class="my-card" style="width: 80%">
    <q-card-section>
      <h4>
        {{ $t('menu.flats') }}
      </h4>
    </q-card-section>
    <div class="hr" />
    <q-card-section>
      <h4 style="margin-left: 2%; margin-bottom: 10px; margin-top: 20px">
        Wybierz Lokal
      </h4>
      <div style="display: flex">
        <q-select
          v-model="choosenflat"
          option-value="id"
          option-label="name"
          :options="options"
          label="Lokal"
          style="width: 50%; margin-left: 2%"
        />
      </div>
    </q-card-section>
    <q-card-section v-if="choosenflat.id !== ''">
      <h4 style="margin-left: 2%; margin-bottom: 10px; margin-top: 20px">
        Dodaj nowych mieszkańców
      </h4>
      <div style="display: flex; margin-left: 2%">
        <q-select
          filled
          v-model="searchresident"
          use-input
          hide-selected
          fill-input
          option-label="login"
          input-debounce="0"
          :options="residentlist"
          @input-value="setModel"
          @filter="filterFn"
          hint="Znajdz użytkownika"
          style="width: 250px; padding-bottom: 32px"
        />
        <q-input
          filled
          v-model="date"
          mask="##-##-####"
          :rules="['date']"
          style="margin-left: 10px"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" mask="MM-DD-YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          filled
          class="input"
          v-model="rooms"
          :label="$t('Pokoje')"
          :hint="`Jest dostępnych ${JSON.stringify(freerooms)} pokoji`"
          style="margin-left: 10px"
        />
        <q-btn
          color="primary"
          @click="addToFlat()"
          label="Dodaj do mieszkania"
          style="height: 55px; margin-left: 10px"
        />
      </div>
    </q-card-section>
    <q-card-section v-if="choosenflat.id !== ''">
      <div style="margin-left: 2%; margin-top: 20px">
        <h4 style="margin-bottom: 10px">Mieszkańcy</h4>
        <q-list class="list">
          <q-item
            clickable
            v-for="(res, index) in residents"
            :key="index"
            v-ripple
            bordered
            separator
            class="item"
          >
            <q-item-section>
              <div
                style="font-size: 20px; margin-top: 20px; margin-bottom: -20px"
              >
                {{ `${res.name} ${res.surname}` }}
              </div>
              <br />
              <p
                v-if="res.end_living == null"
                style="color: rgba(0, 0, 0, 0.5); margin-bottom: -2px"
              >
                {{ `Mieszka od ${res.start_living}` }}
              </p>
              <p v-else style="color: rgba(0, 0, 0, 0.5); margin-bottom: -2px">
                {{ `Mieszka od ${res.start_living} do ${res.end_living}` }}
              </p>
              <p v-if="res.rooms > 1" style="color: rgba(0, 0, 0, 0.5)">
                {{ `${res.rooms} pokoje` }}
              </p>
              <p v-else style="color: rgba(0, 0, 0, 0.5)">
                {{ `${res.rooms} pokój` }}
              </p>
            </q-item-section>
            <q-item-section>
              <q-btn
                icon="menu"
                color="primary"
                flat
                rounded
                size="25px"
                style="width: 100px; margin-left: 50%"
                @click="opendialog(res)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="dialog">
    <q-card>
      <h4 style="margin-bottom: 10px; margin-top: 10px; margin-left: 10px">
        Zarządzanie Lokatora
      </h4>
      <div class="hr" />
      <q-card-section>
        <table
          class="q-table q-table-horizontal-separator q-table-outline q-mb-md table"
        >
          <tbody>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Login</td>
              <td style="font-size: 20px">{{ choosenresident.login }}</td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Imię</td>
              <td style="font-size: 20px">{{ choosenresident.name }}</td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Nazwisko</td>
              <td style="font-size: 20px">{{ choosenresident.surname }}</td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Mieszka od</td>
              <td style="font-size: 20px">
                {{ choosenresident.start_living }}
              </td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">
                Ilość pokoji
              </td>
              <td style="font-size: 20px">
                <q-input
                  filled
                  type="number"
                  v-model="choosenresident.rooms"
                  class="q-my-xs"
                ></q-input>
              </td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Email</td>
              <td style="font-size: 20px">{{ choosenresident.email }}</td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Telefon</td>
              <td style="font-size: 20px">{{ choosenresident.tel }}</td>
            </tr>
            <tr>
              <td style="font-size: 20px" class="text-subtitle2">Mieszka od</td>
              <td style="font-size: 20px; padding-top: 20px">
                <q-input
                  filled
                  v-model="choosenresident.end_living"
                  mask="##-##-####"
                  :rules="['date']"
                  class="q-my-xs"
                  hint="Dodaj termin wyprowdzki, jest to równoważne z usunieciem mieszkańca z domu po tym terminie"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="choosenresident.end_living"
                          mask="MM-DD-YYYY"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </td>
            </tr>
          </tbody>
        </table>
      </q-card-section>
      <q-card-section class="row justify-end">
        <q-btn label="Zapisz" color="green" @click="saveEditResident()" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { api } from 'src/boot/axios';
import { Account, FlatData } from 'src/components/models';
import { GetID } from 'src/utils/GetID';
import { Ref, ref, watch } from 'vue';

const choosenflat: Ref<{ id: string; name: string }> = ref({
  id: '',
  name: '',
});
const user = GetID();
const searchresident = ref(new Account());
const choosenresident = ref(new Account());
const rooms = ref(1);
const dialog = ref(false);
const freerooms = ref(0);
const today = new Date();
const date = ref(
  `${String(today.getDate()).padStart(2, '0')}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${today.getFullYear()}`
);
const flat = ref(new FlatData());
const residents: Ref<Account[]> = ref([]);
const residentlist: Ref<Account[]> = ref([]);
const options: Ref<{ id: string; name: string }[]> = ref([]);

const getFlats = () => {
  api
    .get(`/get/owner/flats/id=${JSON.stringify(user.value)}`)
    .then((response: AxiosResponse<{ id: string; name: string }[]>) => {
      options.value = response.data;
    });
};

const getFlatInfo = (id: string) => {
  api
    .get('/get/owner/flats/info/id=' + id)
    .then(
      (response: AxiosResponse<{ flat: FlatData; residents: Account[] }>) => {
        flat.value = response.data.flat;
        residents.value = response.data.residents;
        let roomstaken = 0;
        residents.value.forEach((ele) => {
          roomstaken += ele.rooms;
        });
        freerooms.value = flat.value.rooms - roomstaken;
      }
    );
};
const addToFlat = () => {
  api
    .get(
      '/add/flats/id=' +
        flat.value.id +
        '&user=' +
        searchresident.value.login +
        '&data=' +
        date.value +
        '&rooms=' +
        rooms.value
    )
    .then(() => {
      getFlatInfo(JSON.stringify(flat.value.id));
    });
  searchresident.value = new Account();
  date.value = `${String(today.getDate()).padStart(2, '0')}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${today.getFullYear()}`;
};

const findResident = (val: string) => {
  api
    .get('/find/user/val=' + val)
    .then((response: AxiosResponse<Account[]>) => {
      residentlist.value = response.data;
    });
};

const opendialog = (res: Account) => {
  choosenresident.value = res;
  let date = choosenresident.value.start_living.split('-');
  choosenresident.value.start_living = date[2] + '-' + date[1] + '-' + date[0];
  if (choosenresident.value.end_living != null) {
    let date = choosenresident.value.end_living.split('-');
    choosenresident.value.end_living = date[2] + '-' + date[1] + '-' + date[0];
  }
  dialog.value = true;
};

watch(choosenflat, () => {
  getFlatInfo(JSON.stringify(choosenflat.value.id));
});

const filterFn = (val: string, update: (arg0: () => void) => void) => {
  update(() => {
    if (val.length > 0) {
      findResident(val);
    }
  });
};

const setModel = (val: string) => {
  searchresident.value =
    residentlist.value.find((item) => item.login === val) || new Account();
};

const saveEditResident = () => {
  api
    .get(
      '/save/flat/user&rooms=' +
        choosenresident.value.rooms +
        '&to=' +
        choosenresident.value.end_living +
        '&id=' +
        choosenresident.value.id
    )
    .then(() => {
      dialog.value = false;
      getFlatInfo(JSON.stringify(choosenflat.value.id));
    });
};

getFlats();
</script>
<style scoped>
h4 {
  font-size: 20px;
  margin-bottom: -10px;
  margin-top: -10px;
  color: rgb(116, 166, 225);
}
.hr {
  background-color: rgb(116, 166, 225);
  height: 1px;
  width: 100%;
}
.hr2 {
  background-color: rgb(0, 0, 0, 0.1);
  height: 1px;
  width: 100%;
}
.text {
  color: rgba(0, 0, 0, 0.6);
}
.input {
  margin-bottom: 5px;
  max-width: 500px;
}
.item {
  width: 550px;
  border-radius: 16px;
}
.list {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  width: 550px;
}
</style>

<template>
  <q-card class="my-card" style="width: 80%">
    <q-card-section>
      <h4>
        {{ $t('menu.account') }}
      </h4>
    </q-card-section>
    <div class="hr" />
    <q-card-section>
      <p class="text">{{ $t('settings.contact') }}</p>
      <q-input
        class="input"
        filled
        v-model="settings.email"
        :label="$t('sign.mail')"
      />
      <q-input
        class="input"
        filled
        v-model="settings.phone"
        :label="$t('sign.tel')"
      />
      <div class="hr2" />
    </q-card-section>
    <q-card-section>
      <p class="text">{{ $t('settings.passwordchange') }}</p>
      <q-input
        filled
        class="input"
        v-model="settings.passwordold"
        :error="wrongpass"
        :label="$t('settings.oldpass')"
      >
        <template v-slot:error>
          {{ $t('settings.wrongpass') }}
        </template>
      </q-input>
      <q-input
        filled
        class="input"
        style="margin-bottom: -15px"
        :error="wrongnewpass"
        v-model="settings.passwordnew"
        :label="$t('settings.newpass')"
      />
      <q-input
        filled
        class="input"
        :error="wrongnewpass"
        v-model="passwordconfirm"
        :label="$t('settings.againnewpass')"
      >
        <template v-slot:error>
          {{ $t('settings.wrongagainpass') }}
        </template>
      </q-input>
      <div class="hr2" />
    </q-card-section>
    <q-card-section class="q-gutter-sm flex justify-end">
      <q-btn
        color="red"
        :label="$t('settings.deleteacc')"
        @click="deleteacc()"
      />
      <q-btn color="primary" :label="$t('settings.save')" @click="save()" />
    </q-card-section>
  </q-card>
  <q-dialog v-model="delete_dialog">
    <q-card>
      <q-card-section>
        <h4>{{ $t('settings.deleteing') }}</h4>
      </q-card-section>
      <div class="hr" />
      <q-card-section>
        <p class="text">{{ $t('settings.deletedis') }}</p>
        <q-input
          filled
          class="input"
          v-model="delaccount.password"
          :error="wrongpassdel"
          :label="$t('sign.password')"
        >
          <template v-slot:error>
            {{ $t('settings.wrongpass') }}
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-gutter-sm flex justify-end">
        <q-btn
          color="red"
          :label="$t('settings.deleteacc')"
          @click="apidel()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { AccountSettings, DeleAccount } from 'src/components/models';
import { GetID } from 'src/utils/GetID';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const passwordconfirm = ref('');
const $q = useQuasar();
const i18n = useI18n();
const router = useRouter();
const delete_dialog = ref(false);
const wrongpass = ref(false);
const wrongpassdel = ref(false);
const wrongnewpass = ref(false);
const id = GetID();
const settings = ref(new AccountSettings(id.value));
const delaccount = ref(new DeleAccount(id.value));

const save = () => {
  if (settings.value.passwordnew == passwordconfirm.value) {
    api
      .get(`/account/settings/${JSON.stringify(settings.value)}`)
      .then((response: AxiosResponse<string>) => {
        if (response.data == 'wrong password') {
          wrongpass.value = true;
          wrongnewpass.value = false;
        } else if (response.data == 'OK') {
          wrongnewpass.value = false;
          wrongpass.value = false;
          void prepereform();
          $q.notify({
            type: 'positive',
            message: i18n.t('success'),
          });
        }
      });
  } else {
    wrongpass.value = false;
    wrongnewpass.value = true;
  }
};

const apidel = () => {
  api
    .get(
      `/dele/account/id=${JSON.stringify(
        delaccount.value.id
      )}&password=${JSON.stringify(delaccount.value.password)}`
    )
    .then((response: AxiosResponse<string>) => {
      if (response.data == 'wrong password') {
        wrongpassdel.value = true;
      } else {
        router.push('/login');
        localStorage.removeItem('user');
      }
    });
};

const prepereform = () => {
  api
    .get(`/account/prepersettings/${JSON.stringify(id.value)}`)
    .then((response: AxiosResponse<{ email: string; tel: string }>) => {
      settings.value.email = response.data.email;
      settings.value.phone = response.data.tel;
      settings.value.passwordnew = '';
      settings.value.passwordold = '';
      passwordconfirm.value = '';
    });
};

const deleteacc = () => {
  delete_dialog.value = true;
};

void prepereform();
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
</style>

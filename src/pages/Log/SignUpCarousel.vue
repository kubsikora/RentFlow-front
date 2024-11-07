<template>
  <q-carousel
    v-model="slide"
    vertical
    transition-prev="slide-down"
    transition-next="slide-up"
    swipeable
    animated
    control-color="white"
    navigation-icon="radio_button_unchecked"
    padding
    height="500px"
    class="bg-white text-black rounded-borders"
  >
    <q-carousel-slide name="basic_data" class="column no-wrap flex-center">
      <p style="margin-top: -100px; color: rgba(0, 0, 0, 0.6); font-size: 20px">
        {{ $t('sign.basic_data') }}
      </p>
      <q-input
        style="width: 50%"
        outlined
        v-model="SignData.name"
        :label="$t('sign.name')"
      />
      <q-input
        outlined
        style="width: 50%; margin-top: 10px"
        v-model="SignData.surname"
        :label="$t('sign.surname')"
      />
      <q-input
        outlined
        style="width: 50%; margin-top: 10px"
        v-model="SignData.tel"
        :label="$t('sign.tel')"
      />
      <q-input
        outlined
        style="width: 50%; margin-top: 10px"
        v-model="SignData.mail"
        :label="$t('sign.mail')"
      />
      <p
        style="
          margin-top: 10px;
          margin-bottom: -0px;
          color: rgba(0, 0, 0, 0.6);
          margin-left: -30%;
        "
      >
        {{ $t('sign.birth') }}
      </p>
      <div
        style="
          display: flex;
          margin-top: 10px;
          justify-content: center;
          align-items: center;
        "
      >
        <q-input
          style="width: 16%"
          outlined
          v-model="SignData.birth.day"
          :label="$t('sign.day')"
        />
        <q-input
          style="width: 16%; margin-left: 1%; margin-right: 1%"
          outlined
          v-model="SignData.birth.month"
          :label="$t('sign.month')"
        />
        <q-input
          style="width: 16%"
          outlined
          v-model="SignData.birth.year"
          :label="$t('sign.year')"
        />
      </div>
      <q-btn
        :label="$t('next')"
        style="
          background-color: rgb(116, 166, 225);
          color: white;
          border-radius: 16px;
          font-size: 15px;
          margin-top: 20px;
          margin-bottom: -50px;
        "
        @click="next('address_data')"
      />
    </q-carousel-slide>

    <q-carousel-slide name="address_data" class="column no-wrap flex-center">
      <p style="margin-top: -100px; color: rgba(0, 0, 0, 0.6); font-size: 20px">
        {{ $t('sign.address_data') }}
      </p>
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.address.zipcode"
        :label="$t('address.postalcode')"
      />
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.address.city"
        :label="$t('address.city')"
      />
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.address.street"
        :label="$t('address.street')"
      />
      <div
        style="
          display: flex;
          margin-top: 10px;
          justify-content: center;
          align-items: center;
        "
      >
        <q-input
          style="width: 35%; margin-right: 3%"
          outlined
          v-model="SignData.address.house_number"
          :label="$t('address.house_number')"
        />
        <q-input
          style="width: 35%"
          outlined
          v-model="SignData.address.flat_number"
          :label="$t('address.flat_number')"
        />
      </div>
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.rooms"
        :label="$t('address.rooms')"
      />
      <q-btn
        :label="$t('next')"
        style="
          background-color: rgb(116, 166, 225);
          color: white;
          border-radius: 16px;
          font-size: 15px;
          margin-top: 50px;
          margin-bottom: -50px;
        "
        @click="next('pass')"
      />
    </q-carousel-slide>

    <q-carousel-slide name="pass" class="column no-wrap flex-center">
      <p style="margin-top: -100px; color: rgba(0, 0, 0, 0.6); font-size: 20px">
        {{ $t('sign.pass') }}
      </p>
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.logs.login"
        :label="$t('log.log')"
      />
      <q-input
        outlined
        v-model="SignData.logs.password"
        :type="passwordVisible ? 'text' : 'password'"
        :label="$t('log.password')"
        style="margin-top: 10px; width: 50%"
      >
        <template v-slot:append>
          <q-btn
            flat
            round
            icon="visibility"
            v-if="passwordVisible"
            @click="togglePasswordVisibility"
          />
          <q-btn
            flat
            round
            icon="visibility_off"
            v-else
            @click="togglePasswordVisibility"
          />
        </template>
      </q-input>
      <q-btn
        :label="$t('next')"
        style="
          background-color: rgb(116, 166, 225);
          color: white;
          border-radius: 16px;
          font-size: 15px;
          margin-top: 50px;
          margin-bottom: -50px;
        "
        @click="next('save')"
      />
    </q-carousel-slide>

    <q-carousel-slide name="save" class="column no-wrap flex-center">
      <q-spinner color="primary" size="3em" :thickness="10" />
      <h4 style="font-size: 20px; color: rgb(116, 166, 225)">
        {{ $t('sign.saving_data') }}
      </h4>
    </q-carousel-slide>

    <q-carousel-slide name="done" class="column no-wrap flex-center">
      <q-icon
        name="done"
        size="200px"
        style="margin-top: -150px; color: rgb(116, 166, 225)"
      ></q-icon>
      <p style="color: rgba(0, 0, 0, 0.6); font-size: 20px">
        {{ $t('sign.done') }}
      </p>
      <q-btn
        flat
        size="15px"
        :label="$t('login')"
        class="btn"
        style="margin-top: 50px"
        @click="login"
      />
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { defaultSignupData, SignupData } from 'src/components/models';
import { Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import axios from 'axios';

defineOptions({
  name: 'SignUpCarousel',
});
const router = useRouter();
const $q = useQuasar();
const i18n = useI18n();
const passwordVisible = ref(false);

const csrfMetaTag = document.querySelector('meta[name="csrf-token"]');
if (csrfMetaTag && csrfMetaTag.getAttribute('content')) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfMetaTag.getAttribute(
    'content'
  ) as string;
} else {
  console.error('CSRF token meta tag is missing.');
}

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const next = async (where: string) => {
  if (where === 'address_data') {
    const data = [
      [SignData.value.name, 'txt'],
      [SignData.value.surname, 'txt'],
      [SignData.value.tel, 'tel'],
      [SignData.value.birth.day, 'day'],
      [SignData.value.birth.month, 'month'],
      [SignData.value.birth.year, 'year'],
      [SignData.value.mail, 'mail'],
    ];

    const hasInvalidInput = data.some((ele) => {
      if (!validateInput(ele[0], ele[1])) {
        $q.notify({
          type: 'negative',
          message: i18n.t('error.index'),
        });
        return true;
      }
      return false;
    });

    if (!hasInvalidInput) {
      slide.value = where;
    }
  } else if (where === 'pass') {
    const data2 = [
      [SignData.value.address.zipcode, 'zipcode'],
      [SignData.value.address.city, 'txt'],
      [SignData.value.address.street, 'txt'],
      [SignData.value.address.house_number, 'number'],
      // [SignData.value.address.flat_number, 'number'],
      [SignData.value.rooms, 'number'],
    ];

    const hasInvalidInput = data2.some((ele) => {
      if (!validateInput(ele[0], ele[1])) {
        $q.notify({
          type: 'negative',
          message: i18n.t('error.index'),
        });
        return true;
      }
      return false;
    });

    if (!hasInvalidInput) {
      slide.value = where;
    }
  } else if (where === 'save') {
    api
      .get(`/user/exist/${SignData.value.logs.login}`)
      // .get(`/test`)
      .then((response: AxiosResponse<number>) => {
        if (response.data == 1) {
          $q.notify({
            type: 'negative',
            message: i18n.t('error.user_used'),
          });
        } else {
          slide.value = where;
          saveData();
        }
      });
  }
};

const saveData = async () => {
  try {
    const dataToSend = JSON.parse(JSON.stringify(SignData.value));

    const response = await api.get(`/user/store/${JSON.stringify(dataToSend)}`);

    if (response.data) {
      $q.notify({
        type: 'positive',
        message: i18n.t('success'),
      });
      slide.value = 'done';
    } else {
      $q.notify({
        type: 'negative',
        message: i18n.t('failed'),
      });
      slide.value = 'basic_data';
    }
  } catch (error) {
    console.error('Save data error:', error);
    $q.notify({
      type: 'negative',
      message: i18n.t('error.server_error'),
    });
  }
};

const validateInput = (
  data: string | number | null,
  type: string | number | null
) => {
  if (data === null) {
    return false;
  }

  const dataString = JSON.stringify(data).substring(
    1,
    JSON.stringify(data).length - 1
  );

  if (type == 'txt') {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    return !specialCharacters.test(dataString);
  } else if (type == 'tel') {
    const phonePattern = /^(\+?\d{11}|\d{9})$/;
    return phonePattern.test(dataString);
  } else if (type == 'mail') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(dataString);
  } else if (type == 'day') {
    const dayPattern = /^(0?[1-9]|[12][0-9]|3[01])$/;
    return dayPattern.test(dataString);
  } else if (type == 'month') {
    const monthPattern = /^(0?[1-9]|1[0-2])$/;
    return monthPattern.test(dataString);
  } else if (type == 'year') {
    const yearPattern = /^(19|20)\d{2}$/;
    return yearPattern.test(dataString);
  } else if (type == 'number') {
    return !isNaN(Number(dataString)) && isFinite(Number(dataString));
  } else if (type == 'zipcode') {
    const zipPattern = /^\d{2}-\d{3}$/;
    return zipPattern.test(dataString);
  }

  return false;
};

const login = () => {
  router.push('/login');
};
const SignData: Ref<SignupData> = ref(defaultSignupData());
const slide = ref('basic_data');
</script>
<style scoped>
.btn {
  background-color: rgb(116, 166, 225);
  color: white;
  border-radius: 20px;
}
</style>

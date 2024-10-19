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
        @click="slide = 'address_data'"
      />
    </q-carousel-slide>

    <q-carousel-slide name="address_data" class="column no-wrap flex-center">
      <p style="margin-top: -100px; color: rgba(0, 0, 0, 0.6); font-size: 20px">
        {{ $t('sign.address_data') }}
      </p>
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.address.country"
        :label="$t('address.country')"
      />
      <q-input
        style="width: 50%; margin-top: 10px"
        outlined
        v-model="SignData.address.postalcode"
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
        @click="slide = 'done'"
      />
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
import { defaultSignupData, SignupData } from 'src/components/models';
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'SignUpCarousel',
});
const router = useRouter();

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

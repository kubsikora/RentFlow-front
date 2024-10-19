<template>
  <q-layout view="lHh Lpr lFf">
    <ToolbarComponent />
    <q-img src="pics/background.png" style="margin-top: -122px">
      <q-card class="bg-white log-card" style="margin-top: 220px">
        <div class="loginput">
          <h2 class="name text-center">{{ $t('name') }}</h2>
          <q-input outlined v-model="login" :label="$t('log.log')" />
          <q-input
            outlined
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'"
            :label="$t('log.password')"
            style="margin-top: 10px"
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
            :label="$t('log.login')"
            @click="loginSetup"
            style="
              background-color: rgb(116, 166, 225);
              margin-top: 40px;
              width: 100%;
              border-radius: 8px;
            "
          />
          <p class="lowerdis text-center" style="margin-top: 50px">lub</p>
          <q-btn
            :label="$t('log.signup')"
            @click="signup"
            style="
              background-color: rgb(116, 166, 225);
              margin-top: 30px;
              width: 100%;
              border-radius: 8px;
            "
          />
        </div>
      </q-card>
    </q-img>
  </q-layout>
</template>

<script setup lang="ts">
import ToolbarComponent from 'src/components/ToolbarComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const login = ref('');
const password = ref('');
const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const signup = () => {
  router.push('/sign-up');
};
const loginSetup = () => {
  router.push('/home');
};
</script>

<style scoped>
.log-card {
  width: 40%;
  height: 700px;
  margin-left: 30%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.loginput {
  margin-top: 80px;
  width: 60%;
  margin-left: 20%;
}
.lowerdis {
  color: rgb(0, 0, 0, 0.5);
  font-size: 14px;
}
.name {
  color: rgb(116, 166, 225);
  font-weight: 500;
  font-size: 90px;
}
</style>

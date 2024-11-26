<template>
  <q-header elevated>
    <q-toolbar class="toolbar">
      <q-toolbar-title class="q-ml-xl" @click="backtowelcome">
        RentFlow
      </q-toolbar-title>
      <q-btn
        v-if="signButton"
        flat
        size="15px"
        :label="$t('signupnormal')"
        class="btn q-mr-md"
        @click="signupnormal"
      />
      <q-btn
        v-if="signButton"
        flat
        size="15px"
        :label="$t('signup')"
        class="btn q-mr-md"
        @click="signup"
      />
      <q-btn
        v-if="logButton"
        flat
        size="15px"
        :label="$t('login')"
        class="btn q-mr-xl"
        @click="login"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineOptions({
  name: 'ToolbarComponent',
});

defineProps({
  logButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  signButton: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const router = useRouter();

const login = () => {
  router.push('/login');
};

const backtowelcome = () => {
  router.push('/');
};

const signup = () => {
  router.push('/sign-up');
};

const signupnormal = () => {
  router.push('/sign-up-user');
};

</script>
<style scoped>
.toolbar {
  color: rgb(116, 166, 225);
  background-color: rgb(255, 255, 255);
}
.btn {
  background-color: rgb(116, 166, 225);
  color: white;
  border-radius: 20px;
}
</style>

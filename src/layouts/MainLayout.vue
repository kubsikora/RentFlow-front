<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> RentFlow </q-toolbar-title>
        <q-btn flat size="20px" icon="logout" class="q-mr-xl" @click="logout" />
        <!-- <q-icon size="30px" name="language" class="q-mr-xs" /> -->
        <!-- <div>
          <q-select
            v-model="selectedLang"
            :options="languages"
            class="select q-mr-xl"
            @update:model-value="changeLanguage"
          />
        </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="drawer">
      <q-list>
        <q-item-label header style="color: rgba(0, 0, 0, 0.2)" class="q-mt-xl">
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-layout style="padding: 50px">
        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'MainLayout',
});

// const { locale } = useI18n();
const router = useRouter();
const i18n = useI18n();
// const languages = [
//   { label: 'PL', value: 'pl-PL' },
//   { label: 'ENG', value: 'en-US' },
// ];

// const selectedLang = ref(locale.value);

// function changeLanguage(lang: string) {
//   locale.value = lang;
// }

const logout = () => {
  router.push('/login');
};

const linksList: EssentialLinkProps[] = [
  {
    title: i18n.t('menu.dashbord'),
    icon: 'widgets',
    to: '/',
  },
  {
    title: i18n.t('menu.messeges'),
    icon: 'chat',
    to: '/messeges',
  },
  {
    title: i18n.t('menu.stats'),
    icon: 'equalizer',
    to: '/stats',
  },
  {
    title: i18n.t('menu.counter'),
    icon: 'flash_on',
    to: '/counter-readings',
  },
];

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style>
.toolbar {
  color: rgb(116, 166, 225);
  background-color: rgb(255, 255, 255);
}
.select {
  color: rgb(116, 166, 225);
  background-color: rgb(255, 255, 255);
  width: 150px;
}
</style>

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
        <h8 style="margin-right: 50px; font-size: 18px">{{ name }}</h8>
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
      <q-layout
        style="
          padding: 50px;
          background: rgb(188, 174, 225);
          background: linear-gradient(
            0deg,
            rgba(188, 174, 225, 1) 0%,
            rgba(255, 255, 255, 1) 80%
          );
        "
      >
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
import { UserFullName } from 'src/utils/UserFullName';

defineOptions({
  name: 'MainLayout',
});

const name = UserFullName();
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
  localStorage.removeItem('user');
};

const linksList: EssentialLinkProps[] = [
  {
    title: i18n.t('menu.dashbord'),
    icon: 'widgets',
    to: '/home',
    owner: 2,
  },
  {
    title: i18n.t('menu.messeges'),
    icon: 'chat',
    to: '/messeges',
    owner: 2,
  },
  {
    title: i18n.t('menu.stats'),
    icon: 'equalizer',
    to: '/stats',
    owner: 2,
  },
  {
    title: i18n.t('menu.counter'),
    icon: 'flash_on',
    to: '/counter-readings',
    owner: 2,
  },
  {
    title: i18n.t('menu.reports'),
    icon: 'note',
    to: '/reports',
    owner: 2,
  },
  {
    title: i18n.t('menu.configuration'),
    icon: 'settings',
    owner: 2,
    children: [
      {
        title: i18n.t('menu.residents'),
        icon: 'people',
        to: '/configuration/residents',
        owner: 1,
      },
      {
        title: i18n.t('menu.flats'),
        icon: 'apartment',
        to: '/configuration/flats',
        owner: 1,
      },
      {
        title: i18n.t('menu.account'),
        icon: 'apartment',
        to: '/configuration/account',
        owner: 2,
      },
    ],
  },
];

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style scoped>
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

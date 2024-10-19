<template>
  <q-layout view="lHh Lpr lFf">
    <ToolbarComponent :log-button="true" :sign-button="true" />
    <q-img src="pics/background.png" style="margin-top: 100px">
      <WelcomeCard style="margin-top: 20px" />
      <LowerLeftCards />
      <LowerRightCards />
    </q-img>
  </q-layout>
</template>

<script setup lang="ts">
import ToolbarComponent from 'src/components/ToolbarComponent.vue';
import WelcomeCard from './WelcomeCard.vue';
import LowerLeftCards from './LowerLeftCards.vue';
import LowerRightCards from './LowerRightCards.vue';
</script>

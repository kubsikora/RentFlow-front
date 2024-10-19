<template>
  <q-card class="bg-white flex-center">
    <div class="left">
      <h2 class="name">{{ $t('name') }}</h2>
      <p class="dis">{{ $t('welcome.description') }}</p>
      <p class="motto">{{ $t('welcome.motto') }}</p>
    </div>
    <div class="right">
      <q-img class="pic" src="pics/RentFlow-logo.png" />
    </div>
  </q-card>
</template>
<script setup lang="ts">
defineOptions({
  name: 'WelcomeCard',
});
</script>
<style scoped>
.flex-center {
  display: flex;
  height: 500px;
  width: 70%;
  margin-top: 14%;
  margin-left: 15%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.pic {
  height: 400px;
  max-width: 430px;
}
.left {
  height: 100%;
  width: 50%;
  padding-top: 5%;
  background-color: rgba(0, 0, 0, 0);
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
}
.dis {
  color: rgb(0, 0, 0, 0.6);
  font-size: 20px;
}
.name {
  color: rgb(116, 166, 225);
  font-weight: 500;
}
.motto {
  color: rgb(116, 166, 225);
  font-size: 20px;
}
</style>

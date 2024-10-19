<template>
  <q-card class="bg-white left1">
    <q-icon
      name="mail"
      size="220px"
      style="color: rgb(116, 166, 225); margin-left: 2%; margin-top: 2%"
    ></q-icon>
    <div style="width: 60%; height: 100%; margin-left: 40%; margin-top: -150px">
      <p class="lowerdis">{{ $t('welcome.mail') }}</p>
    </div>
  </q-card>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LowerRightCards',
});
</script>
<style scoped>
.left1 {
  height: 300px;
  width: 40%;
  background-color: white;
  border-radius: 16px;
  margin-left: 45%;
  margin-top: 550px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.lowerdis {
  color: rgb(0, 0, 0, 0.5);
  font-size: 18px;
}
</style>

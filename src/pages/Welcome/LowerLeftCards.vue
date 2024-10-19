<template>
  <q-card class="bg-white right2">
    <q-icon
      name="trending_up"
      size="150px"
      style="color: rgb(116, 166, 225); margin-left: 60%"
    ></q-icon>
    <p class="lowerdis">{{ $t('welcome.graph') }}</p>
  </q-card>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LowerLeftCards',
});
</script>
<style scoped>
.right2 {
  height: 300px;
  width: 28.3%;
  background-color: white;
  border-radius: 16px;
  margin-left: 15%;
  margin-top: 550px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.lowerdis {
  color: rgb(0, 0, 0, 0.5);
  font-size: 18px;
}
</style>

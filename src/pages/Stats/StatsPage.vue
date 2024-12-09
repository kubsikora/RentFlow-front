
<template>
  <div class="q-pa-md">
    <div style="max-width: 100%">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab class="text-pink" name="energy" label="Energia" />
        <q-tab class="text-blue" name="water" label="Woda" />
        <q-tab class="text-yellow" name="gas" label="Gaz" />
        <q-tab class="text-orange" name="heat" label="Ciepło" />
      </q-tabs>

      <div class="q-gutter-y-sm">

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-grey text-white text-center"
        >
        <q-tab-panel name="energy" class="q-tab2">
            
          </q-tab-panel>
          <q-tab-panel name="water" class="q-tab1">

          </q-tab-panel>
          <q-tab-panel name="gas" class="q-tab1">

          </q-tab-panel>
          <q-tab-panel name="heat" class="q-tab1">

          </q-tab-panel>

        </q-tab-panels>
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-pink text-white text-center"
        >
        <q-tab-panel name="energy" class="q-tab2">

</q-tab-panel>

          <q-tab-panel name="water" class="q-tab2">
            <div class="center-wrapper">


  </div>
          </q-tab-panel>
          <q-tab-panel name="gas" class="q-tab2">
            <div class="center-wrapper">

  </div>
          </q-tab-panel>
          <q-tab-panel name="heat" class="q-tab2">

          </q-tab-panel>

        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-orange text-white text-center"
        >
          <q-tab-panel name="energy" class="q-tab3">
            c5

          </q-tab-panel>
          <q-tab-panel name="water" class="q-tab3">
            c4
          </q-tab-panel>
          <q-tab-panel name="gas" class="q-tab3">
            c3
          </q-tab-panel>
          <q-tab-panel name="heat" class="q-tab3">
            <div>statystyki ciepła</div>
          </q-tab-panel>

        </q-tab-panels>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('energy'),
      model: ref(10),
      energyReadDate: ref('21.11.2023'),
      energyState: ref(201023),
      energyAverageConsumption: ref(245),
      energyIncrease: ref(24),
      energyAverageCost: ref(321),
      date: ref('2024/01/01')
    }
  }
}

</script>
<style scoped>

.q-tab2 {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.pole-panel {
  display: flex;
  justify-content: space-between;
  width: 80%; /* Adjust width as needed */
  height: auto; /* Allows flexibility */
  box-shadow: 0px 0px 9px -7px rgba(66, 68, 90, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 1px;
  margin-top: 10px;
}

.panel1, .panel2 {
  width: 50%; /* Divides space equally */
  padding: 5px;
  text-align: center;
  vertical-align: middle;

}

.panel1 {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 16px 0px 0px 16px;
}

.panel2 {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0px 16px 16px 0px;
}

</style>

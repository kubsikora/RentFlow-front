<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=trending_up"
  />
  <div class="q-pa-md">
    <div style="max-width: 100%">
      <!-- Tabs -->
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab class="text-blue" name="tenant" label="Najemca" />
        <q-tab class="text-red" name="owner" label="Właściciel" />
      </q-tabs>

      <!-- Tab Panels -->
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="jump-up"
        transition-next="jump-down"
        class="q-gutter-y-sm text-center"
      >
        <!-- Tenant Tab -->
        <q-tab-panel name="tenant">
          <h5>
            Statystyki dotyczące zużyć dla obiektu
            <b>321934 - Katowice, ul. Mariacka 22/4</b>
          </h5>
          <h6>ENERGIA ELEKTRYCZNA</h6>
          <div class="q-pa-md example-row-equal-width">
            <div class="row">
              <div class="col-5">
                <Bar
                  id="my-chart-id"
                  :options="chartOptions"
                  :data="chartDataEnergy"
                />
              </div>
              <div class="col-3">
                <span class="material-symbols-outlined"> trending_up </span
                ><br />
                Wzrost o 32.34 %
              </div>
              <div class="col-3">
                <div class="q-pa-md">
                  <div
                    class="q-gutter-y-md column"
                    style="vertical-align: middle"
                  >
                    <q-rating
                      v-model="ratingModelEnergy"
                      size="4em"
                      color="orange"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6>ZUŻYCIE WODY</h6>
          <div class="q-pa-md example-row-equal-width">
            <div class="row">
              <div class="col-5">
                <Bar
                  id="my-chart-id"
                  :options="chartOptions"
                  :data="chartDataWater"
                />
              </div>
              <div class="col-3">
                <span class="material-symbols-outlined"> trending_up </span
                ><br />
                SPADEK o 3.12 %
              </div>
              <div class="col-3">
                <div class="q-pa-md">
                  <div
                    class="q-gutter-y-md column"
                    style="vertical-align: middle"
                  >
                    <q-rating
                      v-model="ratingModelWater"
                      size="4em"
                      color="orange"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6>ZUŻYCIE GAZU</h6>
          <div class="q-pa-md example-row-equal-width">
            <div class="row">
              <div class="col-5">
                <Bar
                  id="my-chart-id"
                  :options="chartOptions"
                  :data="chartDataGas"
                />
              </div>
              <div class="col-3">
                <span class="material-symbols-outlined"> trending_up </span
                ><br />
                Wzrost o 47.34 %
              </div>
              <div class="col-3">
                <div class="q-pa-md">
                  <div
                    class="q-gutter-y-md column"
                    style="vertical-align: middle"
                  >
                    <q-rating
                      v-model="ratingModelGas"
                      size="4em"
                      color="orange"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6>ENERGIA CIEPLNA</h6>
          <div class="q-pa-md example-row-equal-width">
            <div class="row">
              <div class="col-5">
                <Bar
                  id="my-chart-id"
                  :options="chartOptions"
                  :data="chartDataHeat"
                />
              </div>
              <div class="col-3">
                <span class="material-symbols-outlined"> trending_up </span
                ><br />
                Spadek o 2.34 %
              </div>
              <div class="col-3">
                <div class="q-pa-md">
                  <div
                    class="q-gutter-y-md column"
                    style="vertical-align: middle"
                  >
                    <q-rating
                      v-model="ratingModelHeat"
                      size="4em"
                      color="orange"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- Na podstawie elementów z bazy danych, musimy załadować wszystkie mieszkania właściciela, jeżeli nie jest właścicielem to zablokuj okno -->
        <q-tab-panel name="owner">
          <h5>Wybierz mieszkanie, które chcesz zobaczyć:</h5>
          <div>
            <div class="q-pa-md">
              <q-btn-dropdown color="primary" label="Lokal">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Katowice, ul. Mariacka 22/4</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Katowice, ul. Mariacka 22/6</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Katowice, ul. Mariacka 22/8</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
// do chartów ładujemy dane z bazy danych dotyczące danego mieszkania
export default {
  name: 'StatsPage',
  components: { Bar },
  data() {
    return {
      tab: 'tenant', // Default active tab
      ratingModelEnergy: ref(2),
      ratingModelWater: ref(5),
      ratingModelGas: ref(1),
      ratingModelHeat: ref(5),
      chartDataEnergy: {
        labels: [
          'Styczeń',
          'Luty',
          'Marzec',
          'Kwiecień',
          'Maj',
          'Czerwiec',
          'Lipec',
          'Sierpień',
          'Wrzesień',
          'Październik',
          'Listopad',
          'Grudzień',
        ],
        datasets: [
          {
            label: 'Energia',
            data: [40, 20, 12, 31, 45, 51, 34, 22, 34, 45, 43, 32],
            backgroundColor: 'purple',
          },
        ],
      },
      chartDataWater: {
        labels: [
          'Styczeń',
          'Luty',
          'Marzec',
          'Kwiecień',
          'Maj',
          'Czerwiec',
          'Lipec',
          'Sierpień',
          'Wrzesień',
          'Październik',
          'Listopad',
          'Grudzień',
        ],
        datasets: [
          {
            label: 'Woda',
            data: [40, 20, 12, 31, 45, 51, 34, 22, 34, 45, 43, 32],
            backgroundColor: 'blue',
          },
        ],
      },
      chartDataGas: {
        labels: [
          'Styczeń',
          'Luty',
          'Marzec',
          'Kwiecień',
          'Maj',
          'Czerwiec',
          'Lipec',
          'Sierpień',
          'Wrzesień',
          'Październik',
          'Listopad',
          'Grudzień',
        ],
        datasets: [
          {
            label: 'Gaz',
            data: [40, 20, 12, 31, 45, 51, 34, 22, 34, 45, 43, 32],
            backgroundColor: 'yellow',
          },
        ],
      },
      chartDataHeat: {
        labels: [
          'Styczeń',
          'Luty',
          'Marzec',
          'Kwiecień',
          'Maj',
          'Czerwiec',
          'Lipec',
          'Sierpień',
          'Wrzesień',
          'Październik',
          'Listopad',
          'Grudzień',
        ],
        datasets: [
          {
            label: 'Ogrzewanie',
            data: [40, 20, 12, 31, 45, 51, 34, 22, 34, 45, 43, 32],
            backgroundColor: 'orange',
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.q-tab2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.example-row-equal-width .row {
  display: flex;
}

.example-row-equal-width .col-5 {
  flex: 5;
}

.example-row-equal-width .col-3 {
  flex: 3;
}

.material-symbols-outlined {
  font-size: 90px;
  font-variation-settings: 'FILL' 0, 'wght' 1200, 'GRAD' 5, 'opsz' 80;
}
</style>

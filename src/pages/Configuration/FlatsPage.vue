<template>
  <q-page padding>
    <q-card v-for="flat in flats" :key="flat.id" class="q-mb-md">
      <q-card-section>
        <div class='text-h6'>Adres mieszkania: {{ flat.address }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div><strong>Najemca:</strong> {{ flat.tenant }}</div>
        <div><strong>Saldo:</strong> {{ flat.balance.toFixed(2) }} zł</div>
        <div>
          <strong>Okres wynajmu:</strong> {{ flat.rentFrom }} - {{ flat.rentTo }}
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
//dane dotyczące mieszkań należy wyciągnać z bazy danych na podstawie danych właściciela
export default {
  name: 'FlatsPage',
  data() {
    return {
      flats: [
        {
          id: 1,
          address: 'ul. Mariacka 42/3, 42-534, Katowice',
          tenant: 'Stefan Kaszelski',
          balance: -3200,
          rentFrom: '2022-01-01',
          rentTo: '2026-01-31',
        },
        {
          id: 2,
          address: 'ul. Chorzowska 56/7 42-654 Katowice',
          tenant: 'Andrzej Nowakowski',
          balance: 950.75,
          rentFrom: '2025-01-01',
          rentTo: '2028-01-31',
        },
        {
          id: 3,
          address: 'ul. Milewska',
          tenant: 'Danuta Kowalewska',
          balance: 0,
          rentFrom: '2025-01-01',
          rentTo: '2025-01-31',
        },
      ],
    };
  },
};
</script>

<style scoped>
.q-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.q-card-section {
  padding: 16px;
}
.text-h6 {
  font-weight: bold;
}
</style>

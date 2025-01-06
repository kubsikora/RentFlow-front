<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=trending_up"
  />
  <div class="q-pa-md q-gutter-sm">
    <h2>GENERUJ RAPORTY</h2>
    <q-btn
      class="btn"
      color="primary"
      icon="bolt"
      icon-right="send"
      label="Raport energetyczny"
      @click="createFile('Raport energetyczny')"
    />
    <br />
    <q-btn
      class="btn"
      color="primary"
      icon="water_drop"
      icon-right="send"
      label="Raport zużycia wody"
      @click="createFile('Raport zużycia wody')"
    />
    <br />
    <q-btn
      class="btn"
      color="primary"
      icon="gas_meter"
      icon-right="send"
      label="Raport zużycia gazu"
      @click="createFile('Raport zużycia gazu')"
    />
    <br />
    <q-btn
      class="btn"
      color="primary"
      icon="hvac"
      icon-right="send"
      label="Raport zużycia ciepła"
      @click="createFile('Raport zużycia ciepła')"
    />
    <br />
    <q-btn
      class="btn"
      color="primary"
      icon="attach_money"
      icon-right="send"
      label="Raport kosztów"
      @click="createFile('Raport kosztów')"
    />
    <br />
    <q-btn
      class="btn"
      color="primary"
      icon="calendar_month"
      icon-right="send"
      label="Raport miesięczny"
      @click="createFile('Raport miesięczny')"
    />
    <br />
    <q-btn
      class="btn"
      color="primary"
      icon="info"
      icon-right="send"
      label="Raport informacyjny"
      @click="createFile('Raport informacyjny')"
    />
    <br />
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
      createFile(reportType: string) {
        const content = `${reportType} content goes here.\nGenerated on ${new Date().toLocaleString()}`;
        const fileName = `${reportType.replace(/ /g, '_')}_report.txt`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger download
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }
  };
</script>

<style>
.btn {
  width: 25%;
  font-size: 18px;
}
</style>

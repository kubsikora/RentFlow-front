<template>
  <q-page>
    <q-btn @click="openModal" label="Dodaj Zadanie" color="green"></q-btn>
    <FullCalendar :options="calendarOptions" />
  </q-page>
  <q-dialog v-model="showModal">
    <calendar-modal :date_from="selectedDateFrom" :date_to="selectedDateTo" @closeModal="closeModal"
      @saveTask="handleSaveTask" />
  </q-dialog>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { defineComponent, reactive, ref } from 'vue';
import CalendarModal from 'src/components/Calendar/CalendarModal.vue';

export default defineComponent({
  components: {
    FullCalendar,
    CalendarModal,
  },
  setup() {

    const showModal = ref(false);

    const selectedDateFrom = ref('');
    const selectedDateTo = ref('');

    const calendarOptions = reactive({
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      selectMirror: true,
      events: [

      ],
      select(info) {
        selectedDateFrom.value = info.startStr;
        selectedDateTo.value = info.endStr;
        openModal();
      },
      dateClick(info) {
        alert(`Kliknięto na datę: ${info.dateStr}`);
        selectedDateFrom.value = info.dateStr;
        selectedDateTo.value = '';
        openModal();
      },
      eventClick(info) {
        alert(`Kliknięto na wydarzenie: ${info.event.title}`);
      },
    });

    const openModal = () => {
      showModal.value = true;
    }

    const closeModal = () => {
      showModal.value = false;
    }

    const handleSaveTask = ({ start, end, title, color }) => {
      calendarOptions.events.push({
        title: title,
        start: start,
        end: end,
        color: color,
      });
    };

    return {
      calendarOptions,
      showModal,
      selectedDateFrom,
      selectedDateTo,
      closeModal,
      openModal,
      handleSaveTask,
    };
  },
});
</script>

<style></style>

<template>
  <q-card>

    <q-card-section class="row">
      <q-input v-model="formattedDateFrom" label="Data Od" class="col q-ma-md">
        <template v-slot:append>
          <q-icon name="event" @click="openDateFromModal" />
        </template>
        <q-popup-proxy v-model="dateFromModal" transition-show="scale" transition-hide="scale">
          <div class="q-gutter-md row items-start">
            <q-date v-model="localDateFrom.date" mask="YYYY-MM-DD" />
            <q-time v-model="localDateFrom.time" format24h />
          </div>
        </q-popup-proxy>
      </q-input>

      <q-input v-model="formattedDateTo" label="Data Do" class="col q-ma-md">
        <template v-slot:append>
          <q-icon name="event" @click="openDateToModal" />
        </template>
        <q-popup-proxy v-model="dateToModal" transition-show="scale" transition-hide="scale">
          <div class="q-gutter-md row items-start">
            <q-date v-model="localDateTo.date" mask="YYYY-MM-DD" />
            <q-time v-model="localDateTo.time" format24h />
          </div>
        </q-popup-proxy>
      </q-input>
    </q-card-section>

    <q-card-section class="row">
      <q-select v-model="selectpriority" :options="priorityOption" label="Priorytet zadania" option-value="value"
        option-label="label" class="q-ma-md col" />

      <q-input label="Kolor zadania" filled v-model="color" class="col q-ma-md" :style="{ backgroundColor: color }">
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="color" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>

    <q-card-section>
      <q-input v-model="title" dense label="Tytuł" class="q-mx-md q-my-sm" style="width: 100%;" />
      <q-editor v-model="description" />
    </q-card-section>

    <q-card-section class="text-center row justify-center q-gutter-md">
      <q-btn label="Zamknij" @click="closeModal" color="primary" class="q-ma-sm" unelevated
        style="width: 150px"></q-btn>
      <q-btn label="Zapisz" @click="saveData" color="green" class="q-ma-sm" unelevated style="width: 150px"></q-btn>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';

export default defineComponent({
  name: 'CalendarModal',
  props: {
    date_from: {
      type: String as PropType<string>,
      default: '',
    },
    date_to: {
      type: String as PropType<string>,
      default: '',
    },
  },
  emits: ['closeModal', 'saveTask'],
  setup(props, { emit }) {
    const title = ref('');
    const description = ref('');

    const localDateFrom = ref({ date: '', time: '' });
    const localDateTo = ref({ date: '', time: '' });

    const dateFromModal = ref(false);
    const dateToModal = ref(false);

    const color = ref('');
    const selectpriority = ref('');

    const priorityOption = ref([
      { label: 'Niski', value: 'LOW' },
      { label: 'Średni', value: 'MEDIUM' },
      { label: 'Wysoki', value: 'HIGH' },
    ]);

    const formattedDateFrom = computed(() =>
      localDateFrom.value.date && localDateFrom.value.time
        ? `${localDateFrom.value.date}T${localDateFrom.value.time}`
        : ''
    );
    const formattedDateTo = computed(() =>
      localDateTo.value.date && localDateTo.value.time
        ? `${localDateTo.value.date}T${localDateTo.value.time}`
        : ''
    );

    const openDateFromModal = () => {
      dateFromModal.value = true;
    };

    const openDateToModal = () => {
      dateToModal.value = true;
    };

    const closeModal = () => {
      emit('closeModal');
    };

    const saveData = () => {
      emit('saveTask', {
        start: formattedDateFrom.value,
        end: formattedDateTo.value,
        title: title.value,
        color: color.value,
        priority: selectpriority.value,
        description: description.value,
      });
      closeModal();
    };

    return {
      localDateFrom,
      localDateTo,
      formattedDateFrom,
      formattedDateTo,
      title,
      description,
      dateFromModal,
      dateToModal,
      selectpriority,
      priorityOption,
      color,
      openDateFromModal,
      openDateToModal,
      closeModal,
      saveData,
    };
  },
});
</script>

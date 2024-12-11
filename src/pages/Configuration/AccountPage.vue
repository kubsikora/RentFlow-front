<template>
  <q-card class="my-card" style="width: 80%">
    <q-card-section>
      <h4>
        {{ $t('menu.account') }}
      </h4>
    </q-card-section>
    <div class="hr" />
    <q-card-section>
      <p class="text">{{ $t('settings.contact') }}</p>
      <q-input
        class="input"
        filled
        v-model="settings.email"
        :label="$t('sign.mail')"
      />
      <q-input
        class="input"
        filled
        v-model="settings.phone"
        :label="$t('sign.tel')"
      />
      <div class="hr2" />
    </q-card-section>
    <q-card-section>
      <p class="text">{{ $t('settings.passwordchange') }}</p>
      <q-input
        filled
        class="input"
        v-model="settings.passwordold"
        :error="wrongpass"
        :label="$t('settings.oldpass')"
      >
        <template v-slot:error>
          {{ $t('settings.wrongpass') }}
        </template>
      </q-input>
      <q-input
        filled
        class="input"
        style="margin-bottom: -15px"
        :error="wrongnewpass"
        v-model="settings.passwordnew"
        :label="$t('settings.newpass')"
      />
      <q-input
        filled
        class="input"
        :error="wrongnewpass"
        v-model="passwordconfirm"
        :label="$t('settings.againnewpass')"
      >
        <template v-slot:error>
          {{ $t('settings.wrongagainpass') }}
        </template>
      </q-input>
      <div class="hr2" />
    </q-card-section>
    <q-card-section class="q-gutter-sm flex justify-end">
      <q-btn
        color="red"
        :label="$t('settings.deleteacc')"
        @click="deleteacc()"
      />
      <q-btn color="primary" :label="$t('settings.save')" @click="save()" />
    </q-card-section>
  </q-card>
  <q-dialog v-model="delete_dialog">
    <q-card>
      <q-card-section>
        <h4>{{ $t('settings.deleteing') }}</h4>
      </q-card-section>
      <div class="hr" />
      <q-card-section>
        <p class="text">{{ $t('settings.deletedis') }}</p>
        <q-input
          filled
          class="input"
          v-model="delaccount.password"
          :error="wrongpassdel"
          :label="$t('sign.password')"
        >
          <template v-slot:error>
            {{ $t('settings.wrongpass') }}
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-gutter-sm flex justify-end">
        <q-btn
          color="red"
          :label="$t('settings.deleteacc')"
          @click="apidel()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">

</script>
<style scoped>

</style>

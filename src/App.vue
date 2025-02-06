<template>
  <div>
    <header>
      <v-card color="basil">
    <v-card-title class="text-center justify-center py-6 ">
      <h5 class="font-weight-bold text-h4 text-basil">
        BookMyShow-App
      </h5>
    </v-card-title>
    </v-card>
    <v-tabs v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4">
      <router-link to="/"><v-tab :value="1">Home</v-tab></router-link>
      <RouterLink to="/booking"><v-tab :value="2">Booking</v-tab></RouterLink>
      </v-tabs>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink ,RouterView} from 'vue-router';
// import { VApp, VMain } from 'vuetify/components';
const tab=ref('');
</script>
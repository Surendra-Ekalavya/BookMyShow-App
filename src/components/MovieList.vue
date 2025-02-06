<template>
  <div>
    <h1>Movies</h1>
    <v-container>
      <v-row>
        <v-col  v-for="movie in movies" :key="movie.id">
        <v-card>
      <V-img :src="movie.poster" :alt="movie.title" height="200px" width="200px"/>
      <v-card-title>{{ movie.title }}</v-card-title>
      Show Timings : <v-btn v-for="time in movie.showTimes" :key="time" @click="selectShowTime(movie.id,time)" >{{ time }}</v-btn>
    </v-card>
  </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/MovieStore';
import{useBookingStore} from '@/stores/BookingStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

 const movieStore=useMovieStore();
const bookingStore=useBookingStore();
const router=useRouter();
const {movies}=storeToRefs(movieStore);

function selectShowTime(movieId:number,showTime:string){
  bookingStore.setBooking(movieId,showTime);
  router.push('/booking');
}
movieStore.fetchMovies();
</script>

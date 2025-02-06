<template>
    <div>
        <h2>Booking Summary</h2>
        <template v-if="movie">
        <v-card-title>Movie : {{ movie.title }}</v-card-title>
        <p>Show Time : {{ booking.showTime }}</p>
        <p>Seats : {{ booking.seats.join(', ') }}</p>
    </template>
    <template v-else>
        <p>No Movie Selected</p>
    </template>
    </div>
</template>
<script setup lang="ts">

import {useBookingStore} from '@/stores/BookingStore';
import{useMovieStore} from "@/stores/MovieStore";
import { storeToRefs } from 'pinia';
import { computed } from 'vue';


const bookingStore=useBookingStore();
const movieStore=useMovieStore();

const {booking}=storeToRefs(bookingStore);
const movie=computed(()=>{
return movieStore.movies.find(m => m.id===booking.value.movieId);
});
</script>
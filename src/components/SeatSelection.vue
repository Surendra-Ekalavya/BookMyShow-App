<template>
    <div>
        <h4>Seat Selection</h4>
        <div id="seats">
            <v-col v-for="seat in seats" 
            :key="seat"
            :class="{selected:booking.seats.includes(seat)}"
             @click="toggleSeat(seat)">
                {{ seat }}
            </v-col>
        </div>
        <v-btn @click="confirmBooking" class="confirm">Confirm Booking</v-btn>
    </div>
</template>

<script setup lang="ts">
import {useBookingStore} from '@/stores/BookingStore';
import { storeToRefs } from 'pinia';


const bookingStore=useBookingStore();
const {booking}=storeToRefs(bookingStore);

const seats=['A1','A2','A3','B1','B2','B3','B4','C1','D1','E1','F1'];

function toggleSeat(seat:string){
    if(booking.value.seats.includes(seat)){
        bookingStore.removeSeat(seat);
    }else{
        bookingStore.addSeat(seat);
    }
}
function confirmBooking(){
        alert(`Booking confirmed for seats: ${booking.value.seats.join(', ')}`);
}
</script>
  
  <style scoped>
  #seats {
    display: flex;
    gap: 10px;
  }
  .selected {
    background-color: green;
  }
  </style>
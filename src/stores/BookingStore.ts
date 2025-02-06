import { defineStore } from "pinia";

interface Booking{
    movieId:number;
    showTime:string;
    seats:string[];
}

export const useBookingStore=defineStore('booking',{
        state:()=>({
            booking: {} as Booking,
        }),
        actions:{
            setBooking(movieId:number,showTime:string){
                this.booking.movieId=movieId;
                this.booking.showTime=showTime;
                this.booking.seats=[];
            },
            addSeat(seat:string){
                if(!this.booking.seats.includes(seat)){
                    this.booking.seats.push(seat);
                }
            },
            removeSeat(seat:string){
                this.booking.seats=this.booking.seats.filter(s => s!==seat);
            }
        }
})
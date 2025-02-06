import { defineStore } from "pinia";

interface Movie{
  id:number;
  title:string;
  poster:string;
  showTimes: string[];
}
export const useMovieStore=defineStore('movie',{
  state:()=> ({
    movies:[] as Movie[],
  }),
  actions:{
    fetchMovies(){
      this.movies=[
        {id:1,title:'Movie 1',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU1qIwxuQwgknAeHGil-URsCOEArD5HBlgXR1A9Mnk2dTBHFeFpUj7J0&s',showTimes:['10:00','14:00','18:00']},
        {id:2,title:'Movie 2',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Fq_20DqiWXwuFrrbLVuU_Hb5y-FQJ0Upd1ICGPdT9wKjVLbEhPXwxyE&s',showTimes:['11:00','15:00','19:00']},
        {id:3,title:'Movie 3',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeYGTIbce4QqNPCyr__3KHaRJPGvQPr9ZjxDoQAxrwaSNI1aqbGfWNMo&s',showTimes:['10:00','14:00','18:00']},
        {id:4,title:'Movie 4',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZA9F40Qwq-zPK5T2zuWbAzl5-gA0zcVigA4F81oe1Z0fqQbf-uvMG-g&s',showTimes:['11:00','15:00','19:00']},
        {id:5,title:'Movie 5',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb5z2rYUPC_bc9GTom1iz4NWNJ8CLxP2htnlWfJp1sTS4ecSSH-C1B5s&s',showTimes:['10:00','14:00','18:00']},
        {id:5,title:'Movie 6',poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-ZRJWQIyTmUxED4OB-4BZ_DjO8GOxWfcDw&s',showTimes:['11:00','15:00','19:00']},
      ];
    },
  },
});

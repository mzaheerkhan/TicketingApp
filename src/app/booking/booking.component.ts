import { Component } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  movieList:any[]=[
    {
      movieName:'KGF_The Chapter One',
     description:'Rocky, a high-ranking mercenary, seeks power and wealth in order to fulfill his mother promise',
     movieTicket:'950',
     showTiming:['10.00 PM - 12.30 PM', '12.30 PM - 3.00 AM' , '9.30 AM - 12.00 PM'],
     
    },
    {
      movieName:'Baahubali 2: The Conclusion',
     description:'Story of a hero that takes revenge of his fathers murder and became king at the end',
     movieTicket:'450',
     showTiming:['10.00 PM - 12.30 PM' , '9.30 AM - 12.00 PM']
    },
    {
      movieName:'Raazrebot',
     description:'Hero is betrayed by the Herion and killed by her husband then his soul comes and takes his revenge',
     movieTicket:'900',
     showTiming:[ '9.30 AM - 12.00 PM']
    },
    {
      movieName:'Murder',
     description:'Its an adult movie that is based on proper love story and at the end the herion is murdered by the hero',
     movieTicket:'500',
     showTiming:['10.00 PM - 12.30 PM', '12.30 PM - 3.00 AM' , '9.30 AM - 12.00 PM']
    },
    {
      movieName:'Ready',
     description:'Hero loves an herion and enters her home to impress her father to mary her',
     movieTicket:'350',
     showTiming:[ '9.30 AM - 12.00 PM']
    },
    {
      movieName:'Dangal',
     description:'Its story of a empowered and determined girls that win the battle at national level',
     movieTicket:'250',
     showTiming:['10.00 PM - 12.30 PM', '12.30 PM - 3.00 AM' ]
    }

  ]
  selectedMovie:any;
  selectedShow:string ='';
shows: any;
showTiming: any;
ticketCount:string='';
MovieCost:number=0;

  selectMovie(movieData:any){
   this.selectedMovie= movieData;
   
   if(this.selectedMovie.showTiming.length==1){
    this.selectedShow= this.selectedMovie.showTiming[0];
   }
   this.selectedShow='undefined';
   this.selectedShow='';
   this.MovieCost=0;
  }
  selectShow(shows:string){
  this.selectedShow =shows;
  
  }
  bookTicket(){
  this.MovieCost= Number(this.selectedMovie.movieTicket)*Number(this.ticketCount)
  }

}

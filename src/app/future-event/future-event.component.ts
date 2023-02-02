import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { Router } from '@angular/router';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);
@Component({
  selector: 'app-future-event',
  templateUrl: './future-event.component.html',
  styleUrls: ['./future-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class FutureEventComponent implements OnInit {
  futureEvent:any;;
    constructor( private httpClientService:HttpClientService , private router :Router) { }
  
    ngOnInit(): void {
        this.httpClientService.getAllFutureEvents().subscribe(data=>{
          this.futureEvent=data
        })
    }
  
    navigate(id:number){
      console.log("hereeee" ,id)
      this.router.navigate(['/future-event-page/'+id]);
    }

  }

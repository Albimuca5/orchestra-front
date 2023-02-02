import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { Router } from '@angular/router';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);
@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class EventPostComponent implements OnInit {
  event:any;;
    constructor( private httpClientService:HttpClientService , private router :Router) { }
  
    ngOnInit(): void {
        this.httpClientService.getAllEvents().subscribe(data=>{
          this.event=data
        })
    }
  
    navigate(id:number){
      console.log("hereeee" ,id)
      this.router.navigate(['/event-page/'+id]);
    }

  }


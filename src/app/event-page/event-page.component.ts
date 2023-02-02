import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  event: any;
  loading: boolean = false;
  id:any;
  constructor(private service: HttpClientService, 
       private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loading = false
    this.id=0;
    this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    this.service.getEventById(this.id).subscribe(res=>{
      this.event = res;
      console.log("res" , this.event);

      this.loading= true;
    });
  });
  }

}
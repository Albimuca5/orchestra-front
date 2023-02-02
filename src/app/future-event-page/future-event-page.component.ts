import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-future-event-page',
  templateUrl: './future-event-page.component.html',
  styleUrls: ['./future-event-page.component.scss']
})
export class FutureEventPageComponent implements OnInit {

  futureEvent: any;
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
    this.service.getFutureEventById(this.id).subscribe(res=>{
      this.futureEvent = res;
      console.log("res" , this.futureEvent);

      this.loading= true;
    });
  });
  }

}

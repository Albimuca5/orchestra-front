import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClientService } from './service/http-client.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],

})
export class AppComponent {
  public events: any;
  public futureEvents: any;
  // constructor( private router:Router) {},

 

  constructor(private httpClientService: HttpClientService) { }
  ngOnInit() {
    this.httpClientService.getAllEvents().subscribe(

      response => this.handleSuccessfulResponse(response),
    );

    this.httpClientService.getAllFutureEvents().subscribe(

      response => this.handleSuccessfulResponse(response),
    );
   
   

  }

  handleSuccessfulResponse(response: any) {
    this.events = response[0];
    this.futureEvents = response[0];
  }
 
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FutureEvent } from '../future-event/futureEvent.model';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 

  }
  
  getAllEvents()
  {
    console.log("evente");
    return this.httpClient.get<Event[]>('http://localhost:8083/events');
  }

  getAllFutureEvents()
  {
    console.log("futureEvente");
    return this.httpClient.get<FutureEvent[]>('http://localhost:8083/futureEvents');
  }

  getFutureEventById(id:number)
  {
    console.log("/futureEvent/{id}");
    return this.httpClient.get<any>('http://localhost:8083/futureEvent/'+id);
  }

  getEventById(id:number)
  {
    console.log("/event/{id}");
    return this.httpClient.get<any>('http://localhost:8083/event/'+id);
  }

  }




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from "swiper/angular";
import { RouterModule } from '@angular/router';
import { EventPageComponent } from './event-page/event-page.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EventPostComponent } from './event-post/event-post.component';
import { FutureEventComponent } from './future-event/future-event.component';
import { FutureEventPageComponent } from './future-event-page/future-event-page.component';
import { SafePipe } from 'src/pipes/safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    MainContentComponent,
    NavbarComponent,
    EventPostComponent,
    FutureEventComponent,
    FutureEventPageComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    SwiperModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainContentComponent},
      {path: 'event-page', component: EventPageComponent},
      {path: 'event-post', component: EventPostComponent},
      {path: 'future-event', component: FutureEventComponent},
      {path: 'future-event-page', component: FutureEventPageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

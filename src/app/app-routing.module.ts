import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './event-page/event-page.component';
import { EventPostComponent } from './event-post/event-post.component';
import { FutureEventComponent } from './future-event/future-event.component';
import { FutureEventPageComponent } from './future-event-page/future-event-page.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'event-page', component: EventPageComponent },
  {path: 'event-post', component: EventPostComponent},
  {path: 'future-event', component: FutureEventComponent},
  { path: 'future-event-page/:id', component: FutureEventPageComponent },
  { path: 'event-page/:id', component: EventPageComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

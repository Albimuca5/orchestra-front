import { Component, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from "swiper/angular";
import { Router } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainContentComponent implements OnInit, OnChanges {
  activeIndex: number = 0;
  constructor() { }
  accumulator = 0;
  ngOnInit(): void {
    const swiperEl = document.querySelector('.mySwiper');

    swiperEl?.addEventListener('progress', (event: any) => {
      console.log(event.detail)
    });
  }
  onSlideChange(event: any) {
    console.log(event[0])
    this.addTransition(event[0].activeIndex);
  }
  private addTransition(index: number) {

    let container = Array.from(document.querySelectorAll(".btn-custom"));

    container.forEach((data, currentindex) => {

      data.classList.remove('texta');
      data.classList.remove('textb');

    })
    container[2 * index].classList.add('texta');
    container[2 * index + 1].classList.add('textb');
    this.activeIndex = index


  }

  ngOnChanges(): void {

  }

  ngAfterViewInit(): void {
    this.addTransition(0)
  }

}

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-couches-list',
  templateUrl: './couches-list.component.html',
  styleUrls: ['./couches-list.component.css']
})
export class CouchesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });
  }
}

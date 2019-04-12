import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventTitle : string = 'Swing it!';
  eventDate : string = '2 Novembre 2019'
  eventPlace : string = 'Bruxelles'
  eventStatus : string = 'ajouté'

  constructor() { }

  ngOnInit() {
  }

}

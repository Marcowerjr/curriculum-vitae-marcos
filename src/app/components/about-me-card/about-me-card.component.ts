import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.scss'],
})
export class AboutMeCardComponent implements OnInit {

  @Input () color: string;

  constructor() { }

  ngOnInit() {}

}

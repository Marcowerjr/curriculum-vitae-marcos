import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-ios',
  templateUrl: './header-ios.component.html',
  styleUrls: ['./header-ios.component.scss'],
})
export class HeaderIosComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;

  constructor() {}

  ngOnInit() {}
}

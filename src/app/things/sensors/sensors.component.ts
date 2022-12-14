import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css'],
})
export class SensorsComponent implements OnInit {
  @Input() name: string ;
  @Input() value: string;
  constructor() {}

  ngOnInit() {}
}

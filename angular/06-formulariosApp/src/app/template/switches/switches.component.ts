import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  persona={
    cromosoma: '',
    notificaciones: true,
  }

  terminoasYCondiciones: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  description = 'Shop corner';

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  metodo(): void {
    this.ngOnInit();
  }

}

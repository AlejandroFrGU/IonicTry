import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() content: string;

  tab = 'Clients';
  constructor() { }

  ngOnInit() {
    if (this.name == 'Clients'){
      this.tab = 'clients';
    }else if (this.name == 'Products'){
      this.tab = 'products';
    }else {
      this.tab = 'reservations';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  args: string;
  list: any[] = [];

  clients: any[] = [
    {id: 'Cl1', name: 'Javi', description: 'Desc. of Cl1'},
    {id: 'Cl2', name: 'Alejandro', description: 'Desc. of Cl2'}
  ];
  reservations: any[] = [
    {id: 'Re1', name: 'Reservation 1', description: 'Desc. of Re1'},
    {id: 'Re2', name: 'Reservation 2', description: 'Desc. of Re2'}
  ];
  products: any[] = [
    {id: 'Pr1', name: 'Product 1', description: 'Desc. of Pr1'},
    {id: 'Pr2', name: 'Product 2', description: 'Desc. of Pr2'}
  ];

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.args = this.activateRoute.snapshot.paramMap.get('tab');
    this.selectList();
  }

  selectList() {
    if(this.args == 'clients'){
      this.list = this.clients;
    }else if(this.args == 'reservations'){
      this.list = this.reservations;
    }else {
      this.list = this.products;
    }
  }

}

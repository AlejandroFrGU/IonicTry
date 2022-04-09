import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  args: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.args = this.activateRoute.snapshot.paramMap.get('tab');
  }


}

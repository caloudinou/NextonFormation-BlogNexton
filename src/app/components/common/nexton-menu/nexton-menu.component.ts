import {Component, Input, OnInit} from '@angular/core';
import {linkInApp} from '../../../common/interfaces/link-in-app';

@Component({
  selector: 'nexton-menu',
  templateUrl: './nexton-menu.component.html',
  styleUrls: ['./nexton-menu.component.scss']
})
export class NextonMenuComponent implements OnInit {
  @Input('listMenu') listMenu: linkInApp[];

  constructor() { }

  ngOnInit() {
  }

}

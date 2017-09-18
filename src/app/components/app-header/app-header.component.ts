import { Component, OnInit } from '@angular/core';
import {linkInApp} from '../../common/interfaces/link-in-app';

@Component({
  selector: 'nexton-blog-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  private _title: undefined|string = 'NextonBlog';
  private _subTitle: undefined|string = 'The best of the blog';
  private _listMenu: undefined|linkInApp[] = [{ path: '/github-nexton', title: 'toto'},{ path: '/example', title: 'test'}];

  constructor() { }

  ngOnInit() {
  }

  get title(): string {
    return this._title;
  }

  get subTitle(): string {
    return this._subTitle;
  }

  get listMenu(): linkInApp[] {
    return this._listMenu;
  }
}

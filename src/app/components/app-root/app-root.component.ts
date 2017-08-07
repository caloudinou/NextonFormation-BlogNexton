import { Component } from '@angular/core';
import { Link } from '../../common/interfaces/link';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent {
  private name: undefined|string = 'app';
  public title: undefined|string = `Welcome to ${this.name}!!`;
  public links: undefined|Link[] = [
    {url:'https://angular.io/tutorial', title:'Tour of Heroes'},
    {url:'https://github.com/angular/angular-cli/wiki', title:'CLI Documentation'},
    {url:'http://angularjs.blogspot.ca/', title:'Angular blog'}
  ];
}

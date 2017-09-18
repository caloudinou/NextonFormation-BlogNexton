import { Component, OnInit } from '@angular/core';
import { Link } from '../../common/interfaces/link';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoUrl: undefined|string = 'http://via.placeholder.com/70x50';
  public logoTitle: undefined|string = 'Nexton Le Blog';
  public links: undefined|Link[] = [
    {url:'/', title:'Home'},
    {url:'/contact', title:'Contact'}
  ];

  ngOnInit() { }

}

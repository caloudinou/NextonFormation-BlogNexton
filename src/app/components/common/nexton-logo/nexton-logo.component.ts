import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nexton-logo',
  templateUrl: './nexton-logo.component.html',
  styleUrls: ['./nexton-logo.component.scss']
})
export class NextonLogoComponent implements OnInit {

  private _shape: undefined|string = 'around';
  private _size: undefined|string = 'original';

  protected _listSize: undefined|string[] = ['original','big','small'];
  protected _listShape: undefined|string[] = ['around','original','circle'];

  /**
   * Input for size to logo picture
   * @values ['original','big','small']
   * @type {string}
   */
  @Input('size') set size(value){
    this._size = this._listSize.find( size => size.toLowerCase() === value.toString().toLowerCase() );
  }
  /**
   * Input for figure of picture
   * @values ['around','original','circle']
   * @type {string}
   */
  @Input('shape') set shape(value) {
    this._shape = this._listShape.find( shape => shape.toLowerCase() === value.toString().toLowerCase() );
  }


  constructor() { }

  ngOnInit() {
  }

  get shape(): string {
    return this._shape;
  }

  get size(): string {
    return this._size;
  }
}

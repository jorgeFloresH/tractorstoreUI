import {Component, OnInit} from '@angular/core';
import {ITEMS} from '../shared/items';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items = ITEMS;
  selectedItem = ITEMS[0];

  constructor() {
  }

  ngOnInit() {
  }

}

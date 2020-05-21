import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items: Item[] = [];
  constructor(private storage: LocalStorageService) { }

  getItems() {
    if(localStorage.getItem('itmes')) {
      this.items = JSON.parse(localStorage.getItem('itmes'));
    }
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItem(id: string) {
    return this.items.find(item => item.id == id);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.saveItems();
  }

  deleteItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.saveItems();
  }
}

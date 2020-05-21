import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../classes/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: Item;
  private editable: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService
             )
  {
    this.item = {
      id: '',
      name: '',
      available: true
    }
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.editable = true;
      this.item = this.itemService.getItem(id);
    }
  }

  saveItem() {
    console.log(this.item);
    if(this.editable) {
      // update
      this.itemService.saveItems();
    } else {
      // create
      this.itemService.addItem(this.item);
    }
    this.router.navigateByUrl('/home');
  }
  deleteItem() {
    // delete
    this.itemService.deleteItem(this.item);
    this.router.navigateByUrl("/home");
  }
}

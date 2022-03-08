import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../item/item.model'
import { ItemComponent } from '../item/item.component'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {

    items: string[] = [];
    itemsList: Item[] = [];
    @ViewChild(ItemComponent) itemComponent !: ItemComponent;

    constructor() {
        this.items = ['Books', 'Gloves', 'Hat', 'Jacket'];
        this.itemsList = this.items.map(v => new Item(v));
    }

    addItem(itemName: string) {
        this.itemsList.push(new Item(itemName));
    }

    greetings():string {
        return this.itemComponent.greetings();
    }

    ngOnInit(): void {
    }

}

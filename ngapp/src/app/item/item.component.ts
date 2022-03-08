import { Input, Component, OnInit } from '@angular/core';
import { Item } from './item.model'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

    @Input('item') item: Item = new Item();
    constructor() { }

    ngOnInit(): void {
    }

    greetings(): string {
        return 'Greetings from: ' + this.item.name;
    }

}

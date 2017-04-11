import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers : [ProductService]
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  public products: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');  

    this.searchProductService();

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }

  searchProductService(){
      this.productService.load()
      .then(data => {
        this.products = data;
        console.log(data);
      });
    }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}

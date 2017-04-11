import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [ProductService]
})
export class HomePage {

public products: any;
  constructor(public navCtrl: NavController, public productService: ProductService) {
  	this.searchProductService();
  }

searchProductService(){
  this.productService.load()
  .then(data => {
    this.products = data;
    console.log(data);
  });
}

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from "rxjs/operators";
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private productSrv: ProductsService, private shoppingSrv: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSrv.getProducts().pipe(        
      tap( (products: Product[]) => this.products = products )
    ).subscribe();
  }

  addToCart(product:Product):void {

      this.shoppingSrv.updateCart(product);

      //console.log('Add To Cart desde el padre', product);
  }

}

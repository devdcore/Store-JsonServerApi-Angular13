import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantityCar:any = 0;
  totalyCar:any = 0;
 
  quantity$ = this.shoppingCartSrv.quantityAction$;
  total$ = this.shoppingCartSrv.totalAction$;
  cart$ = this.shoppingCartSrv.cartAction$;


  constructor(private shoppingCartSrv: ShoppingCartService) { }

  ngOnInit(): void {
    
    if(this.quantity$ != null) {
      this.quantityCar = this.quantity$;
    }
    if(this.total$ != null) {
      this.totalyCar = this.total$;
    }
  }

}

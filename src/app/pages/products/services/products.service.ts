import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  private apiCrypto = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

  constructor(private http: HttpClient) {   }

  getProducts(): Observable<Product[]>{
    
    return this.http.get<Product[]>(this.apiURL);


  }

}

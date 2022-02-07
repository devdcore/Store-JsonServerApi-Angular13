import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/pages/products/interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})

export class ShoppingCartService {

    products: Product[] = [];
    quantity:number = 0;

    private cartSubject = new Subject<Product[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    // Observables
    get totalAction$(): Observable<number> {
            return this.totalSubject.asObservable();
    }
    get quantityAction$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }
    get cartAction$(): Observable<Product[]> {
        return this.cartSubject.asObservable();
    }


    // Metodo publico
    updateCart(product: Product): void {
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();

    }

    // Metodos privados
    private addToCart(product:Product): void {
        this.products.push(product);
        this.cartSubject.next(this.products);
    }

    private quantityProducts(): void {
        if(this.products.length > 0) {
            this.quantity = this.products.length;
        }
        this.quantitySubject.next(this.quantity);

    }

    private calcTotal():void {
        const total = this.products.reduce((acc, prod) => acc += prod.price, 0);
        this.totalSubject.next(total);
    }


}
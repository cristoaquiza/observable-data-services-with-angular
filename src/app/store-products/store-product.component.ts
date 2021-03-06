import { Component, Input } from "@angular/core";
import { Product } from "../product/product.model";
import { ProductService } from "../product/product.service";
import { PurchaseService } from "../purchase/purchase.service";

@Component({
  selector: "store-product",
  template: `
    <span>{{ product.title }}: \${{ product.price }}</span>
    <p>
      Current inventory: {{ product.inventory }}
      <button (click)="pickUpProduct(product)" [disabled]="product.inventory === 0">Pick up</button>
    </p>
  `
})
export class StoreProduct {
  @Input() public product: Product;

  constructor(private productService: ProductService, private purchaseService: PurchaseService) {}

  public pickUpProduct(product: Product): void {
    this.productService.checkInProduct(product);
    this.purchaseService.addToCart(product);
  }
}

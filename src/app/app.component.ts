import { Component, OnInit } from "@angular/core";
import { Purchase } from "./purchase/purchase.model";
import { PurchaseService } from "./purchase/purchase.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public isBuying: boolean;

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.purchaseService.cart$.subscribe((cart: Purchase) => {
      this.isBuying = cart.products ? cart.products.length > 0 : false;
    });
  }
}

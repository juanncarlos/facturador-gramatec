import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizacion03',
  templateUrl: './cotizacion03.component.html',
  styleUrls: ['./cotizacion03.component.scss']
})
export class Cotizacion03Component  {

  allProducts: string[] = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'];
  filteredProducts: string[] = [];
  selectedProducts: string[] = [];
  productName: string = '';

  filterProducts() {
    this.filteredProducts = this.allProducts.filter((product) =>
      product.toLowerCase().includes(this.productName.toLowerCase())
    );
  }

  clearFilter() {
    setTimeout(() => {
      this.filteredProducts = [];
    }, 200);
  }

  addProduct(product: string) {
    const index = this.selectedProducts.indexOf(product);
    if (index === -1) {
      this.selectedProducts.push(product);
    }
  }

  removeProduct(product: string) {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    }
  }

 

}

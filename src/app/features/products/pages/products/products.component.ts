import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: false
})
export class ProductsComponent {
  creditCardDescription = `
    Quiero una <span class="font-semibold">Tarjeta de Crédito</span>, realizar un 
    <span class="font-semibold">Retiro de mi Tarjeta de Crédito</span>, 
    <span class="font-semibold">consolidar mis saldos</span> o solicitar un
    <span class="font-semibold">Extrafinanciamiento</span>.
  `;

  loansDescription = `
    Quiero solicitar un <span class="font-semibold">Crédito Personal</span> para cumplir mis metas.
  `;
}

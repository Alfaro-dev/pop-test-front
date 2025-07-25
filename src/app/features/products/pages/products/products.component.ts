import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: false
})
export class ProductsComponent {
  showSplash = true;

  investmentSubtitle = 'Ahorro e Inversión';
  investmentTitle = 'Encuentra tu solución ideal';
  investmentDescription = 'Selecciona el producto que se adapte a tus necesidades.';

  interestTitle = 'También podría interesarte';

  mainCards = [
    {
      header: 'Cuenta',
      title: '!Tu cuenta para todo!',
      description: 'Abre tu Cuenta de Ahorro 100% digital',
      imageUrl: 'images/cuenta-ya.png',
      buttonText: 'Obtener',
      buttonLink: '/products/1',
      buttonClass: 'bg-gold text-blue text-xl py-2 px-26 rounded-2xl hover:bg-gold-light',
    },
    {
      header: 'Depósito a Plazo',
      title: '¡Solicita tu Depósito a Plazo YA en Línea!',
      description: '',
      imageUrl: 'images/deposito-a-plazo-ya.png',
      buttonText: 'Obtener',
      buttonLink: '/products/2',
      buttonClass: 'bg-gold text-blue text-xl py-2 px-26 rounded-2xl hover:bg-gold-light',
    },
    {
      header: 'Cheque',
      title: '¡Solicita tu Depósito a Plazo YA en Línea!',
      description: '',
      imageUrl: 'images/deposito-a-plazo-ya.png',
      buttonText: 'Obtener',
      buttonLink: '/products/2',
      buttonClass: 'bg-gold text-blue text-xl py-2 px-26 rounded-2xl hover:bg-gold-light',
    }
  ];

  additionalCards = [
    {
      containerClass: 'bg-blue-lighter',
      imageUrl: 'images/tarjetas.png',
      imageAlt: 'Tarjeta de Crédito',
      title: 'Tarjeta de Crédito',
      description: `
        Quiero una <span class="font-semibold">Tarjeta de Crédito</span>, realizar un 
        <span class="font-semibold">Retiro de mi Tarjeta de Crédito</span>, 
        <span class="font-semibold">consolidar mis saldos</span> o solicitar un
        <span class="font-semibold">Extrafinanciamiento</span>.
      `,
      buttonText: 'Ver Productos',
      buttonClass: 'border-blue text-xl border-3 rounded-2xl py-2 px-8 text-blue hover:bg-blue hover:text-white',
      buttonUrl: '/products/3',
    },
    {
      containerClass: 'bg-gold',
      imageUrl: 'images/creditos.png',
      imageAlt: 'Créditos',
      title: 'Créditos',
      description: `
        Quiero solicitar un <span class="font-semibold">Crédito Personal</span> para cumplir mis metas.
      `,
      buttonText: 'Ver Producto',
      buttonClass: 'border-blue text-xl border-3 rounded-2xl py-2 px-8 text-blue hover:bg-blue hover:text-white',
      buttonUrl: '/products/4',
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}

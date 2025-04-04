import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  standalone: false,
})
export class ProductDetailComponent {
  showSplash = true;

  backButton = {
    iconClass: 'text-blue border-2 border-gold-light rounded-full py-1 px-1.5 mr-3 font-bold text-xl',
    text: 'Regresar',
    url: '/products',
    buttonClass: 'bg-transparent text-black py-3 pr-6 rounded-full text-xl'
  };

  banner = {
    subtitle: 'Cuenta YA',
    title: 'Tu cuenta para todo',
    description: '¡Ábrela y utilízala para lo que quieras! Sin comisión* y sin monto de apertura.',
    buttonText: 'Abrir Cuenta YA',
    buttonUrl: '#',
    buttonClass: 'bg-gold text-blue text-xl py-3 px-8 rounded-2xl hover:bg-gold-light'
  };

  productOptions = [
    {
      imageUrl: 'images/cuenta-de-ahorro.png',
      imageAlt: 'Cuenta de Ahorro',
      title: 'Cuenta de Ahorro',
      features: [
        'Abre tu Cuenta solo tomará 5 minutos.',
        '*Sin comisión por administración de saldos mínimos y sin monto de apertura.',
        'Accede a tu Cuenta en cualquier lugar desde tu Banca Digital o App.'
      ],
      buttonText: 'Abrir Cuenta de Ahorro',
      buttonUrl: '#'
    },
    {
      imageUrl: 'images/recibir-tu-salario.png',
      imageAlt: 'Cuenta para recibir tu salario',
      title: 'Cuenta para recibir tu salario',
      features: [
        'Abre tu Cuenta de manera fácil y rápida.',
        'Solo necesitas tu carta de empleo y que tu lugar de trabajo esté asociado con nosotros.',
        'Obtén beneficios personalizados según tu empresa.'
      ],
      buttonText: 'Abrir Cuenta para recibir salario',
      buttonUrl: '#'
    }
  ];

  infoCards = [
    {
      backgroundClass: 'bg-gold',
      title: 'Preguntas frecuentes',
      description: 'No te quedes con las dudas sobre tu Cuenta de Ahorro.',
      imageUrl: 'images/preguntas-frecuentes.png',
      linkText: 'Más detalles',
      linkUrl: '#'
    },
    {
      backgroundClass: 'bg-gray-light',
      title: 'Tasas y comisiones',
      description: 'Consulta todas las tasas y comisiones de tu Cuenta de Ahorro.',
      imageUrl: 'images/tasas.png',
      linkText: 'Ver comisiones',
      linkUrl: '#'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}

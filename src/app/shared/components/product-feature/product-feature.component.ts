import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrl: './product-feature.component.css',
  standalone: false,
})
export class ProductFeatureComponent {
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() features: string[] = []; // Lista de beneficios
  @Input() buttonText: string = '';
  @Input() buttonUrl: string = '';
}

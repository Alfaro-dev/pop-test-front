import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-large',
  templateUrl: './card-large.component.html',
  styleUrl: './card-large.component.css',
  standalone: false,
})
export class CardLargeComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() backgroundClass: string = 'bg-white';
  @Input() linkText: string = '';
  @Input() linkUrl: string = '#';
}

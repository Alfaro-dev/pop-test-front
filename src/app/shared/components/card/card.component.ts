import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: false,
})
export class CardComponent {
  @Input()
  header: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  imageUrl: string = '';
  @Input()
  imageAlt: string = '';
  @Input()
  buttonText: string = '';
  @Input()
  buttonClass: string = '';
  @Input()
  buttonUrl: string = '';
}

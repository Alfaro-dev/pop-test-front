import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
  standalone: false,
})
export class SmallCardComponent {
  @Input() containerClass: string = 'bg-white';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() description: string = ''; // can be HTML
  @Input() buttonText: string = 'Ver más';
  @Input() buttonClass: string = '';
  @Input() buttonUrl: string = '';
}

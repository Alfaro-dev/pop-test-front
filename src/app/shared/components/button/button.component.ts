import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: false,
})
export class ButtonComponent {
  @Input() icon: string = '';
  @Input() iconClass: string = '';
  @Input() text: string = 'Click';
  @Input() url: string = '';
  @Input() buttonClass: string = '';
}

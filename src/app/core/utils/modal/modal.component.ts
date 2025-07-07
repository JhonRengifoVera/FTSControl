import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [NgIf, DialogModule],
  standalone: true
})
export class ModalComponent {
  @Input() title = '';
  @Input() show = false;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}

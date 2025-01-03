import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  isVisible = false;
  title: string = '';
  content: string = '';

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  showModal(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.isVisible = true;
  }

  onCancel() {
    this.isVisible = false;
    this.cancel.emit();
  }

  onConfirm() {
    this.isVisible = false;
    this.confirm.emit();
  }

}

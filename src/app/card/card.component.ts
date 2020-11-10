import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() contactRef: Contact;
  @Output() deleteEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  emitDeleteEvent = (): void => {
    this.deleteEvent.emit();
  };
}

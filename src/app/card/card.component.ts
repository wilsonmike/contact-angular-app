import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() contactRef: Contact;
  @Output() deleteEvent = new EventEmitter<void>();
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  emitDeleteEvent = (): void => {
    this.deleteEvent.emit();
  };

  addFavorite = (contact: Contact) => {
    this.contactService.addFavorite(contact);
  };
}

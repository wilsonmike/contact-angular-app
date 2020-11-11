import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.getContacts();
  }

  getContacts = () => {
    return this.contactService.getContacts();
  };

  deleteContact = (index: number): void => {
    this.contactService.deleteContact(index);
    this.contacts = this.getContacts();
  };

  addContact = (contact: Contact): void => {
    this.contactService.addContact(contact);
    this.contacts = this.getContacts();
  };
}

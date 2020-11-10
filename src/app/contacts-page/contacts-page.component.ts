import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  contacts: Contact[] = [
    {
      name: 'Billy',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
    },
    {
      name: 'Hulk Hogan',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
    },
    {
      name: 'Simba',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
    },
    {
      name: 'Muffasa',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
    },
    {
      name: 'Nemo',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  deleteContact = (index: number): void => {
    this.contacts.splice(index, 1);
  };

  addContact = (contact: Contact): void => {
    this.contacts.push(contact);
  };
}

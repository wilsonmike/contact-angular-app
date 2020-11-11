import { Injectable } from '@angular/core';
import { Contact } from './interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
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
  favorites: Contact[] = [];
  constructor() {}

  getContacts = () => {
    return this.contacts;
  };
  deleteContact = (index: number): void => {
    this.contacts.splice(index, 1);
  };
  addContact = (contact: Contact): void => {
    this.contacts.push(contact);
  };
  addFavorite = (contact: Contact): void => {
    this.favorites.push(contact);
    console.log(this.favorites);
  };
  getFavorites = () => {
    return this.favorites;
  };
}

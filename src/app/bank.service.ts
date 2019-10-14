import { Injectable } from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {timestamp} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

  account: any = {
    fname: 'Willie',
    lname: 'Mangram',
    email: 'dev.wmangram3@gmail.com',
    username: 'test',
    password: 'test',
    age: 24,
    address: {
      street: '206 Park Blvd',
      city: 'San Diego',
      state: 'CA',
      zip: 92101,
      country: 'United States of America'
    },
    balance: 10000,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ],
    messages: [
      {
        date: '01-01-01',
        name: 'Willie Mangram',
        email: 'dev.wmangram@gmail.com',
        message: 'Bruh theirs noise'
      }
    ],
  };
  contactMessage: [
    {
      name: 'Willie Mangram'
      date: '01-01-01',
      email: 'dev.wmangram@gmail.com',
      message: 'Bunch of noise.'
    }
  ];
  withdraw(value) {
    const date = new Date();
    if (this.account.balance > 0 && (this.account.balance - value) >= 0) {
      this.account.balance = this.account.balance - value;
      this.account.transactions.push({date: date.getMonth() + '-' + date.getDate() + '-' + date.getUTCFullYear(),
        type: 'Withdrawal', amount: value, currency: 'usd'});
      return this.account.balance + console.log(this.account.transactions);
    }
  }
  deposit(value) {
    const date = new Date();
    this.account.balance = (this.account.balance + +value);
    this.account.transactions.push({date: date.getMonth() + '-' + date.getDate() + '-' + date.getUTCFullYear(),
      type: 'Deposit', amount: value, currency: 'usd'});

    return this.account.balance + console.log(this.account.transactions);
  }
  submitMessage(name, email, message) {
    const date = new Date();
    if (name || email || message) {
      this.account.messages.push({date: date.getMonth() + '-' + date.getDate() + '-' + date.getUTCFullYear(),
      name: name, email: email, message: message});
    }
    return console.log(this.account.messages) + this.account.messages;
  }
}

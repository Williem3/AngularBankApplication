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
    ]
  };

  withdraw(value) {
    if (this.account.balance > 0 && (this.account.balance - value) >= 0) {
      this.account.balance = this.account.balance - value;
      this.account.transactions.push({date: new Date().getMonth() + '-' + new Date().getDate() + '-' + new Date().getUTCFullYear(),
        type: 'Withdrawal', amount: value, currency: 'usd'});
      return this.account.balance + console.log(this.account.transactions);
    }
  }
  deposit(value) {
    this.account.balance = (this.account.balance + +value);
    this.account.transactions.push({date: new Date().getMonth() + '-' + new Date().getDate() + '-' + new Date().getUTCFullYear(),
      type: 'Deposit', amount: value, currency: 'usd'});

    return this.account.balance + console.log(this.account.transactions);
  }

}

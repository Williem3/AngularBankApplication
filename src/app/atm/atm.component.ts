import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  balanceRequested: boolean;
  transactionRequest: boolean;

  constructor( public bankService: BankService ) { }

  value = '';
  transactions = this.bankService.account.transactions;

  isNumber(evt) {
    evt = ( evt ) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  withdraw() {
      this.bankService.withdraw(this.value);
      console.log(this.bankService.account.balance);
  }

  deposit() {
    this.bankService.deposit(this.value);
    console.log(this.bankService.account.balance);
  }
  balance() {
    return this.balanceRequested = true;
  }
  transactionAsked() {
    return this.transactionRequest = true;
  }
}

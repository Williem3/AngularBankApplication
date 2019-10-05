import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
  export class TellerComponent {

  constructor(public bankService: BankService ) {
  }
  value = '';
  transactionsAsked: boolean;
  transactions = this.bankService.account.transactions;
  accountDemographic = this.bankService.account.address;

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
  transactionsRequest() {
    return this.transactionsAsked = true;
  }
}

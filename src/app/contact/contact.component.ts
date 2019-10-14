import { Component, OnInit } from '@angular/core';
import {BankService} from '../bank.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( public bankService: BankService) { }
  nameValue = this.bankService.account.fname + ' ' + this.bankService.account.lname;
  emailValue = this.bankService.account.email;
  messageValue = '';
  ngOnInit() {
  }

  message(name, email, message) {
    this.messageValue.match( '^\\s*$') ? alert('Your feedback is missing, please fill it out with relevant information!') :
      this.bankService.submitMessage(name, email, message);
  }
}

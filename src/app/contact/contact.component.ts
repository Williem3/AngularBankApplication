import { Component, OnInit } from '@angular/core';
import {BankService} from '../bank.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( public bankService: BankService) { }
  nameValue = this.bankService.account.fname + this.bankService.account.lname;
  emailValue = this.bankService.account.email;
  messageValue = '';

  ngOnInit() {
  }

}

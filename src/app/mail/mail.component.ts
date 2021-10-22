import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signInForm:NgForm) {
    console.log(signInForm);
    console.log(signInForm.value.EmpIdField);
    console.log(signInForm.value.FnameField);
    console.log(signInForm.value.LnameField);
    
  }
}

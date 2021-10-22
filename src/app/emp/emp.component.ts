import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  empForm:FormGroup;
  listData:any;

  constructor(private fb:FormBuilder){

    this.listData=[];

    this.empForm=this.fb.group({
      'EmpId':new FormControl(),
      'Firstname':new FormControl(),
      'Lastname':new FormControl()
    })
   }
    addEmp(){
     this.listData.push(this.empForm.value);
     this.empForm.reset();
   }
  
  ngOnInit(){
  }

}

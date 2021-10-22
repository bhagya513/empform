import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { MailComponent } from './mail/mail.component';


const routes: Routes = [
  {
    path:'emp',
    component: EmpComponent
  },
  {
    path:'mail',
    component: MailComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
emp:Employee = {}as Employee;

register(){
  console.log(this.emp.name);
  console.log(this.emp.city);
  
}
}





  
  



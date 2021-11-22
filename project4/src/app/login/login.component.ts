import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username : string ;
  password : string ;

login(){

  if(this.username == 'admin' || this.password == 'admin')
  {
    alert('Valid User');

  }

  else
    {
  
      alert('Invalid User');
     }
this.username ='';
this.password ='';

    }

  }




 

  
    
  
  
  

  

  




  



  


  

  
  


import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username : string ;
  password : string ;
  email : string ;
  state : string ;
  hobbies :string ;
  geneder : string ;
  address : string ;

login(){

  if (this.username == 'admin' || this.password == 'admin' || this.address =='19eastdrive,apt981,slingerlands' || this.email ==' meghana.eadara@gmail.com'|| this.geneder =='female'|| this.hobbies =='tv'|| this.state == 'ny')
  { 
    alert('Valid User');
  }
  
  else {
    
    alert('Invalid User');
    
  }

  this.username ='';
  this.password ='';
  this.email ='';
  this.address ='';
  this.geneder ='';
  this.hobbies ='';
  this.state ='';    

}
    
}

    

  




 

  
    
  
  
  

  

  




  



  


  

  
  
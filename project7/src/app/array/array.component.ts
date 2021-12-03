import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {

names: string[] = [];

  constructor() { 
        this.names.push('Maggi');
        console.log(this.names);
        this.names.push('Sonu');
        console.log(this.names);
        
   this.names.push('Sohan');
  console.log(this.names);

this.names.push('Harsha');
console.log(this.names);
this.names.push('Sindhu');
console.log(this.names);
  
 this.names.push('Maggi');
console.log(this.names);
this.names.push('Sonu');
console.log(this.names);

this.names.push('Sohan');
console.log(this.names);

this.names.push('Harsha');
console.log(this.names);
this.names.push('Sindhu');
console.log(this.names);
}
}
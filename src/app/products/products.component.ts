import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

@Input('companyName') companyName:string;
@Output() recentlyAdded = new EventEmitter<string>();
item:string;

  products=[{name:'Moto G5',quantity:'2'},
            {name:'Raycold Geyser',quantity:'3'},
            
  ]

 
  submit(f1,f2)
  {
    
  
   this.products.push({name:f1.value,quantity:f2.value})
   this.item=f1.value+" , "+f2.value
   this.recentlyAdded.emit(this.item)
  }

}
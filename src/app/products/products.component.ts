import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products=[{name:'Moto G5',quantity:'2'},
            {name:'Raycold Geyser',quantity:'3'},
            {name:'Dell Inspiron Laptop',quantity:'1'}
  ]

 
  submit(f1,f2)
  {
    
  
   this.products.push({name:f1.value,quantity:f2.value})
  }

}
import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../model/type';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-customer',
  imports: [NgForOf, FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})

export class Customer implements OnInit{
cancel() {
throw new Error('Method not implemented.');
}
save() {
throw new Error('Method not implemented.');
}
  
  customerList : Array<CustomerModel> = []; 

   // http://localhost:8080/customer/add
  constructor(private http:HttpClient, private cdr: ChangeDetectorRef){
    // this.getAll();
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get<CustomerModel[]>("http://localhost:8080/customer/getAll").subscribe(data=>{
      console.log(data);
      this.customerList=data;
      this.cdr.detectChanges();
    })
  }
  
}

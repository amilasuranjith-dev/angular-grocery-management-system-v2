import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../model/type';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer',
  imports: [NgForOf, FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})


//--Customer component 
export class Customer implements OnInit {

  customerList: Array<CustomerModel> = [];
  customerObj: CustomerModel = {
    id: '',
    title: '',
    name: '',
    dob: '',
    salary: 0.0,
    address: '',
    city: '',
    province: '',
    postalCode: ''
  }

  // http://localhost:8080/customer/add
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  //network respons mapping to CustomerModel
  getAll() {
    this.http.get<CustomerModel[]>("http://localhost:8080/customer/getAll").subscribe(data => {
      console.log(data);
      this.customerList = data;
      this.cdr.detectChanges();    })
  }

  cancel() {
    throw new Error('Method not implemented.');
  }

  
  addCustomer(): void {
    // console.log(this.customerObj);
    this.http.post("http://localhost:8080/customer/add", this.customerObj).subscribe(data => {
      console.log(data);
      if (data === true) {
        Swal.fire({
          title: "Good job!"+this.customerObj.name+" Saved",
          text: "You clicked the button!",
          icon: "success"
        });
      }
      this.getAll();
    })
  }



}

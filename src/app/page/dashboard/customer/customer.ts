import { NgForOf, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../model/type';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer',
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})


//--Customer component 
export class Customer implements OnInit {
updateCustomer() {
throw new Error('Method not implemented.');
}
editCustomer(_t99: CustomerModel) {
throw new Error('Method not implemented.');
}



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
      this.cdr.detectChanges();
    })
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
          title: "Good job!" + this.customerObj.name + " Saved",
          text: "You clicked the button!",
          icon: "success"
        });
      }
      this.getAll();
    })
  }

  //Delete function
  deleteCustomer(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete("http://localhost:8080/customer/delete-by-id/" + id).subscribe(data => {
          if (data === true) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getAll();
          }
        })
      }
    });
  }

  isEditMode: boolean = false;


}

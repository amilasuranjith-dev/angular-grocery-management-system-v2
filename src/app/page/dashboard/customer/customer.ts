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


//--Customer Class 
export class Customer implements OnInit {

  customerList: Array<CustomerModel> = [];
  isEditMode: boolean = false;
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
    this.resetForm();
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

  resetForm() {
    this.isEditMode = false;
    this.customerObj = {
      id: '',
      title: '',
      name: '',
      dob: '',
      salary: 0.0,
      address: '',
      city: '',
      province: '',
      postalCode: ''
    };
    this.cdr.detectChanges();
  }
  editCustomer(customer: CustomerModel) {
    this.isEditMode = true;
    this.customerObj = {...customer};
    //Convert backend Date to YYYY-MM-DD string for HTML date input
    if (customer.dob) {
      this.customerObj.dob = new Date(customer.dob).toISOString().split('T')[0];
    }
    this.cdr.detectChanges();
  }
  updateCustomer() {
    this.http.put("http://localhost:8080/customer/update", this.customerObj).subscribe(data => {
      if(data){
        Swal.fire({
          title: "Updated!",
          text: "Customer " + this.customerObj.name + " has been updated.",
          icon: "success"
        });
        this.getAll();
        this.resetForm();
      }
    }, error => {
      console.error("Update failed", error);
      Swal.fire("Error", "Could not update customer", "error");
    });
  }




}

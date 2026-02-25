import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ItemModel } from '../../model/type';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './item.html',
  styleUrl: './item.css',
})

//Item Class
export class Item implements OnInit {

  isEditMode: boolean = false;

  itemList: Array<ItemModel> = [];  

  itemObj: ItemModel = {
    id: '',
    description: '',
    packSize: '',
    unitPrice: 0.0,
    qty: 0
  }


  // http://localhost:8080/item/add
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  getAll() {
    this.http.get<ItemModel[]>("http://localhost:8080/item/get-all").subscribe(data => {
      console.log(data);
      this.itemList = data;
      this.cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  addItem(): void {
    console.log(this.itemObj);
    this.http.post("http://localhost:8080/item/add", this.itemObj).subscribe(data => {
      console.log(data);
      if (data === true) {
        Swal.fire({
          title: "Good job!" + this.itemObj.description + " Saved",
          text: "You clicked the button!",
          icon: "success"
        });
      }
      this.getAll();
    });
  }

  deleteItem(id: string) {
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
        this.http.delete("http://localhost:8080/item/delete-by-id/" + id).subscribe(data => {
          if (data === true) {
            Swal.fire({
              title: "Deleted!",
              text: "Item has been deleted.",
              icon: "success"
            });
            this.getAll();
          }
        })
      }
    });
  }

  editItem(item: ItemModel) {
    this.isEditMode = true;
    this.itemObj = { ...item };
    this.cdr.detectChanges();
  }

  updateItem() {
    this.http.put('http://localhost:8080/item/update', this.itemObj).subscribe(data => {
      if (data === true) {
        Swal.fire({
          title: 'Updated!',
          text: this.itemObj.description + ' has been updated.',
          icon: 'success'
        });
        this.resetForm();
      }
      this.getAll();
    });
  }

  resetForm() {
    this.isEditMode = false;
    this.itemObj = {
      id: '',
      description: '',
      packSize: '',
      unitPrice: 0.0,
      qty: 0
    };
    this.cdr.detectChanges();
  }

  cancel() {
    this.resetForm();
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ItemModel } from '../../model/type';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  imports: [FormsModule, NgFor],
  templateUrl: './item.html',
  styleUrl: './item.css',
})

export class Item implements OnInit {
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
}

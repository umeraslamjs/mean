import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ApiModule } from '../api/api.module';
import { UsersModule } from '../model/users/users.module';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public userObj = new UsersModule;
  id;
  constructor(private api:ApiModule , public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.userObj = this.data;
  }

  update() {
this.id=this.userObj['_id'];
console.log(this.id)
    this.api.updateSingle(this.id,this.userObj,(res)=>{
  this.dialogRef.close()

})
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiModule } from '../api/api.module';
import { UsersModule } from '../model/users/users.module';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  
  public user: UsersModule[] = [];
  public userObj = new UsersModule();

  displayedColumns: string[] = ['name', 'email', 'mobile'];
  datasource;
  constructor(private api: ApiModule,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers()
  }
  addRecord() {

    this.api.addClient(this.userObj, (err, result) => {
      this.getUsers();
    });

  }

  
  openDialog(id): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {_id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  updateRecord(userData) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "auto",
      data: userData,
    });
  }

  getUsers() {
    this.api.getAllUsers((res) => {
      this.user = res['data'];

    });
  }

  deleteRecord(id) {
    this.api.deleteUser(id, (res) => {
      this.getUsers();
    })
  }
}

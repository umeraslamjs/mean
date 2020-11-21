import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from "rxjs";
import { Http } from "@angular/http";
import { UsersModule } from '../model/users/users.module';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApiModule { 
constructor(private http: Http){}

  private getUrl(url: string): string {
    return `${environment.apiUrl}` + url;
  }

  
  getAllUsers( cb: (data: UsersModule[]) => void): Subscription {
    const observer = this.http.get(
      this.getUrl(
        `users`
      )
    );
    return observer.subscribe(
      (response) => {
        cb(response.json() as UsersModule[]);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }

  public addClient(data: UsersModule, cb: Function) {
    const observer = this.http.post(this.getUrl(`users`), data);
    observer.subscribe(
      (response) => {
        cb(null, response);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }
  
  
  public updateSingle(id,data: UsersModule, cb: Function) {
    const observer = this.http.put(this.getUrl(`users/${id}`), data);
    observer.subscribe(
      (response) => {
        cb(null, response);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }
  public deleteUser(id, cb: Function) {
    const observer = this.http.delete(this.getUrl(`users/${id}`));
    observer.subscribe(
      (response) => {
        cb(null, response);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }


  
  private handleError(err: any, cb: any) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", err.error.message);
      var errorMsg = `'An error occurred:', ${err.error.message}`;
      cb(errorMsg);
      return errorMsg;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      var errorMsg =
        `Backend returned code ${err.status}, ` + `body was: ${err.error}`;
      console.error(errorMsg);
      cb(errorMsg);

      return `Backend returned code ${err.status}, ` + `body was: ${err.error}`;
    }
  }
  
}

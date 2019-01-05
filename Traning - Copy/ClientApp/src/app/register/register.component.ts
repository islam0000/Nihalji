import { Component, Inject,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})



export class RegisterComponent {
  model: any = {};


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    http.post<Registration>(baseUrl + 'api/Register/Register', options).subscribe(() => {
      this.model.firstName, this.model.lastName, this.model.email, this.model.password;
    }, error => console.error(error));
  }
}


interface Registration {
  fistName: string;
  lastName: string;
  email: string;
  passsword: string;
  }



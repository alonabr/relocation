import { User } from "../../model/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string){
        return this.http.post<User>('http://localhost:8080/Relocation/login.json',{ username: username, password: password })
            .map((user : User) => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}

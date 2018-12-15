import { AlertService } from "./common/services/alert.service";
import { AuthenticationService } from './common/services/authentication.service';
import { LoginService } from './login/login.service';
import { LoginObject } from './login/loginobject';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
    model: any = {};
    result: string;
    loading = false;
    returnUrl: string;
  
  
  constructor(private route: ActivatedRoute,
        private router: Router) {
  }


  ngOnInit(): void {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 
  login(){
        this.loading = true;
  
    }
}


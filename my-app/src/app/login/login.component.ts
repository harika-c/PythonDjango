import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,private router:Router, private dashboard: DashboardComponent) { }
  ngOnInit(): void {
  }
  loginUser(e){
    e.preventDefault();
    console.log('lllllllll',e)
    const target1=e.target;
    const user=target1.querySelector('#username').value;
    const pass=target1.querySelector('#password').value;
    console.log(user,pass);
    
    this.Auth.getUserDetails(user , pass).subscribe(data=>{
      console.log(data,'is what we got from server')
      if(data.success){
        console.log("went inside success")
        this.dashboard.setaa(data.message)
        this.router.navigate(['dashboard'])
        
        this.Auth.setLoggedIn(true)
      }else{
        console.log("inside alert")
        window.alert(data.message)        
      }
    });

  }
}

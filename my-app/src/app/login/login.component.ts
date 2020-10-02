import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,private router:Router) { }
  ngOnInit(): void {
  }
  loginUser(e){
    e.preventDefault();
    const target1=e.target;
    const user=target1.querySelector('#username').value;
    const pass=target1.querySelector('#password').value;
    console.log(user,pass);
    console.log(";;;;;",e);
    this.Auth.getUserDetails(user , pass).subscribe(data=>{
      console.log(data,'is what we got from server')
      if(data.success){
        console.log("went inside success")
        this.router.navigate(['admin'])
      }else{
        console.log("inside alert")
        window.alert(data.message)        
      }
    });

  }
}

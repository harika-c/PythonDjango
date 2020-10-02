import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  registerUser(event){
    event.preventDefault();
    const errors=[];
    const tar=event.target;
    const uname=tar.querySelector('#uname').value;
    const pwd=tar.querySelector('#pwd').value;
    const cpwd=tar.querySelector('#cpwd').value;
    if(pwd !=cpwd){
      console.log(errors);
      errors.push("Passwords donot match !");
    }
    if(errors.length===0)
    {
      this.auth.registerUser(uname,pwd).subscribe(data=>{
        console.log('dataaa',data);
        if(data.success){
          this.router.navigate(['dashboard']);
        }
      }) 
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quote='loading...'
  username='this is ur emailid'
  constructor(private user:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user.getData().subscribe(data=>{
      console.log(',,,,,,data,,',data,"...",data.status)
      if(data.status){
        this.quote=data.quote
        this.username=this.getaa();
      }else{
        console.log('logout')
        this.router.navigate(['logout'])
      }
     
    })
   
  }
  public setaa(username){
    this.username=username;
   }  
   public getaa(){
    return this.username;
   }
}

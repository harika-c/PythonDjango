import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface myData{
  status:boolean,
  quote:string,
  username:string
}
interface isLoggedIn{
  status:boolean
}
interface logoutStatus{
  status:boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  getData(){
    return this.http.get<myData>('http://localhost:8001/api/data')
  }
  isLoggedIn():Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('http://localhost:8001/api/isloggedin')
  }
  logout(){
    return this.http.get<logoutStatus>('http://localhost:8001/api/logout')
  }
}

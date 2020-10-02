import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData{
  obj:Object
}

@Injectable({
  providedIn: 'root'
})
export class LetsseeService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<myData>('http://localhost:1234/api/file.php')
    
    
  }
}

import { Component } from '@angular/core';



function log(className){
  console.log(className)  
}
@log 
class myExample{
  constructor(a,b){
  console.log("constructor in class")
}
}

const myClass=new myExample(1,2)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular my-app';
 
 
  
  constructor() {
    console.log()
    
  }
  ngOnInit(){
    
    // console.log('ppppp',this.myFirstService.getData())
      
  }
  
  
}

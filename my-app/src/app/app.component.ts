import { Component } from '@angular/core';
import { LetsseeService } from './letssee.service'

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
  myVariable='app'
  myVariable2='app2'
  myVar=false
  data= {}
  
  constructor(private myFirstService: LetsseeService) {
    console.log("constrautor",this.asSimpleMethod(2,3))
    //unable to keep them outside of a function or constructor 
    // setInterval(() => {
    // this.myVariable=Math.random().toString()
    // this.myVar=Math.random()>0.5
    // },50)
    
  }
  ngOnInit(){
    this.myFirstService.getData().subscribe(data =>{
      this.data=data.obj;
    })
  }
  myFunction(){
    this.myVar=! this.myVar
  }
  asSimpleMethod(a,b){
    console.log("hey watzup")
    return a*b
  }
  giveInput(e){
    this.myVariable=e.target.value
    console.log("inside input",e.target.value)
  }
  
}

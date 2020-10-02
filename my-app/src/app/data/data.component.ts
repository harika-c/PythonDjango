import { Component, OnInit } from '@angular/core';
import { LetsseeService } from '../letssee.service'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  myVariable='app'
  myVariable2='app2'
  myVar=false
  rec= []
  
  constructor(private myFirstService: LetsseeService) {
    console.log("constrautor",this.asSimpleMethod(2,3))
    
  }

  ngOnInit(): void {
    this.myFirstService.getData().subscribe(data =>{
      // this.rec=data.obj;
      console.log('>>>>>>',data.obj)
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

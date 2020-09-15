import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myname="harika"
  i=0
  someVar=0
  constructor() {
    console.log("hello constructor")
   }

  ngOnInit(): void {
    // setInterval(()=> {
    //   this.someVar=Math.random()
    // })
  }

  doSomeTask()
  {
    console.log(`task..${this.i++}`)
  }

}

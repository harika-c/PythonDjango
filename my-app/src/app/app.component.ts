import { Component } from '@angular/core';

function log(t,n,d){
console.log(t,'....',n,'//',d.value)
d.value

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular my-app';

  @log
  asSimpleMethod(){
    console.log("hey watzup")
  }
}

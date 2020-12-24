import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LetsseeService } from './letssee.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'data',
        component:DataComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'logout',
        component:LogoutComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AuthGuard]
      }
    ])
  ],
  providers: [LetsseeService , AuthService, AuthGuard , UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ArtworkService } from './artwork.service';
import { ProfileComponent } from './profile/profile.component';
import { FullprofileComponent } from './fullprofile/fullprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    FullprofileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component : HomeComponent},
      {path:'page2', component:Page2Component},
      {path:'about', component: AboutComponent},
      {path:'signup', component:SignupComponent},
      {path:'login', component:LoginComponent},
      {path:'profile/:id',component:ProfileComponent},
      {path:'fullprofile/:id',component:FullprofileComponent}
    ])
  ],
  providers: [ArtworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }

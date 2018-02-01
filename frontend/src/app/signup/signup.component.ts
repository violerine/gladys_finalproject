import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http"
import { Router } from "@angular/router"
import { AuthService } from "../auth.service"
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private http : Http, private route : Router) { }

  ngOnInit() {

  }

  
  emptyfield
  salahpass = ""
  checkboxempty
  id 

  checkboxx = false

  checkbox(x){
    if(x.target.checkbox){
      this.checkboxx = false
    }
    else{
      this.checkboxx = true
    }
    console.log(this.checkboxx)
  }

  Signup(f:NgForm){

    if(f.value.pswrepeat==f.value.password && f.value.pswrepeat!=="" && f.value.password!=="" && this.checkboxx == false){
      
    let obj = {
      username : f.value.username,
      password : f.value.password,
      
    }

    let header = new Headers ({"Content-Type" : "application/json"})
    let options = new RequestOptions({ headers : header})

    this.http.post("http://localhost:3000/api/user/new",obj,options)
    .subscribe(
      result => {
        this.route.navigate(['/fullprofile/'+result.json()._id])
        
      },
      error =>{
        console.log(error)
      }
    )
  }

  

  else if(f.value.pswrepeat!==f.value.password){
    console.log("error")
    this.salahpass = "Password doesn't match"
  }

  else if(f.value.pswrepeat=="" ||f.value.password=="" ||f.value.username==""){
    console.log("Field cannot be empty")
    this.emptyfield="Field cannot be empty"
  

  }


}


}

import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers } from "@angular/http"
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userList =[]
  id: number;
  private sub: any;
  file : File

  constructor(private http : Http, private route : Router, private activatedroute : ActivatedRoute) { }

  ngOnInit() {

 
  }
  

  Login(f : NgForm){

    this.sub = this.activatedroute.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   console.log(this.id)

    let obj = {
      username : f.value.username,
      password : f.value.password
    }

    let header = new Headers ({ "Content-Type" : "application/json"})
    let options = new RequestOptions({headers : header})

    this.http.post("http://localhost:3000/api/user/login",obj,options)
    .subscribe(
      result=>{
        sessionStorage.setItem("token",result.json().token)
        this.route.navigate(['/profile/'+result.json()._id])
        console.log( result.json())
      },
      error =>{
        console.log("user not found")
      }
    )
  }




  profile(g:NgForm){

    this.sub = this.activatedroute.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
    console.log(this.id)
    console.log(g.value)

    let obj = {
      _id : this.id,
      name : g.value.name,
      address : g.value.address,
      occupation : g.value.occupation,
      interests : g.value.interests,
     
    }

    let header = new Headers ({"Content-Type" : "application/json"})
    let options = new RequestOptions({ headers : header})

    this.http.put("http://localhost:3000/api/user/put",obj,options)
    .subscribe(
      result => {
        this.route.navigate(['/profile/'+result.json()._id])
        console.log("berhasil")
       
      },
      error =>{
        console.log(error)
      }
    )
  }

  // loadProduct(){
    
  //       let header = new Headers()
  //       let options = new RequestOptions({ headers : header });
    
  //       this.http.get("http://localhost:7000/api/user", options)
  //       .subscribe(
  //         result => {
  //           this.userList = result.json();
  //         },
  //         error => {
            
  //         }
  //       );
  //     }

}

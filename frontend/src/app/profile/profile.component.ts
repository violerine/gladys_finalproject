import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profile = {
  _id : "",
  name : "",
  address : "",
  occupation :"",
  interests : "",
  image : "",
}


profiledata :any=[]

file : File

private sub: any;

  constructor(private http : Http, private route : Router, private activatedroute : ActivatedRoute) { }

  ngOnInit() {


    this.sub = this.activatedroute.params.subscribe(params => {
    this.profile._id = params['id']; // (+) converts string 'id' to a number

     
   });
  


    
    this.loadStatus();
    this.loadProfile();
    

  }


  loadProfile(){
    console.log(this.profile._id)
    
    // let token = sessionStorage.getItem("token");
    let header = new Headers()
    let options = new RequestOptions({ headers : header });

    this.http.get("http://localhost:3000/api/user/" + this.profile._id, options)
    .subscribe(
      result => {
        console.log(result.json())
        this.profile= result.json();
        
      },
      error => {
        
      }
    );

  }


  loadStatus(){
    
    
    // let token = sessionStorage.getItem("token");
    

    this.http.get("http://localhost:3000/api/gallery?id="+this.profile._id )
    .subscribe(
      result => {
        console.log(result.json())
        this.profiledata = result.json();
      },
      error => {
        
      }
    );

  }


  profileData(h : NgForm){
    if(this.file != null){
      let formData = new FormData();
      formData.append("_id",this.profile._id);
      formData.append("description", h.value.description);
      formData.append("category", h.value.category);
      formData.append("uploadpic", this.file);

      let header = new Headers();
      let options = new RequestOptions({ headers : header });

      this.http.post("http://localhost:3000/api/gallery/post/profile", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
          h.reset();
        },
        error => {
          console.log(error);
        },
      );


    }
    else{
      console.log("error")
    }
  }

  fileChange($event){
    this.file = $event.target.files[0];
  }




}

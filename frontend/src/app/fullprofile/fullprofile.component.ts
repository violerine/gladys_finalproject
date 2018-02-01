import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http"
import { Router } from "@angular/router"
import { AuthService } from "../auth.service"
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-fullprofile',
  templateUrl: './fullprofile.component.html',
  styleUrls: ['./fullprofile.component.css']
})
export class FullprofileComponent implements OnInit {

  id
  private sub: any;
  file : File

  constructor(private http : Http, private route : Router, private activatedroute : ActivatedRoute) { }
  
  ngOnInit() {

  }

  profile(f:NgForm){

    this.sub = this.activatedroute.params.subscribe(params => {
    this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
    console.log(this.id)
    console.log(f.value)
    console.log(this.file)

    if( f.value.name != "" && f.value.name != null ){
    let formData = new FormData() 
      formData.append("_id",this.id);
      formData.append("name",f.value.name);
      formData.append("address",f.value.address);
      formData.append("occupation",f.value.occupation);
      formData.append("interests",f.value.interests);
      formData.append("image",this.file);
      

    let header = new Headers()
    let options = new RequestOptions({ headers : header})

    this.http.put("http://localhost:3000/api/user/put",formData,options)
    .subscribe(
      result => {
        console.log(result.json())
        this.route.navigate(['/profile/'+result.json()._id])
        console.log("berhasil")
       
      },
      error =>{
        console.log(error)
      }
    )
  }
  else{
    console.log("error")
  }
}


  fileChange($event){
    this.file = $event.target.files[0];
  }


  

}

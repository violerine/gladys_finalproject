
import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ActivatedRoute } from '@angular/router'
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  profiledata :any=[]
  digitalart = "digitalart"
  traditional ="traditionalart"
  photography = "photography"


  list =[]

  @ViewChild('mySidebar') mySidebar: ElementRef;
  img : ElementRef
  

  constructor(private http : Http, private router : Router, private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.loadImage()
  }

  w3_open(){
    if (this.mySidebar.nativeElement.style.display === 'block') {
      this.mySidebar.nativeElement.style.display = 'none';
  } else {
      this.mySidebar.nativeElement.style.display = 'block';
  }

 
  }

  w3_close() {
    this.mySidebar.nativeElement.style.display = "none";
}

onClick(element){
  if(this.img.nativeElement.src==element.src){

  }
}


loadImage(){

  // let token = sessionStorage.getItem("token"); 
  this.http.get("http://localhost:3000/api/gallery/gett")
  .subscribe(
    result => {
      console.log(result.json())
      this.profiledata = result.json();
    },
    error => {
      
    }
  );

}

filterUploadpic(x){
    
  let header = new Headers()
  let options = new RequestOptions({ headers : header });
  

  this.http.get("http://localhost:3000/api/gallery/category/" + x, options)
  .subscribe(
    result => {
      console.log(result.json())
      this.list = result.json();
     
     
      
    },
    error => {
      
    }
  );
}

}

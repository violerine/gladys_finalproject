import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ArtworkService } from "../artwork.service";
import { NgForm } from "@angular/forms";
import {AfterViewInit, Directive, ViewChild} from '@angular/core'
import {trigger, state, animate, style, transition} from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('mySidebar') mySidebar: ElementRef;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  w3_open(){
    if (this.mySidebar.nativeElement.style.display === 'block') {
      this.mySidebar.nativeElement.style.display = 'none';
  } else {
      this.mySidebar.nativeElement.style.display = 'block';
  }

  }

  w3_close(){
    this.mySidebar.nativeElement.style.display='none';
  }


}

import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { ArtworkService } from '../artwork.service';
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('mySidebar') mySidebar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  w3_open(){
    if (this.mySidebar.nativeElement.style.display === 'block') {
      this.mySidebar.nativeElement.style.display = 'none';
  } else {
      this.mySidebar.nativeElement.style.display = 'block';
  }

  }


}

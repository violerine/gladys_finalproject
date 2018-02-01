import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

interface Post {
  name: string;
  subject:string;
  content:string;
}

@Injectable()
export class ArtworkService {

  posts : any;

  name:string;
  subject:string;
  content:string;


  constructor(

  ) { }

}



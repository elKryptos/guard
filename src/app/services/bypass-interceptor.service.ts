import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BypassInterceptorService {

  http: HttpClient;

  constructor(private handler: HttpBackend){
    this.http = new HttpClient(this.handler);
  }
}

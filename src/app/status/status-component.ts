import {Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Component({
  selector: 'status-component',
  templateUrl: './status-component.html'
})
export class StatusComponent { 
  services = [{"serviceName":" Service 1(Test)","status":"Nicht verfügbar","startupDate":"-","timestamp":"-","description":"Any Description 1  ","url":"https://any-url1.de/"},{"serviceName":" Service 2(Test)","status":"Nicht verfügbar","startupDate":"-","timestamp":"-","description":"Any Description 2  ","url":"https://any-url2.de/"},{"serviceName":" Service 3(Test)","status":"Nicht verfügbar","startupDate":"1234","timestamp":"-","description":"Any Description 3  ","url":"https://any-url3.de/"},{"serviceName":" Service 4(Test)","status":"Nicht verfügbar","startupDate":"-","timestamp":"-","description":"Any Description 4  ","url":"https://any-url4.de/"}]
  
  
  public xmlItems: any;  
  constructor(private _http: HttpClient) { this.loadXML(); }  
  loadXML() {  
    this._http.get('https://our-url.de/status-data',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'application/json')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'json'  
      })  
      .subscribe((data) => {  
            this.xmlItems = data;  
    
      });  
  }  
} 
import { Component, OnInit } from '@angular/core';
 
@Component({
 selector: 'app-servers',
 templateUrl: './servers.component.html',
 styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer = false;
 serverCreationStatus = 'No server was created!';
 serverName = 'Test server';
 serverCreated = false;
 servers = ['Testserver', 'Testserver 2'];

 constructor() {
   setTimeout(() => {
     this.allowNewServer = true;
   },2000);
 }
 
 ngOnInit() {
 }
 
 //Use on to say that this will be triggered by this template
 onCreateServer() {
   this.serverCreated = true;
   this.servers.push(this.serverName);
   this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
 }
 onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value; //target is type input element so we need to cast it 
 }
}

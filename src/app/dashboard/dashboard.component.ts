import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
allTickets : any [] = [];
totalTickets : Number = 0;
resolvedTickets : Number = 0;
pendingTickets : Number = 0;
constructor(private getdata : TicketingserviceService){
this.getdata.getactivetickets().subscribe((res)=>{
  this.allTickets = res;
  this.totalTickets = res.length;
})
this.getdata.getPendingTickets().subscribe((res)=>{
  this.pendingTickets = res.length;
})
this.getdata.getResolvedTickets().subscribe((res)=>{
  this.resolvedTickets = res.length;
})
}
}

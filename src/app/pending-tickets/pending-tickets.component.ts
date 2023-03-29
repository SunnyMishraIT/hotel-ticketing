import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent {
  allTickets : any [] = [];
  activeTickets : any [] = [];
  resolvedTickets : any [] = [];
  constructor(private getdata : TicketingserviceService){
  
  }
    ngOnInit(){
      this.getdata.getPendingTickets().subscribe((res)=>{
        this.activeTickets = res;
      });
    }
  
    resolved(e : any){
      console.log(e)
      this.getdata.resolveTicket(e.id).subscribe((res)=>{
        console.log(res)
        this.activeTickets = res
      })
    }
  }
  
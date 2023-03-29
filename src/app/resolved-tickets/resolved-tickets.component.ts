import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';

@Component({
  selector: 'app-resolved-tickets',
  templateUrl: './resolved-tickets.component.html',
  styleUrls: ['./resolved-tickets.component.css']
})
export class ResolvedTicketsComponent {
  resolvedTickets : any [] = [];
  constructor(private getdata : TicketingserviceService){
  
  }
    ngOnInit(){
      this.getdata.getResolvedTickets().subscribe((res)=>{
        this.resolvedTickets = res;
      });
    }
  
    resolved(e : any){
      
    }
  
    delete(e : any){
      this.getdata.deleteTicket(e.id).subscribe((res)=>{
        console.log(res)
        this.resolvedTickets = res;
      })
    }
  }
  
import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.css']
})
export class PendingTicketsComponent {
  allTickets : any [] = [];
  columnHeaders : any [] = ["Sr no",	"Ticket Number",	"Subject",	"Email",	"Status",	"Date",	"Assigned by",	"Channel",	"Type of Complaint",	"Category",	"Customer Name", 	"Customer Mail Id",	"Contact No.",	"Location",	"State",	"Product Manufacture",	"Product Name", 	"MFD Date",	"Batch No.",	"Qty of Spoiled Product",	"Bought From",	"Complaint Brief",	"1st Response Date",	"Response template",	"Complaint Summary",	"Resolution Summary",	"Action Taken",	"Date of closure",	"Action Approved By",	"Complaint Shared with factory", 	"Factory Resolution Summary",	"Factory resolution Date",]
  activeTickets : any [] = [];
  isDataEmpty : Boolean = true ;
  resolvedTickets : any [] = [];
  constructor(private getdata : TicketingserviceService){
  
  }
    ngOnInit(){
      this.getdata.getPendingTickets().subscribe((res)=>{
        this.activeTickets = res;
      });
      if(this.activeTickets.length > 0){
        this.isDataEmpty = false;
        console.log(this.isDataEmpty)
      }
      console.log(this.isDataEmpty)

    }
  
    resolved(e : any){
      console.log(e)
      this.getdata.resolveTicket(e.id).subscribe((res)=>{
        console.log(res)
        this.activeTickets = res
      })
    }

    // update(e : any){
      
    // }
  }
  
import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';

@Component({
  selector: 'app-resolved-tickets',
  templateUrl: './resolved-tickets.component.html',
  styleUrls: ['./resolved-tickets.component.css']
})
export class ResolvedTicketsComponent {
  resolvedTickets : any [] = [];
  isDataEmpty : Boolean = true ;
  columnHeaders : any [] = ["Sr no",	"Ticket Number",	"Subject",	"Email",	"Status",	"Date",	"Assigned by",	"Channel",	"Type of Complaint",	"Category",	"Customer Name", 	"Customer Mail Id",	"Contact No.",	"Location",	"State",	"Product Manufacture",	"Product Name", 	"MFD Date",	"Batch No.",	"Qty of Spoiled Product",	"Bought From",	"Complaint Brief",	"1st Response Date",	"Response template",	"Complaint Summary",	"Resolution Summary",	"Action Taken",	"Date of closure",	"Action Approved By",	"Complaint Shared with factory", 	"Factory Resolution Summary",	"Factory resolution Date",]

  constructor(private getdata : TicketingserviceService){
  
  }
    ngOnInit(){
      this.getdata.getResolvedTickets().subscribe((res)=>{
        this.resolvedTickets = res;
      });
      if(this.resolvedTickets.length > 0){
        this.isDataEmpty = false;
        console.log(this.isDataEmpty)
      }
      console.log(this.isDataEmpty)
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
  
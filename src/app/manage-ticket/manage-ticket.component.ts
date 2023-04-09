let $ : any;
import { Component, OnInit } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-ticket',
  templateUrl: './manage-ticket.component.html',
  styleUrls: ['./manage-ticket.component.css']
}) 
export class ManageTicketComponent implements OnInit {
allTickets : any [] = [];
columnHeaders : any [] = ["Sr no",	"Ticket Number",	"Subject",	"Email",	"Status",	"Date",	"Assigned by",	"Channel",	"Type of Complaint",	"Category",	"Customer Name", 	"Customer Mail Id",	"Contact No.",	"Location",	"State",	"Product Manufacture",	"Product Name", 	"MFD Date",	"Batch No.",	"Qty of Spoiled Product",	"Bought From",	"Complaint Brief",	"1st Response Date",	"Response template",	"Complaint Summary",	"Resolution Summary",	"Action Taken",	"Date of closure",	"Action Approved By",	"Complaint Shared with factory", 	"Factory Resolution Summary",	"Factory resolution Date",]
constructor(private getdata : TicketingserviceService, private router : Router){

}
  ngOnInit(){
    this.getAllTickets();
  }
  getAllTickets(){
    this.getdata.getactivetickets().subscribe((res)=>{
      console.log(res)
      this.allTickets = res;
    });
  }
  editCalled(){
    console.log("Hello From Edit")
    $('#exampleModal').modal("show")
  }
  updateTicket(e : any){
    console.log(e)
  this.router.navigate(["edit"])
  }
  resolved(e : any){
    console.log(e)
    this.getdata.resolveTicket(e.id).subscribe((res)=>{
      this.getAllTickets();
    })
  }
  deleteTicket(e : any){
    this.getdata.deleteTicket(e.id).subscribe((res)=>{
      console.log(res)
      this.getAllTickets();
    })
  }
}

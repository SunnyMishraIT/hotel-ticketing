import { Component, OnInit } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';

@Component({
  selector: 'app-manage-ticket',
  templateUrl: './manage-ticket.component.html',
  styleUrls: ['./manage-ticket.component.css']
}) 
export class ManageTicketComponent implements OnInit {
allTickets : any [] = [];
constructor(private getdata : TicketingserviceService){

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

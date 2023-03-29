import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketingserviceService {

  constructor() { }
  allTickets : any [] = []; 

  getactivetickets() : Observable<any>{
    return of(this.allTickets);
  }
  getResolvedTickets() : Observable<any>{
    let resolvedTickets = this.allTickets.filter((el)=>{
      return el.status == "Resolved";
    });
    return of(resolvedTickets)
  }
  getPendingTickets() : Observable<any>{
    let activeTickets = this.allTickets.filter((el)=>{
      return el.status == "Pending";
    });
    return of(activeTickets)
  }
  addtickets(payload : any){

    let uniqueid;
    if(this.allTickets.length == 0 || this.allTickets.length == undefined || this.allTickets.length == null){
      uniqueid = 1;
    } else{
      uniqueid = Number.parseInt(this.allTickets.at(-1).id) + 1 ;
    }
    console.log(uniqueid
      )
    let data = {
      id : uniqueid,
      customerName : payload.customerName,
      roomNumber : payload.roomNumber,
      issueType : payload.issueType,
      issueDescription : payload.issueDescription,
      status : payload.status,
      dateTime : payload.dateTime
    }
    this.allTickets.push(data);
    console.log(this.allTickets);
  }

  resolveTicket(payload : any) : Observable<any>{
    console.log(payload)
    let index = this.allTickets.findIndex((el)=>{
      return el.id == payload;
    })
    this.allTickets[index].status = "Resolved"
    // return of(index)
    return this.getPendingTickets();
  }

  deleteTicket(payload : any) : Observable<any>{
    console.log(payload)
    let index = this.allTickets.findIndex((el)=>{
      return el.id == payload;
    })
    console.log(index)
    this.allTickets.splice(index,1);
    // return of(index)
    return this.getResolvedTickets()
  }
}

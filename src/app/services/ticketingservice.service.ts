import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketingserviceService {

  constructor() { }
  allTickets : any [] = [
    {
    "id" : 1,
    "TicketNumber" : "1DADTES234567",	
    "Subject" : "Dlect",	
    "Email" : "Hello thanks we are working on your issue",	
    "Status" : "Pending",	
    "Date" : "1/03/2023",	
    "Assignedby" : "Manager",	
    "Channel" : "Call",	
    "TypeofComplaint" : "Product related",	
    "Category" : "Fungus",	
    "CustomerName" : "Test", 	
    "CustomerMailId" : "customer@customer.com",	
    "ContactNo" : "82828282822",	
    "Location" : "Mumbai",
    "State" : "Maharashtra",	
    "ProductManufacture" : "Dlecta",	
    "ProductName" : "Chesse", 	
    "MFDDate" : "22/03/2023",	
    "BatchNo" : "123EDECTTS",	
    "QtyofSpoiledProduct" : "2",	
    "BoughtFrom" : "Zepto",	
    "ComplaintBrief" : "Fungus in cream",	
    "FirstResponseDate" : "2/03/2023",	
    "Responsetemplate" : "Response First",	
    "ComplaintSummary" : "Customer fungus email",
    "ResolutionSummary" : "Fungus Email",	
    "ActionTaken" : "Replacement Done",
    "Dateofclosure" : "5/03/2023",
    "ActionApprovedBy" : "Channel Head",	
    "ComplaintSharedwithfactory" : "Yes", 	
    "FactoryResolutionSummary" : "Pending",	
    "FactoryresolutionDate" : "Pending"
  },
    {
    "id" : 2,
    "TicketNumber" : "1DADTES234567",	
    "Subject" : "Dlect",	
    "Email" : "Hello thanks we are working on your issue",	
    "Status" : "Pending",	
    "Date" : "1/03/2023",	
    "Assignedby" : "Manager",	
    "Channel" : "Call",	
    "TypeofComplaint" : "Product related",	
    "Category" : "Fungus",	
    "CustomerName" : "Test", 	
    "CustomerMailId" : "customer@customer.com",	
    "ContactNo" : "82828282822",	
    "Location" : "Mumbai",
    "State" : "Maharashtra",	
    "ProductManufacture" : "Dlecta",	
    "ProductName" : "Chesse", 	
    "MFDDate" : "22/03/2023",	
    "BatchNo" : "123EDECTTS",	
    "QtyofSpoiledProduct" : "2",	
    "BoughtFrom" : "Zepto",	
    "ComplaintBrief" : "Fungus in cream",	
    "FirstResponseDate" : "2/03/2023",	
    "Responsetemplate" : "Response First",	
    "ComplaintSummary" : "Customer fungus email",
    "ResolutionSummary" : "Fungus Email",	
    "ActionTaken" : "Replacement Done",
    "Dateofclosure" : "5/03/2023",
    "ActionApprovedBy" : "Channel Head",	
    "ComplaintSharedwithfactory" : "Yes", 	
    "FactoryResolutionSummary" : "Pending",	
    "FactoryresolutionDate" : "Pending"
  },
    {
    "id" : 3,
    "TicketNumber" : "1DADTES234567",	
    "Subject" : "Dlect",	
    "Email" : "Hello thanks we are working on your issue",	
    "Status" : "Pending",	
    "Date" : "1/03/2023",	
    "Assignedby" : "Manager",	
    "Channel" : "Call",	
    "TypeofComplaint" : "Product related",	
    "Category" : "Fungus",	
    "CustomerName" : "Test", 	
    "CustomerMailId" : "customer@customer.com",	
    "ContactNo" : "82828282822",	
    "Location" : "Mumbai",
    "State" : "Maharashtra",	
    "ProductManufacture" : "Dlecta",	
    "ProductName" : "Chesse", 	
    "MFDDate" : "22/03/2023",	
    "BatchNo" : "123EDECTTS",	
    "QtyofSpoiledProduct" : "2",	
    "BoughtFrom" : "Zepto",	
    "ComplaintBrief" : "Fungus in cream",	
    "FirstResponseDate" : "2/03/2023",	
    "Responsetemplate" : "Response First",	
    "ComplaintSummary" : "Customer fungus email",
    "ResolutionSummary" : "Fungus Email",	
    "ActionTaken" : "Replacement Done",
    "Dateofclosure" : "5/03/2023",
    "ActionApprovedBy" : "Channel Head",	
    "ComplaintSharedwithfactory" : "Yes", 	
    "FactoryResolutionSummary" : "Pending",	
    "FactoryresolutionDate" : "Pending"
  },
      {
      "id" : 4,
      "TicketNumber" : "1DADTES234567",	
      "Subject" : "Dlect",	
      "Email" : "Hello thanks we are working on your issue",	
      "Status" : "Pending",	
      "Date" : "1/03/2023",	
      "Assignedby" : "Manager",	
      "Channel" : "Call",	
      "TypeofComplaint" : "Product related",	
      "Category" : "Fungus",	
      "CustomerName" : "Test", 	
      "CustomerMailId" : "customer@customer.com",	
      "ContactNo" : "82828282822",	
      "Location" : "Mumbai",
      "State" : "Maharashtra",	
      "ProductManufacture" : "Dlecta",	
      "ProductName" : "Chesse", 	
      "MFDDate" : "22/03/2023",	
      "BatchNo" : "123EDECTTS",	
      "QtyofSpoiledProduct" : "2",	
      "BoughtFrom" : "Zepto",	
      "ComplaintBrief" : "Fungus in cream",	
      "FirstResponseDate" : "2/03/2023",	
      "Responsetemplate" : "Response First",	
      "ComplaintSummary" : "Customer fungus email",
      "ResolutionSummary" : "Fungus Email",	
      "ActionTaken" : "Replacement Done",
      "Dateofclosure" : "5/03/2023",
      "ActionApprovedBy" : "Channel Head",	
      "ComplaintSharedwithfactory" : "Yes", 	
      "FactoryResolutionSummary" : "Pending",	
      "FactoryresolutionDate" : "Pending"
    },
]; 

  getactivetickets() : Observable<any>{
    return of(this.allTickets);
  }
  getResolvedTickets() : Observable<any>{
    let resolvedTickets = this.allTickets.filter((el)=>{
      return el.FactoryResolutionSummary == "Resolved";
    });
    return of(resolvedTickets)
  }
  getPendingTickets() : Observable<any>{
    let activeTickets = this.allTickets.filter((el)=>{
      return el.FactoryResolutionSummary == "Pending";
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
      TicketNumber : payload.ticketno,
      Subject : payload.subject,
      Email : 'Hello thanks we are working on your issue',
      Status : payload.ticketstatus,
      Date : payload.ticketdate,
      Assignedby : payload.assignedBy,
      Channel : payload.channel,
      TypeofComplaint : payload.typeOfComplaint,
      Category : payload.category,
      CustomerName : payload.customerName,
      CustomerMailId : payload.customerEmail,
      ContactNo : payload.contactNumber,
      Location : payload.customerLocation,
      State : payload.state,
      ProductManufacture : payload.productManufacture,
      ProductName : payload.productName,
      MFDDate : payload.mfdDate,
      BatchNo : payload.batchNumber,
      QtyofSpoiledProduct : payload.spoiledQuantity,
      BoughtFrom : payload.boughtFrom,
      ComplaintBrief : payload.complaintBrief,
      FirstResponseDate : payload.firstResponseDate,
      Responsetemplate : payload.responseTemplate,
      ComplaintSummary : payload.complaintSummary,
      ResolutionSummary : payload.resolutionSummary,
      ActionTaken : payload.actionTaken,
      Dateofclosure : payload.dateOfClosure,
      ActionApprovedBy : payload.actionApprovedBy,
      ComplaintSharedwithfactory : payload.complaintSharedWithFactory,
      FactoryResolutionSummary : payload.factoryResolutionSummary,
      FactoryresolutionDate : payload.factoryResolutionDate
      
    }
    this.allTickets.push(data);
    console.log(this.allTickets);
  }

  resolveTicket(payload : any) : Observable<any>{
    console.log(payload)
    let index = this.allTickets.findIndex((el)=>{
      return el.id == payload;
    })
    this.allTickets[index].FactoryResolutionSummary = "Resolved"
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

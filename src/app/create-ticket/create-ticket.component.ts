import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  customerName!: string;
  roomNumber!: string;
  issueType!: string;
  issueDescription!: string;
  status: string = 'Pending';
  isSubmitting: boolean = false;
  ticketForm!: FormGroup;
  constructor(private getdata : TicketingserviceService, private fb : FormBuilder){
    this.ticketForm = new FormGroup({
      ticketno : new FormControl(null,Validators.required),
      subject : new FormControl(null,Validators.required),
      ticketstatus : new FormControl(null,Validators.required),
      ticketdate : new FormControl(null,Validators.required),
      assignedBy : new FormControl(null,Validators.required),
      channel : new FormControl(null,Validators.required),
      typeOfComplaint : new FormControl(null,Validators.required),
      category : new FormControl(null,Validators.required),
      customerName : new FormControl(null,Validators.required),
      customerEmail : new FormControl(null,Validators.required),
      contactNumber : new FormControl(null,Validators.required),
      customerLocation : new FormControl(null,Validators.required),
      state : new FormControl(null,Validators.required),
      productManufacture : new FormControl(null,Validators.required),
      productName : new FormControl(null,Validators.required),
      mfdDate : new FormControl(null,Validators.required),
      batchNumber : new FormControl(null,Validators.required),
      spoiledQuantity : new FormControl(null,Validators.required),
      boughtFrom : new FormControl(null,Validators.required),
      complaintBrief : new FormControl(null,Validators.required),
      firstResponseDate : new FormControl(null,Validators.required),
      responseTemplate : new FormControl(null,Validators.required),
      complaintSummary : new FormControl(null,Validators.required),
      resolutionSummary : new FormControl(null,Validators.required),
      actionTaken : new FormControl(null,Validators.required),
      dateOfClosure : new FormControl(null,Validators.required),
      actionApprovedBy : new FormControl(null,Validators.required),
      complaintSharedWithFactory : new FormControl(null,Validators.required),
      factoryResolutionSummary : new FormControl(null,Validators.required),
      factoryResolutionDate : new FormControl(null,Validators.required),

    })
  }
  onSubmit() {
    this.isSubmitting = true;
    console.log(this.ticketForm.value);
    const ticket = {
      // customerName: this.ticketForm.get('name')!.value,
      // roomNumber: this.ticketForm.get('roomNo')!.value,
      // issueType: this.ticketForm.get('issue')!.value,
      // issueDescription: this.ticketForm.get('description')!.value,
      // status: this.status,
      // dateTime : new Date()
ticketno : this.ticketForm.get('ticketno')!.value,
subject : this.ticketForm.get('subject')!.value,
ticketstatus : this.ticketForm.get('ticketstatus')!.value,
ticketdate : this.ticketForm.get('ticketdate')!.value,
assignedBy : this.ticketForm.get('assignedBy')!.value,
channel : this.ticketForm.get('channel')!.value,
typeOfComplaint : this.ticketForm.get('typeOfComplaint')!.value,
category : this.ticketForm.get('category')!.value,
customerName : this.ticketForm.get('customerName')!.value,
customerEmail : this.ticketForm.get('customerEmail')!.value,
contactNumber : this.ticketForm.get('contactNumber')!.value,
customerLocation : this.ticketForm.get('customerLocation')!.value,
state : this.ticketForm.get('state')!.value,
productManufacture : this.ticketForm.get('productManufacture')!.value,
productName : this.ticketForm.get('productName')!.value,
mfdDate : this.ticketForm.get('mfdDate')!.value,
batchNumber : this.ticketForm.get('batchNumber')!.value,
spoiledQuantity : this.ticketForm.get('spoiledQuantity')!.value,
boughtFrom : this.ticketForm.get('boughtFrom')!.value,
complaintBrief : this.ticketForm.get('complaintBrief')!.value,
firstResponseDate : this.ticketForm.get('firstResponseDate')!.value,
responseTemplate : this.ticketForm.get('responseTemplate')!.value,
complaintSummary : this.ticketForm.get('complaintSummary')!.value,
resolutionSummary : this.ticketForm.get('resolutionSummary')!.value,
actionTaken : this.ticketForm.get('actionTaken')!.value,
dateOfClosure : this.ticketForm.get('dateOfClosure')!.value,
actionApprovedBy : this.ticketForm.get('actionApprovedBy')!.value,
complaintSharedWithFactory : this.ticketForm.get('complaintSharedWithFactory')!.value,
factoryResolutionSummary : this.ticketForm.get('factoryResolutionSummary')!.value,
factoryResolutionDate : this.ticketForm.get('factoryResolutionDate')!.value,

    };

    console.log('Submitting ticket:', ticket);
    
    this.getdata.addtickets(ticket);
    setTimeout(() => {
      this.clearForm()
    }, 1000);
    
  }
  clearForm(){
    // this.customerName = '';
    // this.roomNumber = '';
    // this.issueType = '';
    // this.issueDescription = '';
    // this.status = '';
    this.ticketForm.reset();
  }
}
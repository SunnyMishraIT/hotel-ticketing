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

      name : new FormControl(Validators.required),
      roomNo : new FormControl(Validators.required),
      issue : new FormControl(Validators.required),
      description : new FormControl(Validators.required),
    })
  }
  onSubmit() {
    this.isSubmitting = true;
    // console.log(this.ticketForm.value);
    const ticket = {
      customerName: this.ticketForm.get('name')!.value,
      roomNumber: this.ticketForm.get('roomNo')!.value,
      issueType: this.ticketForm.get('issue')!.value,
      issueDescription: this.ticketForm.get('description')!.value,
      status: this.status,
      dateTime : new Date()
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
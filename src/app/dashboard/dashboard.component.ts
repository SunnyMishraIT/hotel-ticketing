import { Component } from '@angular/core';
import { TicketingserviceService } from '../services/ticketingservice.service';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
allTickets : any [] = [];
totalTickets : Number = 0;
resolvedTickets : Number = 0;
pendingTickets : Number = 0;

// CHARTS
public barChartLegend = true;
public barChartPlugins = [];
public barChartData: ChartConfiguration<'bar'>['data'] = {
  labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ]
};

public barChartOptions: ChartConfiguration<'bar'>['options'] = {
  responsive: false,
};


constructor(private getdata : TicketingserviceService){
this.getdata.getactivetickets().subscribe((res)=>{
  this.allTickets = res;
  this.totalTickets = res.length;
})
this.getdata.getPendingTickets().subscribe((res)=>{
  this.pendingTickets = res.length;
})
this.getdata.getResolvedTickets().subscribe((res)=>{
  this.resolvedTickets = res.length;
})
}
}

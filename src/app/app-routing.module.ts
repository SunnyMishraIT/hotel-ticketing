import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ManageTicketComponent } from './manage-ticket/manage-ticket.component';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { ResolvedTicketsComponent } from './resolved-tickets/resolved-tickets.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent
  },
  {
    path : 'alltickets',
    component : HomeComponent
  },
  {
    path : 'create',
    component : CreateTicketComponent
  },
  {
    path : 'edit',
    component : EditTicketComponent
  },
  {
    path : 'manage',
    component : ManageTicketComponent
  },
  {
    path : 'aboutus',
    component : AboutusComponent
  },
  {
    path : 'contactus',
    component : ContactusComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'faqs',
    component : FaqsComponent
  },
  {
    path : "pending",
    component : PendingTicketsComponent
  },
  {
    path : "resolved",
    component : ResolvedTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

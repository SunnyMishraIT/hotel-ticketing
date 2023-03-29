import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ManageTicketComponent } from './manage-ticket/manage-ticket.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { ResolvedTicketsComponent } from './resolved-tickets/resolved-tickets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateTicketComponent,
    ManageTicketComponent,
    ProfileComponent,
    FaqsComponent,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    PendingTicketsComponent,
    ResolvedTicketsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

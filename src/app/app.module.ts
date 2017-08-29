import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SlickModule } from 'ngx-slick';
import { MomentModule } from 'angular2-moment';

import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TeamComponent } from './team/team.component';
import { TrainingComponent } from './training/training.component';
import { EmploymentComponent } from './employment/employment.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ThebaldbarberComponent } from './thebaldbarber/thebaldbarber.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AppointmentsComponent,
    TeamComponent,
    TrainingComponent,
    EmploymentComponent,
    ServicesComponent,
    ProductsComponent,
    GalleryComponent,
    ThebaldbarberComponent,
    ContactComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SlickModule.forRoot(),
    MomentModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

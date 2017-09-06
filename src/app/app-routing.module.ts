import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmploymentComponent } from './employment/employment.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ThebaldbarberComponent } from './thebaldbarber/thebaldbarber.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'employment',
    component: EmploymentComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'thebaldbarber',
    component: ThebaldbarberComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

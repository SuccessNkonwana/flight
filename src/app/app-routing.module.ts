import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',component:FlightComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

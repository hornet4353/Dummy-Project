import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { DispatchlsitComponent } from './dispatchlsit/dispatchlsit.component';
import { FogotpasswordComponent } from './fogotpassword/fogotpassword.component';
import { HomeComponent } from './home/home.component';
import { InsertPartComponent } from './insert-part/insert-part.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './loginauth/authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

const routes: Routes = 
[
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationService]},
  {path: 'dispatch-part', component: DispatchComponent, canActivate: [AuthenticationService]},
  {path: 'order-part', component: OrderComponent, canActivate: [AuthenticationService]},
  {path: 'partslist', component: PartsListComponent, canActivate: [AuthenticationService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'insert-part', component: InsertPartComponent, canActivate: [AuthenticationService]},
  {path: 'contactus', component: ContactusComponent},
  {path: 'dispatch-part-list', component: DispatchlsitComponent, canActivate: [AuthenticationService]},
  {path: 'order-part-list', component: OrderlistComponent, canActivate: [AuthenticationService]},
  {path: 'registerlink', component: UserregistrationComponent},
  {path: 'reset-password', component: FogotpasswordComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

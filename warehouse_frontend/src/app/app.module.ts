import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InsertPartComponent } from './insert-part/insert-part.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { OrderComponent } from './order/order.component';
import { DispatchlsitComponent } from './dispatchlsit/dispatchlsit.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FogotpasswordComponent } from './fogotpassword/fogotpassword.component'

@NgModule({
  declarations: [
    AppComponent,
    PartsListComponent,
    HomeComponent,
    LoginComponent,
    InsertPartComponent,
    LogoutComponent,
    ContactusComponent,
    DispatchComponent,
    OrderComponent,
    DispatchlsitComponent,
    OrderlistComponent,
    UserregistrationComponent,
    FogotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminComponent } from './admin/admin.component';
import { ChargeFormComponent } from './charge-form/charge-form.component';
import { EarningsReportComponent } from './earnings-report/earnings-report.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CashoutModalComponent } from './cashout-modal/cashout-modal.component';
import { ConfirmChargeModalComponent } from './confirm-charge-modal/confirm-charge-modal.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CustomerBillComponent } from './customer-bill/customer-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserLoginComponent,
    AdminComponent,
    ChargeFormComponent,
    EarningsReportComponent,
    ServiceListComponent,
    UserAccountComponent,
    CashoutModalComponent,
    ConfirmChargeModalComponent,
    EditProfileComponent,
    CustomerBillComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    CommonModule
    
    
  ],
  exports: [MatIconModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

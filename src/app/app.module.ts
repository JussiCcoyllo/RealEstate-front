import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyService } from './property.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { TenantComponent } from './tenant/tenant.component';
import { SupplierComponent } from './supplier/supplier.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    RegisterComponent,
    AdminComponent,
    TenantComponent,
    SupplierComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

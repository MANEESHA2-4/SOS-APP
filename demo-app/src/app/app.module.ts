import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { FaqComponent } from './faq/faq.component';
import { RemoveComponent } from './remove/remove.component';
import { TermsComponent } from './terms/terms.component';
import { BlogComponent } from './blog/blog.component';
import { FeatureComponent } from './feature/feature.component';

import { AdminComponent } from './admin/admin.component';
import { QueryComponent } from './query/query.component';
import { ViewqueryComponent } from './viewquery/viewquery.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { ReportformComponent } from './reportform/reportform.component';
import { ReportdetailsComponent } from './reportdetails/reportdetails.component';
// import { HttpCallInterceptorService } from './httpcallinterceptorservice.service.spec';
import { ReplyComponent } from './reply/reply.component';
import { ReceiveComponent } from './receive/receive.component';
import { NewuserComponent } from './newuser/newuser.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent,
   
    DashboardComponent,
    AddComponent,
    FaqComponent,
    RemoveComponent,
    TermsComponent,
    BlogComponent,
    FeatureComponent,
    
    AdminComponent,
    QueryComponent,
    ViewqueryComponent,
    DashboardAdminComponent,
    ContactUsComponent,
    ContactdetailsComponent,
    ReportformComponent,
    ReportdetailsComponent,
    ReplyComponent,
    ReceiveComponent,
    NewuserComponent,
    CardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  // providers: [ {provide: HTTP_INTERCEPTORS,
    // useClass: HttpCallInterceptorService,
    // multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

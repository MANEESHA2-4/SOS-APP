import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { RemoveComponent } from './remove/remove.component';
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
import { ReplyComponent } from './reply/reply.component';
import { ReceiveComponent } from './receive/receive.component';
import { NewuserComponent } from './newuser/newuser.component';
import { CardComponent } from './card/card.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent },
  {path:'about',component:AboutComponent},
  // {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:DashboardComponent},
    
    {path:'query',component:QueryComponent},
    {path:'contact',component:ContactComponent},
    {path:'reportform',component:ReportformComponent},
    {path:'add',component:AddComponent},
    {path:'terms',component:TermsComponent},
  {path:'remove',component:RemoveComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'card',component:CardComponent},
  {path:'receive',component:ReceiveComponent},
  ]
},
  // {path:'add',component:AddComponent},
  {path:'faq',component:FaqComponent},
  // {path:'terms',component:TermsComponent},
  // {path:'remove',component:RemoveComponent},
  {path:'blog',component:BlogComponent},
  {path:'feature',component:FeatureComponent},
  
  {path:'admin',component:AdminComponent},
  // {path:'query',component:QueryComponent},
  {path:'viewquery',component:ViewqueryComponent,
    children:[
      {path:'reply/:name',component:ReplyComponent}
    ]
},
  {path:'dashboard-admin',component:DashboardAdminComponent},
  // {path:'contact-us',component:ContactUsComponent},
  {path:'contactdetails',component:ContactdetailsComponent},
  // {path:'reportform',component:ReportformComponent},
  {path:'reportdetails',component:ReportdetailsComponent,
  children:[
    {path:'reply/:name',component:ReplyComponent}
  ]},
  {path:'reply/:name',component:ReplyComponent},
  // {path:'receive',component:ReceiveComponent},
  {path:'newuser',component:NewuserComponent},
  // {path:'card',component:CardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
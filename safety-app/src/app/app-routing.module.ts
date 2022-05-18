import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'instructions',component:InstructionsComponent},
  {path:'about',component:AboutComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'contact',component:ContactComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'navigation',component:NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

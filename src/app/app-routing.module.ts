import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthService } from "./auth/auth.service";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
  {path:'videoSearch',component:SearchContainerComponent},
  {path:'forgot-password',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }

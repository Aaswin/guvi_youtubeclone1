import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

var firebaseConfig = {
  apiKey: "AIzaSyACdk8xpgS-PemeqtyRDkCLZ-F_lBEr34M",
  authDomain: "clone3-8be7e.firebaseapp.com",
  projectId: "clone3-8be7e",
  storageBucket: "clone3-8be7e.appspot.com",
  messagingSenderId: "46907737452",
  appId: "1:46907737452:web:191364d6b49591850d1f49",
  measurementId: "G-3DJCZWL08X"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ForgotpasswordComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './pages/products/all/all.component';
import { CatproComponent } from './pages/products/catpro/catpro.component';
import { SingleproComponent } from './pages/products/singlepro/singlepro.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthInterceptor } from './auth.interceptor';
import { FavproComponent } from './pages/products/favpro/favpro.component';
import { CartComponent } from './pages/products/cart/cart.component';
import { AddprodctComponent } from './pages/products/addprodct/addprodct.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CatproComponent,
    SingleproComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    FavproComponent,
    CartComponent,
    AddprodctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

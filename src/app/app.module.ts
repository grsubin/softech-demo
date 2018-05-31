import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DemoService } from 'src/app/services/demo.service';
import { HomeComponent } from 'src/app/home/home.component';
import { HttpService } from 'src/app/services/http.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from 'src/app/services/gallery.service';
import { FormValidationComponent } from 'src/app/form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AllProductsComponent,
    HomeComponent,
    GalleryComponent,
    FormValidationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [DemoService,HttpService, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AllProductsComponent } from 'src/app/all-products/all-products.component';
import { AppComponent } from 'src/app/app.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { HomeComponent } from 'src/app/home/home.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { FormValidationComponent } from 'src/app/form-validation/form-validation.component';

const routes: Routes = [

  {
    path:'products', component: AllProductsComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'gallery', component: GalleryComponent
  },
  {
    path:'form-valid', component: FormValidationComponent
  },
  {
    path:'', 
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

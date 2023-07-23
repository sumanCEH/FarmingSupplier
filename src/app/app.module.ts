import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService } from './auth.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { UpdateComplaintComponent } from './update-complaint/update-complaint.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
// import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
  { path: 'farmer', component: FarmerDashboardComponent, canActivate: [AuthGuard], data : {role: 'ROLE_FARMER'} },
  { path: 'supplier', component: SupplierDashboardComponent, canActivate: [AuthGuard], data : {role: 'ROLE_SUPPLIER'} },
  { path: 'view-complaint', component: ViewComplaintComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
  { path: 'update-complaint', component: UpdateComplaintComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'edit-profile', component: EditprofileComponent},
  {path: 'edit-profile2', component: ProfileeditComponent},
  { path: '**', redirectTo: '/login' },
  { path: 'view-complaint', component: ViewComplaintComponent },
  { path: 'update-complaint', component: UpdateComplaintComponent, canActivate: [AuthGuard], data : {role: 'ROLE_ADMIN'} },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,
    AdminDashboardComponent,
    SupplierDashboardComponent,
    FarmerDashboardComponent,
    ViewComplaintComponent,
    UpdateComplaintComponent,
    EditprofileComponent,
    ProfileeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

     // Add ReactiveFormsModule to the imports array
  ],

  // exports: [RouterModule],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }




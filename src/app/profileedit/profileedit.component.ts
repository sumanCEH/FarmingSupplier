import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { User } from '../user';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {

  email: any;
  user: User = new User();
  constructor(private router:Router, private farmerservice: FarmerService) { }

  ngOnInit(): void {
this.userdetails();
  }

  userdetails(){
    this.email = localStorage.getItem("useremail");
    this.farmerservice.getFarmerDetails(this.email).subscribe((data: any)=>{
      this.user =data;
    })
  }

  back(){
this.router.navigateByUrl("/farmer");
  }
  save(){


  }

  onsubmit(){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { User } from '../user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  userEmail: any;
  user: User = new User();
  constructor(private router: Router, private farmerservice:FarmerService) { }

  ngOnInit(): void {
    this.getfarmerdeatils();
  }


  getfarmerdeatils(){
    this.userEmail = localStorage.getItem("useremail");
    
    this.farmerservice.getFarmerDetails(this.userEmail).subscribe((data: any)=>{
      this.user=data;

    })
  }

  back(){
this.router.navigateByUrl("/farmer");
  }

  edit(){
    this.router.navigateByUrl("/edit-profile2");
  }

}

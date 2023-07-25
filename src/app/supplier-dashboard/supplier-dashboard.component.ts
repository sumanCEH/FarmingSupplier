import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css']
})
export class SupplierDashboardComponent implements OnInit {


  id: number;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getuserDetails();
  }

  getuserDetails(){
    this.userService.getsupplier().subscribe((data: any)=>{
// console.log(data);
this.id = data.id;
console.log(this.id);
localStorage.setItem('id', this.id.toString());
    })
  }

}

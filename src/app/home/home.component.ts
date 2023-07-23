// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // You can add any necessary logic or data here

  constructor(private router: Router) {}

  // Method to handle form submission
  onSubmit() {
    // Your form submission logic here (if needed)

    // Navigate to the signup page
    this.router.navigate(['/signup']);
  }
}

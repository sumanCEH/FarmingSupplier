import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';
import { Updatestatus } from '../updatestatus';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {

  complaints: Complaint[]; // Replace 'any' with the actual type of your complaint object

  updatestatus: Updatestatus = new Updatestatus();
  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.fetchComplaints();
  }

  fetchComplaints() {
    // this.complaintService.getAllComplaints().subscribe(
    //   (data: any) => {
    //     this.complaints = data;
    //     console.log(this.complaints);
    //   },
    //   // (error) => {
    //   //   console.error('Error fetching complaints:', error);
    //   // }
    // );

    this.complaintService.getAllComplaints().subscribe((data:any)=>{
      this.complaints = data;
      console.log(this.complaints);
    })
  }


  updateStatus(complaintId: number) {
    const complaint = this.complaints.find(c => c.id === complaintId);

    this.updatestatus.id = complaintId;
    this.updatestatus.status = complaint?.newStatus;
    console.log(this.updatestatus);
    this.complaintService.updateComplaintStatus(this.updatestatus).subscribe((data:any)=>{

    })
    // if (complaint && typeof complaint.newStatus === 'string') {
    //   this.complaintService.updateComplaintStatus(
    //     complaintId,
    //     complaint.newStatus!,
    //     () => {
    //       complaint.status = complaint.newStatus!; // Update the status in the list
    //     },
    //     (error: any) => {
    //       console.error('Error updating status:', error);
    //     }
    //   );
    // }

}

}
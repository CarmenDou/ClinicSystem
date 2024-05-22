import { Component, OnInit } from '@angular/core';
import { Clinician } from '../clinician';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
  clinician:Clinician = new Clinician();

  constructor(private loginuserService: LoginuserService, private router: Router){}

  onSubmit(){
    console.log(this.clinician);
    this.loginuserService.loginUser(this.clinician).subscribe(data =>{
      console.log(data);
      alert("Login Successfully");
      this.goToPatientList();
    },error=> alert("Please enter correct Username and Password!"));
  }

  goToPatientList() {
    this.router.navigate(['/patients']);
  }

  ngOnInit(): void {
    
  }
}

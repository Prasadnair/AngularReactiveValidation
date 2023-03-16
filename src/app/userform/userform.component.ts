import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  userform: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')   
  });

  submitted = false;
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.userform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.userform.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.userform.invalid) {
      return;
    }

    console.log(JSON.stringify(this.userform.value, null, 2));
  }
 
}




import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person-form',
  imports: [MatFormFieldModule, 
    MatInputModule,
    FormsModule, 
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule
    // JsonPipe
  ],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css',
})
export class PersonForm {
 personForm!: FormGroup;
  details: any;

  constructor(private fb: FormBuilder, private personService: Person, private router: Router) {}

    name = '';
    address = '';
    city = '';
    contact = '';

    ngOnInit() {

      const keyName = 'Section';
      const obj = {
        [keyName] : [],
        keyName
      };
      console.log(obj);

      const user ={
        name : 'yog',
        age : 25
      }

      const {name, age} = user


      this.personForm = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        contact: ['', Validators.required]
      })
    }

   

    onSubmit() {
      this.createObj()
    }

    createObj(){
      const obj = {
        "name": this.personForm?.value?.name,
        "address": this.personForm?.value?.address,
        "city": this.personForm?.value?.city,
        "contact": this.personForm?.value?.contact
      }
      this.saveData(obj)
    }

    saveData(data: any) {
      this.personService.addEmployee(data).subscribe({
        next: (res) => {
          alert("Details saved successfully")
          console.log("Details saved successfully")
          this.personForm.reset();
          this.router.navigate(['/viewDetails'], { state: this.personForm?.value });
        },
        error: (err) => {
          alert('Error adding employee')
          console.error('Error adding employee:', err);
        },
      })
    }

    routeToView(){
      this.router.navigate(['/viewDetails']);
    }

   

}

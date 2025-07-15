import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { Person } from '../person-form/person';


@Component({
  selector: 'app-view-details',
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule],
  templateUrl: './view-details.html',
  styleUrl: './view-details.css'
})
export class ViewDetails {
  user: any;
  details: any;
 constructor(private router: Router,  private personService: Person) {
    // Read data passed via router state
    const nav = this.router.getCurrentNavigation();
    this.user = nav?.extras?.state;
  }

  ngOnInit(){
    this.fetchDetails()
  }

  fetchDetails() {
      this.personService.getAllEmployees().subscribe({
        next: (res) => {
          this.details = res
          console.log()
        },
        error: (err) => {
          alert("something broked")
        }
      })
    }

    removeFromUi(id: number) {
      for(let i = 0; i<this.details.length; i++){
        if(this.details[i]?.id == id){
          this.details.splice(i, 1)
        }
      }

    }

     removeEmployee(userid: number){
      const id = {
       "id": userid 
      }
      this.personService.removeEmployee(id).subscribe({
        next: (res) => {
          this.removeFromUi(userid)
          alert("deleted successfully")
        },
        error: (err) => {
          alert("something broked")
        }
      })
    }

    goToRegister(){
      this.router.navigate(['/registerDetails'])
    }
}

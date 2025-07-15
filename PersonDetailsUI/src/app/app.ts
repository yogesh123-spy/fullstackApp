import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonForm } from './person-form/person-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PersonDetails';
}

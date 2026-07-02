import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mission-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './mission-page.component.html',
  styleUrl: './mission-page.component.css'
})
export class MissionPageComponent {

}

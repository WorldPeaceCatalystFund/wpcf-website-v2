import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterLink, RouterLinkActive}   from '@angular/router';

@Component({
    selector: 'app-homepage',
    imports: [RouterLink, RouterLinkActive],
    standalone: true,
    templateUrl: './homepage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

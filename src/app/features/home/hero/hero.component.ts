import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {
    private dataService = inject(ProfileDataService);
    profile = this.dataService.profile;
}

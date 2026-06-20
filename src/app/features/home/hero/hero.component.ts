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

    get yearsOfExperience(): string {
        const startDate = new Date('2024-04-01');
        const currentDate = new Date();
        const diffTime = currentDate.getTime() - startDate.getTime();
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        return diffYears.toFixed(1) + ' Years';
    }
}

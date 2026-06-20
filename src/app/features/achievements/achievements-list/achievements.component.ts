import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
    selector: 'app-achievements',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
    private dataService = inject(ProfileDataService);
    certifications = this.dataService.certifications;
    activities = this.dataService.activities;
}

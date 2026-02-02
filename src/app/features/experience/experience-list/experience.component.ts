import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { TimelineItemComponent } from '../../../shared/components/timeline-item/timeline-item.component';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent, TimelineItemComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    private dataService = inject(ProfileDataService);
    experiences = this.dataService.experiences;
    certifications = this.dataService.certifications;
    activities = this.dataService.activities;
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, SectionHeaderComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {
    private dataService = inject(ProfileDataService);
    skills = this.dataService.skills;
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../core/services/profile-data.service';

@Component({
    selector: 'app-cv',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.css'
})
export class CvComponent {
    private dataService = inject(ProfileDataService);

    profile = this.dataService.profile;
    experiences = this.dataService.experiences;
    education = this.dataService.education;
    skills = this.dataService.skills;
    projects = this.dataService.projects.slice(0, 6); // Limit to top 6 projects for 2-page fit
    research = this.dataService.research;
    certifications = this.dataService.certifications;

    printCv() {
        const originalTitle = document.title;
        document.title = ''; // Temporarily clear title to remove it from print header
        window.print();
        document.title = originalTitle;
    }
}

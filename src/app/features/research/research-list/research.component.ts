import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../../core/services/profile-data.service';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ResearchComponent {
  private dataService = inject(ProfileDataService);
  research = this.dataService.research;
}

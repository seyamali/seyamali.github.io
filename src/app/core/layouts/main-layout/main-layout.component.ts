import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../../features/home/hero/hero.component';
import { ExperienceComponent } from '../../../features/experience/experience-list/experience.component';
import { SkillsComponent } from '../../../features/skills/skills-grid/skills.component';
import { ResearchComponent } from '../../../features/research/research-list/research.component';
import { ProjectsComponent } from '../../../features/projects/projects-grid/projects.component';
import { EducationComponent } from '../../../features/education/education-list/education.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ResearchComponent,
    ProjectsComponent,
    EducationComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent { }

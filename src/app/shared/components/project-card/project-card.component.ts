import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Project } from '../../models/portfolio.model';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    @Input() project!: Project;

    getIconByType(type: string): string {
        switch (type) {
            case 'android': return 'fab fa-android';
            case 'web': return 'fas fa-globe';
            case 'c': return 'fas fa-code';
            case 'java': return 'fab fa-java';
            case 'graphics': return 'fas fa-paint-brush';
            case 'flutter': return 'fas fa-mobile-alt';
            case 'npm': return 'fab fa-npm';
            default: return 'fas fa-laptop-code';
        }
    }

    getLinkLabel(link: string, type: string): string {
        if (!link) return '';
        if (link.includes('github.com')) return 'Source';
        if (type === 'npm') return 'NPM';
        return 'Live Link';
    }

    getToolChips(tools: string): string[] {
        if (!tools) return [];
        return tools.split(',').map(t => t.trim());
    }
}

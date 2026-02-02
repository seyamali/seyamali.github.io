import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-section-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './section-header.component.html',
    styleUrl: './section-header.component.css',
    encapsulation: ViewEncapsulation.None
})
export class SectionHeaderComponent {
    @Input() title: string = '';
    @Input() subtitle?: string;

    private sanitizer = inject(DomSanitizer);

    get safeSubtitle(): SafeHtml | undefined {
        return this.subtitle ? this.sanitizer.bypassSecurityTrustHtml(this.subtitle) : undefined;
    }
}

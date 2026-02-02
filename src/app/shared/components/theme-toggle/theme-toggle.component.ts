import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button 
      (click)="themeService.toggleTheme()"
      class="p-2.5 rounded-xl transition-all duration-300 glass-effect hover:bg-primary/10 group"
      [attr.aria-label]="'Toggle Theme'"
    >
      <div class="relative w-6 h-6">
        <!-- Sun Icon -->
        <i class="fas fa-sun absolute inset-0 transition-all duration-500 scale-100 opacity-100 dark:scale-0 dark:opacity-0 text-yellow-500"></i>
        <!-- Moon Icon -->
        <i class="fas fa-moon absolute inset-0 transition-all duration-500 scale-0 opacity-0 dark:scale-100 dark:opacity-100 text-blue-400"></i>
      </div>
    </button>
  `,
    styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class ThemeToggleComponent {
    themeService = inject(ThemeService);
}

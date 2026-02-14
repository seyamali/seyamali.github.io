import { Injectable, Inject, PLATFORM_ID, RendererFactory2, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;
    private themeSubject = new BehaviorSubject<Theme>('light');
    theme$ = this.themeSubject.asObservable();

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        rendererFactory: RendererFactory2
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.initializeTheme();
    }

    private initializeTheme(): void {
        if (isPlatformBrowser(this.platformId)) {
            const savedTheme = localStorage.getItem('app-theme') as Theme;
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            const initialTheme = savedTheme || 'light';
            this.setTheme(initialTheme);
        }
    }

    toggleTheme(): void {
        const nextTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
        this.setTheme(nextTheme);
    }

    setTheme(theme: Theme): void {
        this.themeSubject.next(theme);

        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('app-theme', theme);

            if (theme === 'dark') {
                this.renderer.addClass(document.documentElement, 'dark');
            } else {
                this.renderer.removeClass(document.documentElement, 'dark');
            }
        }
    }

    get currentTheme(): Theme {
        return this.themeSubject.value;
    }
}

import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { CvComponent } from './features/cv/cv.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },
    { path: 'cv', component: CvComponent },
    { path: '**', redirectTo: '' }
];

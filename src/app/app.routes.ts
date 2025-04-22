import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

export const routes: Routes = [
    {
        path: '',
        component: HeroSectionComponent,
    },
    {
        path: 'view',
        component: BookViewComponent,
    },
    {
        path: 'create',
        component: BookComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

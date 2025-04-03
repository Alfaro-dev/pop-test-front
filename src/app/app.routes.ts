import { Routes } from '@angular/router';

import { ProductsModule } from './features/products/products.module';

import { SplashComponent } from './pages/splash/splash.component';

import { splashGuard } from './guards/splash.guard';

export const routes: Routes = [
    {
        path: 'splash', 
        loadComponent: () => SplashComponent,
    },
    {
        path: 'products',
        loadChildren: () => ProductsModule,
        canActivate: [splashGuard],
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    }
];

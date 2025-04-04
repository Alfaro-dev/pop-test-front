import { Routes } from '@angular/router';

import { ProductsModule } from './features/products/products.module';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => ProductsModule,
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    }
];

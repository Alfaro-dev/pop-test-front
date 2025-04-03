import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing shared components, directives, and pipes
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ProductFeatureComponent } from './components/product-feature/product-feature.component';
import { CardLargeComponent } from './components/card-large/card-large.component';

const SHARED_COMPONENTS = [
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    SmallCardComponent,
    ProductFeatureComponent,
    CardLargeComponent,
];

// This module is used to declare and export shared components, directives, and pipes
@NgModule({
    declarations: SHARED_COMPONENTS,
    imports: [CommonModule],
    exports: SHARED_COMPONENTS
})
export class SharedModule {}
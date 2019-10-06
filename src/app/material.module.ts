import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { MatCardModule } from '@angular/material';

@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatCardModule],
    exports: [MatBadgeModule, MatButtonModule, MatCardModule]
})


export class MaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from './search.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
    declarations: [DashboardComponent, SearchPipe],
    imports: [
        CommonModule, WidgetsModule, FormsModule,MatProgressSpinnerModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),
      
        
    ]
})
export class DashboardModule {

}

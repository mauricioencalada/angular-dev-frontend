import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../../shared/auth.guard';

export const DashboardRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];

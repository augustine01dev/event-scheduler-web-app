import { Routes } from '@angular/router';
import { SchedulerEventComponent } from '../core/components/scheduler-event/scheduler-event.component';

export const routes: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  { path: 'schedule', component: SchedulerEventComponent },
];

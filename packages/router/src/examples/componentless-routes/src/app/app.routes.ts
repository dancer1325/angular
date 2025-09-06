import { Routes } from '@angular/router';
import {MainChildComponent} from './main-child/main-child.component';
import {AuxChildComponent} from './aux-child/aux-child.component';

export const routes: Routes = [
    {
       path: 'parent/:id',
       children: [
        { path: '', component: MainChildComponent },
        { path: '', component: AuxChildComponent, outlet: 'aux' }
      ]
    }
];

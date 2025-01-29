import {Component} from '@angular/core';
import {ReactiveComponent} from './reactive/reactive.component';
import {TemplateComponent} from './template/template.component';
import {FormgroupFormarrayComponent} from './formgroup-formarray/formgroup-formarray.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  imports: [ReactiveComponent, TemplateComponent, FormgroupFormarrayComponent],
})
export class AppComponent {
  title = 'final';
}

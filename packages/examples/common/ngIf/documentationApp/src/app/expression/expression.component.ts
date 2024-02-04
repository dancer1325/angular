import { Component } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent {
  changeTemplateToDisplay: boolean = false;
  templateToDisplayAlwaysElse = null;
  expressionStored: boolean = true;

  onClickFirstButton() {
    this.changeTemplateToDisplay = !this.changeTemplateToDisplay;
  }


}

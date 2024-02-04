import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit{
  justElse: boolean = true;
  justThen: boolean = true;
  show: boolean = true;
  thenReferencedInTheComponent: TemplateRef<any> | null = null;

  @ViewChild('thenReferenced', {static:true})
  thenReferencedBlock: TemplateRef<any> | null = null;

  onClickJustElse() {
    this.justElse = !this.justElse;
  }

  onClickJustThen() {
    this.justThen = !this.justThen;
  }

  ngOnInit(): void {
    this.thenReferencedInTheComponent = this.thenReferencedBlock;
  }
}

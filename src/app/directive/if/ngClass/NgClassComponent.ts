import { Component } from '@angular/core';

@Component({
  selector: 'ngClass-directive',
  templateUrl: './ng-class.component.html',
  })

  export class NgClassComponent {
  
    public isSelected:boolean = true

  onClick(){
    this.isSelected = !this.isSelected
  }
}

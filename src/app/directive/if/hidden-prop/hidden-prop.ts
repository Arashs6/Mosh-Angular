import { Component } from '@angular/core';

@Component({
  selector: 'app-hidden-directive',
  templateUrl: './hidden-directive.component.html',
  })

  export class HiddenComponent {
  public courses: Array<number> = [0]
}

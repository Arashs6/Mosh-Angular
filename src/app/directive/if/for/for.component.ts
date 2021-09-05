import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  })

  export class ForComponent {
  public courses: Array<Course> = [
    {id: 1,name:"Android"},
    {id: 2,name:"Web"},
    {id: 3,name:"Ios"}
 ]

}
export class Course{
  public id!: number;
  public name!: string;
 }

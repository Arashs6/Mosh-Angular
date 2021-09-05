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

  onAdd(){
    this.courses.push({id:4,name:"Advance Web"})
  }

  onDelete(course:Course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1)
  }

}
export class Course{
  public id!: number;
  public name!: string;
 }

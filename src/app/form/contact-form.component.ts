import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-contactForm',
  templateUrl: './contact-form.component.html',
  })

  export class ContactFormComponent {
    
public methods =["Email","PhoneNumber"
]

    log(x : any){
      console.log(x);
      
    }
    
    
}

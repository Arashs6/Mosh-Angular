import { ContactFormComponent } from './form/contact-form.component';
import { ForComponent } from './directive/if/for/for.component';
import { SwitchComponent } from './directive/if/switch/switch.component';
import { HiddenComponent } from './directive/if/hidden-prop/hidden-prop';
import { IfComponent } from './directive/if/if-directive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { NgClassComponent } from './directive/if/ngClass/NgClassComponent';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    IfComponent,
    HiddenComponent,
    SwitchComponent,
    ForComponent,
    ContactFormComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

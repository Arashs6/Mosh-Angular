import { ContactFormComponent } from './form/contact-form.component';
import { ForComponent } from './directive/if/for/for.component';
import { SwitchComponent } from './directive/if/switch/switch.component';
import { HiddenComponent } from './directive/if/hidden-prop/hidden-prop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { NgClassComponent } from './directive/if/ngClass/NgClassComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-format/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    HiddenComponent,
    SwitchComponent,
    ForComponent,
    ContactFormComponent,
    NgClassComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

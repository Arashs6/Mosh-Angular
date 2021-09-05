import { ForComponent } from './directive/if/for/for.component';
import { SwitchComponent } from './directive/if/switch/switch.component';
import { HiddenComponent } from './directive/if/hidden-prop/hidden-prop';
import { IfComponent } from './directive/if/if-directive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    HiddenComponent,
    SwitchComponent,
    ForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

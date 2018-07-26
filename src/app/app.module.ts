import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FactsComponent } from './facts/facts.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from  '@angular/forms';

const routes:Routes=[
  {path:"",component:FactsComponent}
]
  


@NgModule({
  declarations: [
    AppComponent,
    FactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

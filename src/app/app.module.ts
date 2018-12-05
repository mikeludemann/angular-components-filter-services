/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';

/* Services */
import { CalculateService } from './services/calculate.service';

/* Pipes (Module) */
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipesModule
  ],
  providers: [
    CalculateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

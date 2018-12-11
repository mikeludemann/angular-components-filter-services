/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Services */
import { CalculateService } from './services/calculate.service';

/* Pipes (Module) */
import { PipesModule } from './pipes/pipes.module';

/* Components */
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { BoldComponent } from './components/tags/bold/bold.component';
import { ItalicComponent } from './components/tags/italic/italic.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    BoldComponent,
    ItalicComponent
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

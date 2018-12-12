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
import { ImageComponent } from './components/assets/image/image.component';
import { MapComponent } from './components/assets/map/map.component';
import { BoldComponent } from './components/tags/bold/bold.component';
import { ItalicComponent } from './components/tags/italic/italic.component';
import { StrongComponent } from './components/tags/strong/strong.component';
import { EmphrasizeComponent } from './components/tags/emphrasize/emphrasize.component';
import { UpComponent } from './components/tags/up/up.component';
import { DownComponent } from './components/tags/down/down.component';
import { InsertedComponent } from './components/tags/inserted/inserted.component';
import { MarkedComponent } from './components/tags/marked/marked.component';
import { DeleteComponent } from './components/tags/delete/delete.component';
import { SmallerComponent } from './components/tags/smaller/smaller.component';
import { BiggerComponent } from './components/tags/bigger/bigger.component';
import { CodingComponent } from './components/tags/coding/coding.component';
import { VariableComponent } from './components/tags/variable/variable.component';
import { BreakComponent } from './components/tags/break/break.component';
import { AcronymousComponent } from './components/tags/acronymous/acronymous.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    MapComponent,
    StrongComponent,
    EmphrasizeComponent,
    UpComponent,
    DownComponent,
    BoldComponent,
    ItalicComponent,
    InsertedComponent,
    MarkedComponent,
    DeleteComponent,
    SmallerComponent,
    CodingComponent,
    VariableComponent,
    BreakComponent,
    AcronymousComponent
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

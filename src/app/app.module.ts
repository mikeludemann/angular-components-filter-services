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
import { AbbreviationComponent } from './components/tags/abbreviation/abbreviation.component';
import { BlockquoteComponent } from './components/tags/blockquote/blockquote.component';
import { AddressComponent } from './components/tags/address/address.component';
import { KeyboarddisplayComponent } from './components/tags/keyboarddisplay/keyboarddisplay.component';
import { PreComponent } from './components/tags/pre/pre.component';
import { BidirectionalComponent } from './components/tags/bidirectional/bidirectional.component';
import { ArticleComponent } from './components/tags/article/article.component';
import { AsideComponent } from './components/tags/aside/aside.component';
import { AppletComponent } from './components/tags/applet/applet.component';
import { BidirectionalisolationComponent } from './components/tags/bidirectionalisolation/bidirectionalisolation.component';
import { CenterComponent } from './components/tags/center/center.component';
import { DataComponent } from './components/tags/data/data.component';
import { DescriptionlistComponent } from './components/tags/descriptionlist/descriptionlist.component';
import { DescriptiontermComponent } from './components/tags/descriptionterm/descriptionterm.component';
import { DescriptiondescribeComponent } from './components/tags/descriptiondescribe/descriptiondescribe.component';
import { DetailsComponent } from './components/tags/details/details.component';
import { DefinininginstanceComponent } from './components/tags/definininginstance/definininginstance.component';
import { DialogComponent } from './components/tags/dialog/dialog.component';
import { FieldsetComponent } from './components/tags/fieldset/fieldset.component';
import { LegendComponent } from './components/tags/legend/legend.component';
import { FigureComponent } from './components/tags/figure/figure.component';
import { FigcaptionComponent } from './components/tags/figcaption/figcaption.component';
import { FrameComponent } from './components/tags/frame/frame.component';
import { FramesetComponent } from './components/tags/frameset/frameset.component';
import { MainComponent } from './components/tags/main/main.component';
import { NoframesComponent } from './components/tags/noframes/noframes.component';
import { MeterComponent } from './components/tags/meter/meter.component';
import { NavigationComponent } from './components/tags/navigation/navigation.component';
import { OutputComponent } from './components/tags/output/output.component';
import { ProgressComponent } from './components/tags/progress/progress.component';
import { RubyComponent } from './components/tags/ruby/ruby.component';
import { RubyparseComponent } from './components/tags/rubyparse/rubyparse.component';
import { RubytermComponent } from './components/tags/rubyterm/rubyterm.component';
import { SdeleteComponent } from './components/tags/sdelete/sdelete.component';
import { StrikedeleteComponent } from './components/tags/strikedelete/strikedelete.component';
import { SummaryComponent } from './components/tags/summary/summary.component';
import { WordbreakopportunityComponent } from './components/tags/wordbreakopportunity/wordbreakopportunity.component';
import { TemplateComponent } from './components/tags/template/template.component';
import { IframeComponent } from './components/tags/iframe/iframe.component';
import { PartinglineComponent } from './components/tags/partingline/partingline.component';

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
    AcronymousComponent,
    AbbreviationComponent,
    BlockquoteComponent,
    AddressComponent,
    KeyboarddisplayComponent,
    PreComponent,
    BidirectionalComponent,
    ArticleComponent,
    AsideComponent,
    AppletComponent,
    BidirectionalisolationComponent,
    CenterComponent,
    DataComponent,
    DescriptionlistComponent,
    DescriptiontermComponent,
    DescriptiondescribeComponent,
    DetailsComponent,
    DefinininginstanceComponent,
    DialogComponent,
    FieldsetComponent,
    LegendComponent,
    FigureComponent,
    FigcaptionComponent,
    FrameComponent,
    FramesetComponent,
    NoframesComponent,
    MainComponent,
    MeterComponent,
    NavigationComponent,
    OutputComponent,
    ProgressComponent,
    RubyComponent,
    RubyparseComponent,
    RubytermComponent,
    SdeleteComponent,
    StrikedeleteComponent,
    SummaryComponent,
    WordbreakopportunityComponent,
    TemplateComponent,
    IframeComponent,
    PartinglineComponent
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

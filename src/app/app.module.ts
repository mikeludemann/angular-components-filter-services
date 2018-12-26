/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Services */
import { CalculateService } from './services/calculate.service';
import { DatetimeService } from './services/datetime.service';
import { LengthService } from './services/length.service';
import { WeightService } from './services/weight.service';
import { SpeedService } from './services/speed.service';
import { TemperatureService } from './services/temperature.service';

/* Pipes (Module) */
import { PipesModule } from './pipes/pipes.module';

/* Components */
import { AppComponent } from './app.component';
import { AudioComponent } from './components/assets/audio/audio.component';
import { VideoComponent } from './components/assets/video/video.component';
import { ImageComponent } from './components/assets/image/image.component';
import { MapComponent } from './components/assets/map/map.component';
import { FontawesomeComponent } from './components/assets/fontawesome/fontawesome.component';
import { GoogleMaterialComponent } from './components/assets/google-material/google-material.component';
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
import { HeadlineComponent } from './components/tags/headline/headline.component';
import { SymbolComponent } from './components/tags/symbol/symbol.component';
import { LinkComponent } from './components/links/link/link.component';
import { LinkContainerComponent } from './components/links/link-container/link-container.component';
import { DownloadLinkComponent } from './components/links/download-link/download-link.component';
import { TableComponent } from './components/tables/table/table.component';
import { TableBodyComponent } from './components/tables/table-body/table-body.component';
import { TableCaptionComponent } from './components/tables/table-caption/table-caption.component';
import { TableColumnComponent } from './components/tables/table-column/table-column.component';
import { TableColumnGroupComponent } from './components/tables/table-column-group/table-column-group.component';
import { TableColumnOfGroupComponent } from './components/tables/table-column-of-group/table-column-of-group.component';
import { TableFooterComponent } from './components/tables/table-footer/table-footer.component';
import { TableHeaderComponent } from './components/tables/table-header/table-header.component';
import { TableRowComponent } from './components/tables/table-row/table-row.component';
import { SortingListComponent } from './components/list/sorting-list/sorting-list.component';
import { UnsortingListComponent } from './components/list/unsorting-list/unsorting-list.component';
import { DirectionListComponent } from './components/list/direction-list/direction-list.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { HeadComponent } from './components/includes/head/head.component';
import { BaseComponent } from './components/includes/base/base.component';
import { BasefontComponent } from './components/includes/basefont/basefont.component';
import { LinkCssComponent } from './components/includes/link-css/link-css.component';
import { TitleComponent } from './components/includes/title/title.component';
import { NoscriptComponent } from './components/includes/noscript/noscript.component';
import { MetaComponent } from './components/includes/meta/meta.component';
import { ScriptComponent } from './components/includes/script/script.component';
import { YearComponent } from './components/date-time/year/year.component';
import { MonthComponent } from './components/date-time/month/month.component';
import { WeekComponent } from './components/date-time/week/week.component';
import { DayComponent } from './components/date-time/day/day.component';
import { HourComponent } from './components/date-time/hour/hour.component';
import { MinuteComponent } from './components/date-time/minute/minute.component';
import { SecondComponent } from './components/date-time/second/second.component';
import { MillisecondComponent } from './components/date-time/millisecond/millisecond.component';
import { ClockTimeComponent } from './components/date-time/timer/clock-time/clock-time.component';
import { CountdownTimerComponent } from './components/date-time/timer/countdown-timer/countdown-timer.component';
import { ScrolltotopComponent } from './components/scrolling/scrolltotop/scrolltotop.component';
import { ScrolltoelementComponent } from './components/scrolling/scrolltoelement/scrolltoelement.component';
import { BrowserVersionComponent } from './components/browser/browser-version/browser-version.component';
import { BrowserCodeNameComponent } from './components/browser/browser-code-name/browser-code-name.component';
import { BrowserNameComponent } from './components/browser/browser-name/browser-name.component';
import { BrowserCookieEnabledComponent } from './components/browser/browser-cookie-enabled/browser-cookie-enabled.component';
import { BrowserLanguageComponent } from './components/browser/browser-language/browser-language.component';
import { BrowserOnlineComponent } from './components/browser/browser-online/browser-online.component';
import { BrowserPlatformComponent } from './components/browser/browser-platform/browser-platform.component';
import { BrowserProductComponent } from './components/browser/browser-product/browser-product.component';
import { BrowserGeolocationComponent } from './components/browser/browser-geolocation/browser-geolocation.component';
import { BrowserUserAgentComponent } from './components/browser/browser-user-agent/browser-user-agent.component';
import { BrowserContainsComponent } from './components/browser/browser-contains/browser-contains.component';
import { QrcodeComponent } from './components/qrcode/qrcode/qrcode.component';
import { AccordionComponent } from './components/accordion/accordion/accordion.component';
import { SkillbarComponent } from './components/skills/skillbar/skillbar.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon/coming-soon.component';
import { SelectComponent } from './components/selection/select/select.component';
import { OptionGroupComponent } from './components/selection/option-group/option-group.component';
import { OptionComponent } from './components/selection/option/option.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner/loading-spinner.component';
import { YoutubeComponent } from './components/social-media/youtube/youtube.component';
import { YoutubePlaylistComponent } from './components/social-media/youtube-playlist/youtube-playlist.component';
import { WhatsappComponent } from './components/social-media/whatsapp/whatsapp.component';
import { VimeoComponent } from './components/social-media/vimeo/vimeo.component';
import { TwitterComponent } from './components/social-media/twitter/twitter.component';
import { InstagramComponent } from './components/social-media/instagram/instagram.component';
import { GooglePlusComponent } from './components/social-media/google-plus/google-plus.component';
import { FacebookMessengerComponent } from './components/social-media/facebook-messenger/facebook-messenger.component';
import { FacebookComponent } from './components/social-media/facebook/facebook.component';
import { PinterestBookmarkComponent } from './components/social-media/pinterest/pinterest-bookmark/pinterest-bookmark.component';
import { PinterestButtonFollowComponent } from './components/social-media/pinterest/pinterest-button-follow/pinterest-button-follow.component';
import { PinterestPinComponent } from './components/social-media/pinterest/pinterest-pin/pinterest-pin.component';
import { PinterestBoardComponent } from './components/social-media/pinterest/pinterest-board/pinterest-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    VideoComponent,
    FontawesomeComponent,
    GoogleMaterialComponent,
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
    AbbreviationComponent,
    BlockquoteComponent,
    AddressComponent,
    KeyboarddisplayComponent,
    PreComponent,
    BidirectionalComponent,
    ArticleComponent,
    AsideComponent,
    BidirectionalisolationComponent,
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
    MainComponent,
    MeterComponent,
    NavigationComponent,
    OutputComponent,
    ProgressComponent,
    RubyComponent,
    RubyparseComponent,
    RubytermComponent,
    SdeleteComponent,
    SummaryComponent,
    TemplateComponent,
    IframeComponent,
    PartinglineComponent,
    HeadlineComponent,
    SymbolComponent,
    LinkComponent,
    LinkContainerComponent,
    DownloadLinkComponent,
    TableComponent,
    TableBodyComponent,
    TableCaptionComponent,
    TableColumnComponent,
    TableColumnGroupComponent,
    TableFooterComponent,
    TableHeaderComponent,
    TableRowComponent,
    SortingListComponent,
    UnsortingListComponent,
    DirectionListComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    LinkCssComponent,
    TitleComponent,
    NoscriptComponent,
    MetaComponent,
    ScriptComponent,
    YearComponent,
    MonthComponent,
    WeekComponent,
    DayComponent,
    HourComponent,
    MinuteComponent,
    SecondComponent,
    MillisecondComponent,
    ClockTimeComponent,
    CountdownTimerComponent,
    ScrolltotopComponent,
    ScrolltoelementComponent,
    BrowserVersionComponent,
    BrowserCodeNameComponent,
    BrowserNameComponent,
    BrowserCookieEnabledComponent,
    BrowserLanguageComponent,
    BrowserOnlineComponent,
    BrowserPlatformComponent,
    BrowserProductComponent,
    BrowserGeolocationComponent,
    BrowserUserAgentComponent,
    BrowserContainsComponent,
    QrcodeComponent,
    AccordionComponent,
    SkillbarComponent,
    ComingSoonComponent,
    SelectComponent,
    OptionGroupComponent,
    OptionComponent,
    LoadingSpinnerComponent,
    YoutubeComponent,
    YoutubePlaylistComponent,
    WhatsappComponent,
    VimeoComponent,
    TwitterComponent,
    InstagramComponent,
    GooglePlusComponent,
    FacebookMessengerComponent,
    FacebookComponent,
    PinterestBookmarkComponent,
    PinterestButtonFollowComponent,
    PinterestPinComponent,
    PinterestBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipesModule
  ],
  providers: [
    CalculateService,
    DatetimeService,
    LengthService,
    WeightService,
    SpeedService,
    TemperatureService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

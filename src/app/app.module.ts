import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';

/* Services */
import { CalculateService } from './services/calculate.service';

/* Pipes */
import { IsArrayPipe } from './pipes/boolean/is-array.pipe';
import { IsDefinedPipe } from './pipes/boolean/is-defined.pipe';
import { IsUndefinedPipe } from './pipes/boolean/is-undefined.pipe';
import { IsEmptyPipe } from './pipes/boolean/is-empty.pipe';
import { IsEmptyDimensionPipe } from './pipes/boolean/is-empty-dimension.pipe';
import { IsNullPipe } from './pipes/boolean/is-null.pipe';
import { IsEqualPipe } from './pipes/boolean/is-equal.pipe';
import { IsEqualTypePipe } from './pipes/boolean/is-equal-type.pipe';
import { IsNotEqualTypePipe } from './pipes/boolean/is-not-equal-type.pipe';
import { IsNotEqualPipe } from './pipes/boolean/is-not-equal.pipe';
import { IsLessPipe } from './pipes/boolean/is-less.pipe';
import { IsLessEqualPipe } from './pipes/boolean/is-less-equal.pipe';
import { IsGreaterEqualPipe } from './pipes/boolean/is-greater-equal.pipe';
import { IsGreaterPipe } from './pipes/boolean/is-greater.pipe';
import { IsFunctionPipe } from './pipes/boolean/is-function.pipe';
import { IsNilPipe } from './pipes/boolean/is-nil.pipe';
import { IsNumberPipe } from './pipes/boolean/is-number.pipe';
import { IsStringPipe } from './pipes/boolean/is-string.pipe';
import { IsObjectPipe } from './pipes/boolean/is-object.pipe';
import { AbsPipe } from './pipes/math/abs.pipe';
import { ArccosinePipe } from './pipes/math/arccosine.pipe';
import { ArcsinePipe } from './pipes/math/arcsine.pipe';
import { ArctangantPipe } from './pipes/math/arctangant.pipe';
import { ArctangantquotientPipe } from './pipes/math/arctangantquotient.pipe';
import { CosinePipe } from './pipes/math/cosine.pipe';
import { CubicRootPipe } from './pipes/math/cubic-root.pipe';
import { EulerPipe } from './pipes/math/euler.pipe';
import { HyperbolicArccosinePipe } from './pipes/math/hyperbolic-arccosine.pipe';
import { HyperbolicArcsinePipe } from './pipes/math/hyperbolic-arcsine.pipe';
import { HyperbolicCosinePipe } from './pipes/math/hyperbolic-cosine.pipe';
import { HyperbolicSinPipe } from './pipes/math/hyperbolic-sin.pipe';
import { HyperbolicTangantPipe } from './pipes/math/hyperbolic-tangant.pipe';
import { LogarithmPipe } from './pipes/math/logarithm.pipe';
import { MinPipe } from './pipes/math/min.pipe';
import { MaxPipe } from './pipes/math/max.pipe';
import { PercentagePipe } from './pipes/math/percentage.pipe';
import { PowPipe } from './pipes/math/pow.pipe';
import { CeilPipe } from './pipes/math/ceil.pipe';
import { FloorPipe } from './pipes/math/floor.pipe';
import { RoundPipe } from './pipes/math/round.pipe';
import { SqrtPipe } from './pipes/math/sqrt.pipe';
import { SinPipe } from './pipes/math/sin.pipe';
import { TangantPipe } from './pipes/math/tangant.pipe';
import { TruncPipe } from './pipes/math/trunc.pipe';
import { SumPipe } from './pipes/math/sum.pipe';
import { RadiansPipe } from './pipes/math/radians.pipe';
import { DegreesPipe } from './pipes/math/degrees.pipe';
import { RadixPipe } from './pipes/math/radix.pipe';
import { InvertPipe } from './pipes/object/invert.pipe';
import { KeysPipe } from './pipes/object/keys.pipe';
import { ValuesPipe } from './pipes/object/values.pipe';
import { MatchPipe } from './pipes/regular_expression/match.pipe';
import { TestPipe } from './pipes/regular_expression/test.pipe';
import { CamelizePipe } from './pipes/string/camelize.pipe';
import { EndsWithPipe } from './pipes/string/ends-with.pipe';
import { LatinizePipe } from './pipes/string/latinize.pipe';
import { LefttrimPipe } from './pipes/string/lefttrim.pipe';
import { LowerPipe } from './pipes/string/lower.pipe';
import { LowercaseFirstPipe } from './pipes/string/lowercase-first.pipe';
import { RepeatPipe } from './pipes/string/repeat.pipe';
import { ReversePipe } from './pipes/string/reverse.pipe';
import { RighttrimPipe } from './pipes/string/righttrim.pipe';
import { SlugifyPipe } from './pipes/string/slugify.pipe';
import { SplitPipe } from './pipes/string/split.pipe';
import { StartsWithPipe } from './pipes/string/starts-with.pipe';
import { StringularPipe } from './pipes/string/stringular.pipe';
import { StriptagsPipe } from './pipes/string/striptags.pipe';
import { TitleizePipe } from './pipes/string/titleize.pipe';
import { TrimPipe } from './pipes/string/trim.pipe';
import { TruncatePipe } from './pipes/string/truncate.pipe';
import { UpperPipe } from './pipes/string/upper.pipe';
import { UppercaseFirstPipe } from './pipes/string/uppercase-first.pipe';
import { UriComponentEncodePipe } from './pipes/string/uri-component-encode.pipe';
import { UriEncodePipe } from './pipes/string/uri-encode.pipe';
import { WrapPipe } from './pipes/string/wrap.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IsArrayPipe,
    IsDefinedPipe,
    IsUndefinedPipe,
    IsEmptyPipe,
    IsEmptyDimensionPipe,
    IsNullPipe,
    IsEqualPipe,
    IsEqualTypePipe,
    IsNotEqualTypePipe,
    IsNotEqualPipe,
    IsLessPipe,
    IsLessEqualPipe,
    IsGreaterEqualPipe,
    IsGreaterPipe,
    IsFunctionPipe,
    IsNilPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsStringPipe,
    IsObjectPipe,
    AbsPipe,
    ArccosinePipe,
    ArcsinePipe,
    ArctangantPipe,
    ArctangantquotientPipe,
    CosinePipe,
    CubicRootPipe,
    EulerPipe,
    HyperbolicArccosinePipe,
    HyperbolicArcsinePipe,
    HyperbolicCosinePipe,
    HyperbolicSinPipe,
    HyperbolicTangantPipe,
    LogarithmPipe,
    PercentagePipe,
    PowPipe,
    CeilPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    SinPipe,
    TangantPipe,
    TruncPipe,
    SumPipe,
    RadiansPipe,
    DegreesPipe,
    RadixPipe,
    MatchPipe,
    TestPipe,
    MinPipe,
    MaxPipe,
    InvertPipe,
    KeysPipe,
    ValuesPipe,
    CamelizePipe,
    EndsWithPipe,
    LatinizePipe,
    LefttrimPipe,
    LowerPipe,
    LowercaseFirstPipe,
    RepeatPipe,
    ReversePipe,
    RighttrimPipe,
    SlugifyPipe,
    SplitPipe,
    StartsWithPipe,
    StringularPipe,
    StriptagsPipe,
    TitleizePipe,
    TrimPipe,
    TruncatePipe,
    UpperPipe,
    UppercaseFirstPipe,
    UriComponentEncodePipe,
    UriEncodePipe,
    WrapPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

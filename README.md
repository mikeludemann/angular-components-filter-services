# Angular - Components, Filter, Services and more

Some helpful source codes for components, filters, and services in angular

## Command

### Starting the app

```
ng serve [--open --port 8080/8443 --liveReload true/false --proxy-config proxy.conf.json --target Build --environment --ssl true/false --ssl-key ssl/server.key --ssl-cert ssl/server.cert --aot true/false]

or

npm start
```

### Checking version

```
ng --version
```

### Generator (Create)

#### Component

```
ng generate component name
```

#### Directive

```
ng generate directive name
```

#### Pipe

```
ng generate pipe name
```

#### Service

```
ng generate service name
```

#### Module

```
ng generate module name
```

#### Class

```
ng generate class name
```

#### Interface

```
ng generate interface name
```

#### Enum

```
ng generate enum name
```

### Tests

```
ng test [--watch=false/true]

or

npm run test
```

### Tests - e2e

```
ng e2e

or

npm run e2e
```

### Builds

```
ng build [--prod --dev --source]
```

### Linter

```
ng lint
```

### Delete cache

```
ng cache clean
```

### Packages (Install)

Installing npm packages

```
npm install
```

## Overview

### Components 

##### Accordion

|accordion    |
|-------------|
|id           |
|headline     |

#### Assets

|image    |map-use       |google-material |fw-icon       |audio-block      |video-block      |
|---------|--------------|----------------|--------------|-----------------|-----------------|
|source   |name          |element         |class         |class            |class            |
|id       |form          |                |              |id               |id               |
|class    |coordination  |                |              |autoplay         |autoplay         |
|width    |urlmap        |                |              |controls         |controls         |
|height   |text          |                |              |preload          |preload          |
|alttext  |              |                |              |volume           |poster           |
|usemap   |              |                |              |muted            |muted            |
|         |              |                |              |loop             |loop             |
|         |              |                |              |crossorigin      |crossorigin      |
|         |              |                |              |notsupportedtext |notsupportedtext |
|         |              |                |              |mpeg             |mpeg             |
|         |              |                |              |mp4              |mp4              |
|         |              |                |              |webm             |webm             |
|         |              |                |              |ogg              |ogg              |
|         |              |                |              |flac             |wav              |
|         |              |                |              |title            |quicktime        |
|         |              |                |              |track            |x_msvideo        |
|         |              |                |              |tracksrc         |m4v              |
|         |              |                |              |trackkind        |rtf              |
|         |              |                |              |tracksrclang     |track            |
|         |              |                |              |tracklabel       |tracksrc         |
|         |              |                |              |                 |trackkind        |
|         |              |                |              |                 |tracksrclang     |
|         |              |                |              |                 |tracklabel       |
|         |              |                |              |                 |                 |

#### Avatar

|avatar          |
|----------------|
|class           |
|firstname       |
|secondname      |
|lastname        |
|email           |
|size            |
|textsize        |
|color           |
|bgcolor         |
|overcolor       |
|borderradius    |

##### Browser (Navigator)

|browser-version |browser-code-name |browser-name |browser-cookie-enabled |browser-language  |browser-online    |browser-platform|browser-product   |browser-geolocation|browser-user-agent     |browser-contains  |
|----------------|------------------|-------------|-----------------------|------------------|------------------|----------------|------------------|-------------------|-----------------------|------------------|
|                |                  |             |                       |                  |                  |                |                  |                   |                       |                  |

#### Coming Soon

|coming-soon     |
|----------------|
|date            |
|time            |
|title           |
|extraText       |
|id              |
|color           |
|backgroundcolor |
|backgroundimage |

#### Data Security

|analytics-advertising |data-collection       |data-protection-officer |data-protection     |data-security       |general-information     |newsletter        |online-marketing-affiliate-program |payment-service     |plugins-tools       |social-media        |
|----------------------|----------------------|------------------------|--------------------|--------------------|------------------------|------------------|-----------------------------------|--------------------|--------------------|--------------------|
|headline              |                      |firstname               |                    |headline            |firstname               |                  |                                   |                    |                    |                    |
|                      |                      |lastname                |                    |                    |lastname                |                  |                                   |                    |                    |                    |
|                      |                      |street                  |                    |                    |street                  |                  |                                   |                    |                    |                    |
|                      |                      |streetnumber            |                    |                    |streetnumber            |                  |                                   |                    |                    |                    |
|                      |                      |postalcode              |                    |                    |postalcode              |                  |                                   |                    |                    |                    |
|                      |                      |city                    |                    |                    |city                    |                  |                                   |                    |                    |                    |
|                      |                      |telephone               |                    |                    |telephone               |                  |                                   |                    |                    |                    |
|                      |                      |email                   |                    |                    |email                   |                  |                                   |                    |                    |                    |

##### Data Security (Sub - Social Media)

|google-plus-plugin |instagram-plugin   |linkedin-plugin    |pinterest-plugin   |tumblr-plugin      |xing-plugin        |
|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
|                   |                   |                   |                   |                   |                   |

##### Data Security (Sub - Online Marketing Affiliate Program)

|amazon |
|-------|
|       |

##### Data Security (Sub - Payment Service)

|klarna   |paydirekt|paypal   |sofortueberweisung |
|---------|---------|---------|-------------------|
|         |         |         |                   |

##### Data Security (Sub - Plugins Tools)

|google-maps-plugin |google-web-fonts-plugin |soundcloud-plugin  |spotify-plugin     |vimeo-plugin       |youtube-plugin     |
|-------------------|------------------------|-------------------|-------------------|-------------------|-------------------|
|                   |                        |                   |                   |                   |                   |

##### Data Security (Sub - Newsletter)

|cleverelements     |cleverreach        |klick-tipp         |mailchimp          |newsletter2go      |rapidmail          |
|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
|                   |                   |                   |                   |                   |                   |

##### Data Security (Sub - Analytics Advertising)

|etracker           |facebook-pixel     |google-adsense     |google-adwords-conversion-tracking |google-analytics   |google-analytics-remarketing |google-recaptcha   |matomo  |wordpress-stats    |
|-------------------|-------------------|-------------------|-----------------------------------|-------------------|-----------------------------|-------------------|--------|-------------------|
|                   |                   |                   |                                   |                   |                             |                   |        |                   |

#### Date and Time

|year         |month         |day           |week          |minute        |second        |millisecond   |hour          |
|-------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
|             |format        |              |              |              |              |              |              |

##### Date and Time (Sub - Timer)

|clock-time   |countdown-timer |
|-------------|----------------|
|             |date            |
|             |time            |

#### Forms

|legal-form   |contact-form  |
|-------------|--------------|
|headline     |firstName     |
|registerTitle|lastName      |
|registerForm |street        |
|vatTitle     |streetNumber  |
|vatForm      |postalcode    |
|taxTitle     |place         |
|tax          |salutation    |
|lawTitle     |title         |
|lawName      |secondName    |
|             |country       |
|             |telephone     |
|             |telefax       |
|             |email         |
|             |homepage      |
|             |homepageText  |

##### Forms (Sub - Elements)

|input-with-headline |input-field          |input-with-datalist  |textarea-field       |button-field         |
|--------------------|---------------------|---------------------|---------------------|---------------------|
|mainclass           |mainclass            |mainclass            |containerclass       |id                   |
|containerclass      |containerclass       |containerclass       |textareaclass        |class                |
|headlineclass       |inputclass           |inputclass           |maxlength            |type                 |
|inputclass          |id                   |id                   |name                 |name                 |
|id                  |name                 |name                 |rows                 |value                |
|headline            |type                 |type                 |cols                 |formID               |
|name                |value                |value                |placeholder          |formAction           |
|type                |placeholder          |placeholder          |required             |formEnctype          |
|value               |                     |datalistID           |autofocus            |formMethod           |
|placeholder         |                     |                     |                     |                     |

#### Includes

|footer-mode  |header-mode   |head-mode     |base-mode     |base-font     |link-css      |title-mode    |no-script     |meta-mode     |script-mode   |
|-------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
|class        |class         |              |url           |color         |rel           |              |              |name          |url           |
|             |              |              |target        |fontfamily    |href          |              |              |content       |async         |
|             |              |              |              |size          |hreflang      |              |              |charset       |defer         |
|             |              |              |              |              |sizes         |              |              |itemprop      |type          |
|             |              |              |              |              |title         |              |              |httpsequiv    |charset       |
|             |              |              |              |              |type          |              |              |property      |              |
|             |              |              |              |              |target        |              |              |              |              |
|             |              |              |              |              |rev           |              |              |              |              |
|             |              |              |              |              |media         |              |              |              |              |
|             |              |              |              |              |crossorigin   |              |              |              |              |

#### Links 

|links    |link-container|download-link |
|---------|--------------|--------------|
|url      |url           |url           |
|name     |name          |name          |
|target   |target        |target        |
|text     |              |download      |

#### List

|sorting-list |unsorting-list|direction-list |
|-------------|--------------|---------------|
|             |              |               |

#### Loading-Spinner

|loading-spinner |
|----------------|
|id              |
|color           |
|bgcolor         |
|size            |

#### Overlay

|content-overlay |content-image-overlay |
|----------------|----------------------|
|mainclass       |containerclass        |
|maintext        |maintext              |
|text            |alttext               |
|size            |source                |
|borderradius    |textsize              |
|textsize        |size                  |
|color           |borderradius          |
|bgcolor         |color                 |
|overcolor       |bgcolor               |
|overbgcolor     |                      |
|                |                      |

#### Popover

|popover      |
|-------------|
|position     |
|defaulttext  |
|popovertext  |

#### Popups

|popup        |
|-------------|
|position     |
|defaulttext  |
|popuptext    |

#### Profile

|profile      |
|-------------|
|position     |
|defaulttext  |
|tooltiptext  |

#### QRCode

|qrcode    |
|----------|
|width     |
|height    |
|data      |
|encoding  |
|correction|

#### Scrolling

|scrolltotop  |scrolltoelement |
|-------------|----------------|
|             |element         |
|             |timer           |

#### Selection

|selection    |option-group  |option         |
|-------------|--------------|---------------|
|id           |id            |id             |
|form         |label         |label          |
|size         |disabled      |disabled       |
|name         |              |value          |
|autofocus    |              |selected       |
|disabled     |              |               |
|multiple     |              |               |
|required     |              |               |

##### Skillbar

|skillbar     |
|-------------|
|text         |
|width        |
|bgcolor      |

#### Social-Media

|youtube-playlist |youtube    |vimeo       |twitter     |whatsapp    |instagram       |google-plus     |facebook        |facebook-messenger |pinterest-bookmark |pinterest-button-follow |pinterest-pin     |pinterest-board   |pinterest-profile |
|-----------------|-----------|------------|------------|------------|----------------|----------------|----------------|-------------------|-------------------|------------------------|------------------|------------------|------------------|
|videolistid      |videoid    |videoid     |timeline    |tel         |instagramPostID |googlePlusID    |postURL         |username           |language           |follow                  |size              |boardUrl          |username          |
|width            |width      |width       |style       |text        |                |postID          |                |text               |round              |fullName                |descriptionHide   |format            |format            |
|height           |height     |height      |            |source      |                |                |                |                   |large              |                        |pinID             |boardWidth        |boardWidth        |
|                 |           |            |            |data        |                |                |                |                   |                   |                        |                  |scaleHeight       |scaleHeight       |
|                 |           |            |            |linktext    |                |                |                |                   |                   |                        |                  |scaleWidth        |scaleWidth        |

#### Tables

|table-mode  |table-header  |table-body    |table-footer  |table-row     |table-column  |table-column-group |table-column-of-group |table-caption |
|------------|--------------|--------------|--------------|--------------|--------------|-------------------|----------------------|--------------|
|id          |id            |id            |id            |id            |id            |id                 |id                    |id            |
|class       |class         |class         |class         |class         |class         |class              |class                 |class         |
|            |abbreviation  |              |              |              |headers       |size               |size                  |              |
|            |headers       |              |              |              |columnsize    |                   |                      |              |
|            |columnsize    |              |              |              |rowsize       |                   |                      |              |
|            |rowsize       |              |              |              |              |                   |                      |              |
|            |scope         |              |              |              |              |                   |                      |              |
|            |              |              |              |              |              |                   |                      |              |

#### Tags [HTML5]

|acronymous    |bigger        |bold          |break         |coding        |down          |delete        |emphrasize    |inserted      |italic        |marked        |quote         |smaller       |stronger      |up            |variable      |block-quote   |abbreviation  |
|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
|              |              |              |              |              |              |              |              |              |              |              |url           |              |              |              |              |url           |title         |


|address-block |keyboarddisplay|cite-mode     |pre-mode      |bidirectional |article-mode  |aside-mode    |applet-mode     |bidirectionalisolation  |center-mode   |data-mode     |descriptionlist|descriptionterm|descriptiondescribe|details-mode  |definininginstance |dialog-mode   |fieldset-mode |
|--------------|---------------|--------------|--------------|--------------|--------------|--------------|----------------|------------------------|--------------|--------------|---------------|---------------|-------------------|--------------|-------------------|--------------|--------------|
|              |               |              |              |direction     |              |              |url             |                        |              |value         |               |               |                   |open          |id                 |compact       |disabled      |
|              |               |              |              |              |              |              |objectname      |                        |              |              |               |               |                   |              |title              |              |formname      |
|              |               |              |              |              |              |              |position        |                        |              |              |               |               |                   |              |                   |              |name          |
|              |               |              |              |              |              |              |alttext         |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |archiveurl      |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |codebaseurl     |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |spacehorizontal |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |spacevertical   |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |height          |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |width           |                        |              |              |               |               |                   |              |                   |              |              |
|              |               |              |              |              |              |              |name            |                        |              |              |               |               |                   |              |                   |              |              |

|legend-mode   |figure-mode   |figcaption-mode |frame-mode    |frameset-mode |noframes-mode |main-mode     |meter-mode    |navigation    |output-mode   |progress-mode |ruby-mode     |rubyterm      |rubyparse     |sdelete       |strikedelete  |summary-mode  |wordbreakopportunity      |template-mode |iframe-mode  |partingline  |symbol       |headline     |text-container |text-element |
|--------------|--------------|----------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------------------|--------------|-------------|-------------|-------------|-------------|---------------|-------------|
|position      |              |                |border        |cols          |              |              |value         |              |name          |value         |              |              |              |              |              |              |                          |              |class        |id           |id           |id           |               |             |
|              |              |                |urllong       |rows          |              |              |min           |              |form          |max           |              |              |              |              |              |              |                          |              |url          |class        |codeformat   |size         |               |             |
|              |              |                |source        |              |              |              |max           |              |for           |              |              |              |              |              |              |              |                          |              |height       |orientation  |code         |title        |               |             |
|              |              |                |height        |              |              |              |              |              |              |              |              |              |              |              |              |              |                          |              |width        |             |             |             |               |             |
|              |              |                |width         |              |              |              |              |              |              |              |              |              |              |              |              |              |                          |              |srcdoc       |             |             |             |               |             |
|              |              |                |noresize      |              |              |              |              |              |              |              |              |              |              |              |              |              |                          |              |sandbox      |             |             |             |               |             |
|              |              |                |name          |              |              |              |              |              |              |              |              |              |              |              |              |              |                          |              |             |             |             |             |               |             |
|              |              |                |scrollformat  |              |              |              |              |              |              |              |              |              |              |              |              |              |                          |              |             |             |             |             |               |             |

#### Tooltips

|tooltip      |
|-------------|
|position     |
|defaultText  |
|tooltipText  |

### Filter / Pipes

|Boolean            |Math               |Object             |Regular Expression |String             |Utilities          |Collection         |
|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
|isArray            |abs                |invert             |match              |camelize           |after              |search             |
|isDefined          |arccosine          |keys               |test               |endsWith           |afterWhere         |                   |
|isEmpty            |arcsine            |values             |                   |latinize           |before             |                   |
|isEmptyDimension   |arctangant         |                   |                   |lefttrim           |beforeWhere        |                   |
|isEqualType        |arctangantquotient |                   |                   |lower              |chunkBy            |                   |
|isEqual            |ceil               |                   |                   |lowercaseFirst     |concat             |                   |
|isFunction         |cosine             |                   |                   |repeat             |contains           |                   |
|isGreaterEqual     |cubicRoot          |                   |                   |reverse            |countBy            |                   |
|isGreater          |degrees            |                   |                   |righttrim          |defaults           |                   |
|isLessEqual        |euler              |                   |                   |slugify            |every              |                   |
|isLess             |floor              |                   |                   |split              |filterBy           |                   |
|isNil              |hyperbolicArccosine|                   |                   |startsWith         |first              |                   |
|isNotEqualType     |hyperbolicArcsine  |                   |                   |stringular         |flatten            |                   |
|isNotEqual         |hyperbolicCosine   |                   |                   |striptags          |fuzzy              |                   |
|isNull             |hyperbolicSin      |                   |                   |titleize           |fuzzyBy            |                   |
|isNumber           |hyperbolicTangant  |                   |                   |trim               |isEmptyCollection  |                   |
|isObject           |logarithm          |                   |                   |truncate           |join               |                   |
|isString           |min                |                   |                   |upper              |last               |                   |
|isUndefined        |max                |                   |                   |uppercaseFirst     |map                |                   |
|                   |percentage         |                   |                   |uriComponentEncode |objectToArray      |                   |
|                   |pow                |                   |                   |uriEncode          |omit               |                   |
|                   |radians            |                   |                   |wrap               |pick               |                   |
|                   |radix              |                   |                   |                   |range              |                   |
|                   |round              |                   |                   |                   |remove             |                   |
|                   |sin                |                   |                   |                   |removeWith         |                   |
|                   |sqrt               |                   |                   |                   |reverse            |                   |
|                   |sum                |                   |                   |                   |searchfield        |                   |
|                   |tangant            |                   |                   |                   |unique             |                   |
|                   |trunc              |                   |                   |                   |where              |                   |
|                   |                   |                   |                   |                   |xor                |                   |

### Services

|Calculate|Clock    |Utilities   |datetime      |length          |speed         |temperature        |weight         |
|---------|---------|------------|--------------|----------------|--------------|-------------------|---------------|
|sum      |         |hexadecimal |year          |feetToMeter     |mphToKPH      |celsiusToFahrenheit|poundToKilogram|
|         |         |decrement   |month         |feetToInch      |mphToKnots    |fahrenheitToCelsius|poundToOunce   |
|         |         |increment   |monthAtString |feetToCM        |mphToMach     |                   |poundToGram    |
|         |         |add         |day           |feetToYard      |kphToMPH      |                   |poundToStone   |
|         |         |subtract    |dayAtString   |feetToKilometer |kphToKnots    |                   |KilogramToPound|
|         |         |divide      |hour          |feetToMile      |kphToMach     |                   |KilogramToOunce|
|         |         |multiply    |minute        |meterToFeet     |knotsToMPH    |                   |KilogramToGram |
|         |         |modulo      |second        |meterToInch     |knotsToKPH    |                   |KilogramToStone|
|         |         |            |millisecond   |meterToCM       |knotsToMach   |                   |OunceToPound   |
|         |         |            |              |meterToYard     |machToMPH     |                   |OunceToKilogram|
|         |         |            |              |meterToKilometer|machToKPH     |                   |OunceToGram    |
|         |         |            |              |meterToMile     |machToKnots   |                   |OunceToStone   |
|         |         |            |              |inchToMeter     |              |                   |GramToPound    |
|         |         |            |              |inchToFeet      |              |                   |GramToKilogram |
|         |         |            |              |inchToCM        |              |                   |GramToOunce    |
|         |         |            |              |inchToYard      |              |                   |GramToStone    |
|         |         |            |              |inchToKilometer |              |                   |StoneToPound   |
|         |         |            |              |inchToMile      |              |                   |StoneToKilogram|
|         |         |            |              |cmToFeet        |              |                   |StoneToOunce   |
|         |         |            |              |cmToInch        |              |                   |StoneToGram    |
|         |         |            |              |cmToMeter       |              |                   |               |
|         |         |            |              |cmToYard        |              |                   |               |
|         |         |            |              |cmToKilometer   |              |                   |               |
|         |         |            |              |cmToMile        |              |                   |               |
|         |         |            |              |yardToFeet      |              |                   |               |
|         |         |            |              |yardToInch      |              |                   |               |
|         |         |            |              |yardToMeter     |              |                   |               |
|         |         |            |              |yardToCM        |              |                   |               |
|         |         |            |              |yardToKilometer |              |                   |               |
|         |         |            |              |yardToMile      |              |                   |               |
|         |         |            |              |kilometerToFeet |              |                   |               |
|         |         |            |              |kilometerToInch |              |                   |               |
|         |         |            |              |kilometerToMeter|              |                   |               |
|         |         |            |              |kilometerToYard |              |                   |               |
|         |         |            |              |kilometerToCM   |              |                   |               |
|         |         |            |              |kilometerToMile |              |                   |               |
|         |         |            |              |mileToFeet      |              |                   |               |
|         |         |            |              |mileToInch      |              |                   |               |
|         |         |            |              |mileToMeter     |              |                   |               |
|         |         |            |              |mileToYard      |              |                   |               |
|         |         |            |              |mileToCM        |              |                   |               |
|         |         |            |              |mileToKilometer |              |                   |               |

### Interface

|Person       |
|-------------|
|firstname    |
|secondname   |
|lastname     |
|street       |
|streetnumber |
|postalcode   |
|cities       |
|country      |

### Enum 

|Direction|Status   |FileAccess|Port      |MediaType             |
|---------|---------|----------|----------|----------------------|
|UP       |YES      |None      |HTTP      |AUTOCAD_NCSA          |
|DOWN     |NO       |Read      |HTTPS     |APPLEFILE             |
|LEFT     |         |Write     |          |ASTOUND               |
|RIGHT    |         |ReadWrite |          |TSP                   |
|         |         |          |          |AUTOCAD_CERN          |
|         |         |          |          |FUTURESPLASH          |
|         |         |          |          |GZIP                  |
|         |         |          |          |JAVASCRIPT_APP        |
|         |         |          |          |JSON                  |
|         |         |          |          |LISTENUP              |
|         |         |          |          |MAC_BINARY            |
|         |         |          |          |MBEDLET               |
|         |         |          |          |MIF                   |
|         |         |          |          |MSEXCEL               |
|         |         |          |          |MSHELP                |
|         |         |          |          |MSPOWERPOINT          |
|         |         |          |          |MSWORD                |
|         |         |          |          |OCTET                 |
|         |         |          |          |ODA                   |
|         |         |          |          |PDF                   |
|         |         |          |          |POSTSCRIPT            |
|         |         |          |          |RTC                   |
|         |         |          |          |RTF                   |
|         |         |          |          |STUDIOM               |
|         |         |          |          |VMD                   |
|         |         |          |          |VMF                   |
|         |         |          |          |EXCEL_OPENOFFICE      |
|         |         |          |          |WORD_OPENOFFICE       |
|         |         |          |          |WMLC                  |
|         |         |          |          |WML_SCRIPT_C          |
|         |         |          |          |XHTML                 |
|         |         |          |          |XML                   |
|         |         |          |          |BCPIO                 |
|         |         |          |          |ZLIP                  |
|         |         |          |          |CPIO                  |
|         |         |          |          |CSH                   |
|         |         |          |          |DIRECTOR              |
|         |         |          |          |DVI                   |
|         |         |          |          |ENVOY                 |
|         |         |          |          |GTAR                  |
|         |         |          |          |HDF                   |
|         |         |          |          |PHP                   |
|         |         |          |          |LATEX                 |
|         |         |          |          |MAC_BIN               |
|         |         |          |          |XMIF                  |
|         |         |          |          |CDF                   |
|         |         |          |          |NSCHAT                |
|         |         |          |          |SHELL                 |
|         |         |          |          |SHELL_ARCHIVE         |
|         |         |          |          |SHOCKWAVE             |
|         |         |          |          |SPRITE                |
|         |         |          |          |STUFFIT               |
|         |         |          |          |SUPERCARD             |
|         |         |          |          |CPIO_SV4              |
|         |         |          |          |CPIO_SV4_CRC          |
|         |         |          |          |TAR                   |
|         |         |          |          |TCL                   |
|         |         |          |          |TEX                   |
|         |         |          |          |TEXINFO               |
|         |         |          |          |TROFF                 |
|         |         |          |          |TROFF_MAN             |
|         |         |          |          |TROFF_ME              |
|         |         |          |          |TROFF_MS              |
|         |         |          |          |USTAR                 |
|         |         |          |          |WAIS                  |
|         |         |          |          |HTML_CGI              |
|         |         |          |          |ZIP                   |
|         |         |          |          |BASIC                 |
|         |         |          |          |ECHOSPEECH            |
|         |         |          |          |TSI                   |
|         |         |          |          |VOX                   |
|         |         |          |          |AIFF                  |
|         |         |          |          |DSPEECH               |
|         |         |          |          |MIDI                  |
|         |         |          |          |MPEG_AUDIO            |
|         |         |          |          |REALAUDIO             |
|         |         |          |          |REALAUDIO_PLUGIN      |
|         |         |          |          |QUICKTIME_AUDIO       |
|         |         |          |          |WAV                   |
|         |         |          |          |DRAWING               |
|         |         |          |          |BMP                   |
|         |         |          |          |CIS_COD               |
|         |         |          |          |CMU_RASTER            |
|         |         |          |          |FIF                   |
|         |         |          |          |GIF                   |
|         |         |          |          |IEF                   |
|         |         |          |          |JPEG                  |
|         |         |          |          |PNG                   |
|         |         |          |          |SVG                   |
|         |         |          |          |TIFF                  |
|         |         |          |          |VASA                  |
|         |         |          |          |BITMAP_WAP            |
|         |         |          |          |FREEHAND              |
|         |         |          |          |ICON                  |
|         |         |          |          |PBM_ANYMAP            |
|         |         |          |          |PBM_BITMAP            |
|         |         |          |          |PBM_GRAYMAP           |
|         |         |          |          |PBM_PIXMAP            |
|         |         |          |          |RGB                   |
|         |         |          |          |X_WINDOWS             |
|         |         |          |          |XBM                   |
|         |         |          |          |XPM                   |
|         |         |          |          |EXTERNAL_BODY         |
|         |         |          |          |HTTP                  |
|         |         |          |          |NEWS                  |
|         |         |          |          |PARTIAL               |
|         |         |          |          |RTC822                |
|         |         |          |          |VRML_MODEL            |
|         |         |          |          |ALTERNATIVE           |
|         |         |          |          |BYTERANGES            |
|         |         |          |          |DIGEST                |
|         |         |          |          |ENCRYPTED             |
|         |         |          |          |FORM_DATA             |
|         |         |          |          |MIXED                 |
|         |         |          |          |PARALLEL              |
|         |         |          |          |RELATED               |
|         |         |          |          |REPORT                |
|         |         |          |          |SIGNED                |
|         |         |          |          |VOICE                 |
|         |         |          |          |CSV                   |
|         |         |          |          |CSS                   |
|         |         |          |          |HTML                  |
|         |         |          |          |JAVASCRIPT            |
|         |         |          |          |PLAIN                 |
|         |         |          |          |RICHTEXT              |
|         |         |          |          |RTF_TEXT              |
|         |         |          |          |TSV                   |
|         |         |          |          |WML                   |
|         |         |          |          |WML_SCRIPT            |
|         |         |          |          |XML_TEXT              |
|         |         |          |          |XML_EXTERN            |
|         |         |          |          |SETEXT                |
|         |         |          |          |SGML                  |
|         |         |          |          |SPEECH                |
|         |         |          |          |MPEG_VIDEO            |
|         |         |          |          |QUICKTIME_VIDEO       |
|         |         |          |          |VIVO                  |
|         |         |          |          |WEBM                  |
|         |         |          |          |MSVIDEO               |
|         |         |          |          |MOVIE                 |
|         |         |          |          |FORMULAONE            |
|         |         |          |          |DMF_3                 |
|         |         |          |          |VRML_X_WORLD          |
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

|Image    |
|---------|
|src      |
|id       |
|class    |
|width    |
|height   |
|alt      |

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

|Calculate|
|---------|
|sum      |

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
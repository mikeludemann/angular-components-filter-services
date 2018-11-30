export enum Mediatypes {
    // application

    AUTOCAD_NCSA = "application/acad",
    APPLEFILE = "application/applefile",
    ASTOUND= "application/astound",
    TSP = "application/dsptype",
    AUTOCAD_CERN = "application/dxf",
    FUTURESPLASH = "application/futuresplash",
    GZIP = "application/gzip",
    JAVASCRIPT_APP = "application/javascript",
    JSON = "application/json",
    LISTENUP = "application/listenup",
    MAC_BINARY = "application/mac-binhex40",
    MBEDLET = "application/mbedlet",
    MIF = "application/mif",
    MSEXCEL = "application/msexcel",
    MSHELP = "application/mshelp",
    MSPOWERPOINT = "application/mspowerpoint",
    MSWORD = "application/msword",
    OCTET = "application/octet-stream",
    ODA = "application/oda",
    PDF = "application/pdf",
    POSTSCRIPT = "application/postscript",
    RTC = "application/rtc",
    RTF = "application/rtf",
    STUDIOM = "application/studiom",
    VMD = "application/vocaltec-media-desc",
    VMF = "application/vocaltec-media-file",
    EXCEL_OPENOFFICE = "application/vnd.openxmlformats-officedocument. spreadsheetml.sheet",
    WORD_OPENOFFICE = "application/vnd.openxmlformats-officedocument. wordprocessingml.document",
    WMLC = "application/vnd.wap.wmlc",
    WML_SCRIPT_C = "application/vnd.wap.wmlscriptc",
    XHTML = "application/xhtml+xml",
    XML = "application/xml",
    BCPIO = "application/x-bcpio",
    ZLIP = "application/x-compress",
    CPIO = "application/x-cpio",
    CSH = "application/x-csh",
    DIRECTOR = "application/x-director",
    DVI = "application/x-dvi",
    ENVOY = "application/x-envoy",
    GTAR = "application/x-gtar",
    HDF = "application/x-hdf",
    PHP = "application/x-httpd-php",
    LATEX = "application/x-latex",
    MAC_BIN = "application/x-macbinary",
    XMIF = "application/x-mif",
    CDF = "application/x-netcdf",
    NSCHAT = "application/x-nschat",
    SHELL = "application/x-sh",
    SHELL_ARCHIVE = "application/x-shar",
    SHOCKWAVE = "application/x-shockwave-flash",
    SPRITE = "application/x-sprite",
    STUFFIT = "application/x-stuffit",
    SUPERCARD = "application/x-supercard",
    CPIO_SV4 = "application/x-sv4cpio",
    CPIO_SV4_CRC = "application/x-sv4crc",
    TAR = "application/x-tar",
    TCL = "application/x-tcl",
    TEX = "application/x-tex",
    TEXINFO = "application/x-texinfo",
    TROFF = "application/x-troff",
    TROFF_MAN = "application/x-troff-man",
    TROFF_ME = "application/x-troff-me",
    TROFF_MS = "application/x-troff-ms",
    USTAR = "application/x-ustar",
    WAIS = "application/x-wais-source",
    HTML_CGI = "application/x-www-form-urlencoded",
    ZIP = "application/zip",

    // audio

    BASIC = "audio/basic",
    ECHOSPEECH = "audio/echospeech",
    TSI = "audio/tsplayer",
    VOX = "audio/voxware",
    AIFF = "audio/x-aiff",
    DSPEECH = "audio/x-dspeech",
    MIDI = "audio/x-midi",
    MPEG_AUDIO = "audio/x-mpeg",
    REALAUDIO = "audio/x-pn-realaudio",
    REALAUDIO_PLUGIN = "audio/x-pn-realaudio-plugin",
    QUICKTIME_AUDIO = "audio/x-qt-stream",
    WAV = "audio/x-wav",

    // drawing

    DRAWING = "drawing/x-dwf",

    // image

    BMP = "image/bmp",
    CIS_COD = "image/cis-cod",
    CMU_RASTER = "image/cmu-master",
    FIF = "image/fif",
    GIF = "image/gif",
    IEF = "image/ief",
    JPEG = "image/jpeg",
    PNG = "image/png",
    SVG = "image/svg+xml",
    TIFF = "image/tiff",
    VASA = "image/vasa",
    BITMAP_WAP = "image/vnd.wap.wbmp",
    FREEHAND = "image/x-freehand",
    ICON = "image/x-icon",
    PBM_ANYMAP = "image/x-portable-anymap",
    PBM_BITMAP = "image/x-portable-bitmap",
    PBM_GRAYMAP = "image/x-portable-graymap",
    PBM_PIXMAP = "image/x-portable-pixmap",
    RGB = "image/x-rgb",
    X_WINDOWS = "image/x-windowdump",
    XBM = "image/x-xbitmap",
    XPM = "image/x-xpixmap",

    // message

    EXTERNAL_BODY = "message/external-body",
    HTTP = "message/http",
    NEWS = "message/news",
    PARTIAL = "message/partial",
    RTC822 = "message/rtf822",

    // model

    VRML_MODEL = "model/vrml",

    // multipart

    ALTERNATIVE = "multipart/alternative",
    BYTERANGES = "multipart/byteranges",
    DIGEST = "multipart/digest",
    ENCRYPTED = "multipart/encrypted",
    FORM_DATA = "multipart/form-data",
    MIXED = "multipart/mixed",
    PARALLEL = "multipart/parallel",
    RELATED = "multipart/related",
    REPORT = "multipart/report",
    SIGNED = "multipart/signed",
    VOICE = "multipart/voice-message",

    // text

    CSV = "text/comma-separated-values",
    CSS = "text/css",
    HTML = "text/html",
    JAVASCRIPT = "text/javascript",
    PLAIN = "text/plain",
    RICHTEXT = "text/richtext",
    RTF_TEXT = "text/rtf",
    TSV = "text/tab-separated-values",
    WML = "text/vnd.wap.wml",
    WML_SCRIPT = "text/vnd.wap.wmlscript",
    XML_TEXT = "text/xml",
    XML_EXTERN = "text/xml-external-parsed-entity",
    SETEXT = "text/x-setext",
    SGML = "text/x-sgml",
    SPEECH = "text/x-speech",

    // video

    MPEG_VIDEO = "video/mpeg",
    MP4 = "video/mp4",
    QUICKTIME_VIDEO = "video/quicktime",
    VIVO = "video/vnd.vivo",
    WEBM = "video/webm",
    MSVIDEO = "video/x-msvideo",
    MOVIE = "video/x-sgi-movie",

    // workbook

    FORMULAONE = "workbook/formulaone",

    // x-world

    DMF_3 = "x-world/x-3dmf",
    VRML_X_WORLD = "x-world/x-vrml"
}

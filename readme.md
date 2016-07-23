# Data-CSS
A very light weight plugin (2.25kb only) that uses data attribute from selector data-css and creates  &lt;style#data-css/> tag inside the body. It is Helpful when you need to write some quick CSS but not inline. This package automatically generates the selector tag.

## How to use

####Include `jQuery` into html.

`<script type="text/javascript" src="../jquery/dist/jquery.min.js"></script>`

####Include `data-css.min.js` into html.

`<script src="dist/data-css.min.js"></script>`

####Add `data-css="property1:value1;property2:value2"`

####Example:

`<div data-css="Color:blue;background:#f00">Hello</div>`

##Currently supported CSS properties

`"azimuth","background-attachment","background-color","background-image","background-position","background-repeat","background","border-collapse","border-color","border-spacing","border-style","border-top","border-right","border-bottom","border-left","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","border-top-width","border-right-width","border-bottom-width","border-left-width","border-width","border","bottom","caption-side","clear","clip","color","content","counter-increment","counter-reset","cue-after","cue-before","cue","cursor","direction","display","elevation","empty-cells","float","font-family","font-size","font-style","font-variant","font-weight","font","height","left","letter-spacing","line-height","list-style-image","list-style-position","list-style-type","list-style","margin-right","margin-left","margin-top","margin-bottom","margin","max-height","max-width","min-height","min-width","orphans","outline-color","outline-style","outline-width","outline","overflow","padding-top","padding-right","padding-bottom","padding-left","padding","page-break-after","page-break-before","page-break-inside","pause-after","pause-before","pause","pitch-range","pitch","play-during","position","quotes","richness","right","speak-header","speak-numeral","speak-punctuation","speak","speech-rate","stress","table-layout","text-align","text-decoration","text-indent","text-transform","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-spacing","z-index"`


#Enjoy
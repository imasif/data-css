jQuery(function ($) {

    var validProps =
        [
            "azimuth",
            "background-attachment",
            "background-color",
            "background-image",
            "background-position",
            "background-repeat",
            "background",
            "border-collapse",
            "border-color",
            "border-spacing",
            "border-style",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-width",
            "border",
            "bottom",
            "caption-side",
            "clear",
            "clip",
            "color",
            "content",
            "counter-increment",
            "counter-reset",
            "cue-after",
            "cue-before",
            "cue",
            "cursor",
            "direction",
            "display",
            "elevation",
            "empty-cells",
            "float",
            "font-family",
            "font-size",
            "font-style",
            "font-variant",
            "font-weight",
            "font",
            "height",
            "left",
            "letter-spacing",
            "line-height",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "list-style",
            "margin-right",
            "margin-left",
            "margin-top",
            "margin-bottom",
            "margin",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "orphans",
            "outline-color",
            "outline-style",
            "outline-width",
            "outline",
            "overflow",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "padding",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "pause-after",
            "pause-before",
            "pause",
            "pitch-range",
            "pitch",
            "play-during",
            "position",
            "quotes",
            "richness",
            "right",
            "speak-header",
            "speak-numeral",
            "speak-punctuation",
            "speak",
            "speech-rate",
            "stress",
            "table-layout",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-transform",
            "top",
            "unicode-bidi",
            "vertical-align",
            "visibility",
            "voice-family",
            "volume",
            "white-space",
            "widows",
            "width",
            "word-spacing",
            "z-index"
        ];

    $('body').append('<style id="data-css" type="text/css"></style>');

    for (var i = 0; i < $('[data-css]').length; i++) {

        var $this = $('[data-css]:eq(' + [i] + ')');

        var cssArray = (!$this.data('css').endsWith(';')) ? ($this.data('css') + ';').split(';') : $this.data('css').split(';');

        cssArray = cssArray.filter(function (v) {
            return v !== '';
        });

        function validateCss(array) {
            var css = '';
            if (array.length > 0) {
                for (var j = 0; j < array.length; j++) {
                    if ($.inArray(array[j].split(':')[0].replace(/\s/g, ''), validProps) !== -1) {
                        css += array[j] + ';';
                    } else {
                        if (array[j].split(':')[0] !== "") console.log(array[j].split(':')[0] + ' is an invalid CSS property.');
                    }
                }
            }

            return css;
        }

        if (cssArray.length > 0) {
            $this.attr('data-css-id', (i + 1));


            $('#data-css').append('[data-css-id="' + $this.attr('data-css-id') + '"]' + '{' + validateCss(cssArray) + '}');

        }

    }
    $('[data-css]').removeAttr('data-css');

});
var FORMALIZE=function(a,b,c){var d="placeholder"in c.createElement("input"),e="autofocus"in c.createElement("input"),f=!!a.browser.msie&&parseInt(a.browser.version,10)===6,g=!!a.browser.msie&&parseInt(a.browser.version,10)===7;return{go:function(){for(var a in FORMALIZE.init)FORMALIZE.init[a]()},init:{full_input_size:function(){g&&a("textarea, input.input_full").length&&a("textarea, input.input_full").wrap('<span class="input_full_wrap"></span>')},ie6_skin_inputs:function(){if(f&&a("input, select, textarea").length){var b=/button|submit|reset/,c=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;a("input").each(function(){var d=a(this);this.getAttribute("type").match(b)?(d.addClass("ie6_button"),this.disabled&&d.addClass("ie6_button_disabled")):this.getAttribute("type").match(c)&&(d.addClass("ie6_input"),this.disabled&&d.addClass("ie6_input_disabled"))}),a("textarea, select").each(function(){this.disabled&&a(this).addClass("ie6_input_disabled")})}},autofocus:function(){e||!a(":input[autofocus]").length||a(":input[autofocus]:visible:first").focus()},placeholder:function(){!d&&!!a(":input[placeholder]").length&&(FORMALIZE.misc.add_placeholder(),a(":input[placeholder]").each(function(){var b=a(this),c=b.attr("placeholder");b.focus(function(){b.val()===c&&b.val("").removeClass("placeholder_text")}).blur(function(){FORMALIZE.misc.add_placeholder()}),b.closest("form").submit(function(){b.val()===c&&b.val("").removeClass("placeholder_text")}).bind("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})}))}},misc:{add_placeholder:function(){d||!a(":input[placeholder]").length||a(":input[placeholder]").each(function(){var b=a(this),c=b.attr("placeholder");(!b.val()||b.val()===c)&&b.val(c).addClass("placeholder_text")})}}}}(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()})

// Find all YouTube videos
var $allVideos = $("iframe[src^='http://www.youtube.com']"),
 
    // The element that is fluid width
    $fluidEl = $("article section");
 
// Figure out and save aspect ratio for each video
$allVideos.each(function() {
 
  $(this)
    .data('aspectRatio', this.height / this.width)
 
    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');
 
});
 
// When the window is resized
$(window).resize(function() {
 
  var newWidth = $fluidEl.width();
 
  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {
 
    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));
 
  });
 
// Kick off one resize to fix all videos on page load
}).resize();

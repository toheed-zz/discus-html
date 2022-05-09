function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  jQuery("path[id^=usjs]").each(function (i, e) {
    usaddEvent( jQuery(e).attr("id"));
  });
});
jQuery(function () {
  jQuery('#lakes').find('path').attr({'fill':usjsconfig.general.lakesFill}).css({'stroke':usjsconfig.general.lakesOutline});
});
function usaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#usjsvn" + arr.slice(4).join(""));
  jQuery("#" + ["visnames"]).attr({"fill":usjsconfig.general.visibleNames});
  _obj.attr({"fill":usjsconfig[id].upColor, "stroke":usjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (usjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#usjstip").show().html(usjsconfig[id].hover);
      _obj.css({"fill":usjsconfig[id].overColor});
    }, function () {
      jQuery("#usjstip").hide();
      jQuery("#" + id).css({"fill":usjsconfig[id].upColor});
    });
    if (usjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":usjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":usjsconfig[id].overColor});
      if (usjsconfig[id].target === "new_window") {
        window.open(usjsconfig[id].url);	
      } else if (usjsconfig[id].target === "same_window") {
        window.parent.location.href = usjsconfig[id].url;
      } else if (usjsconfig[id].target === "modal") {
        jQuery(usjsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#usjstip").outerWidth(), tiph =jQuery("#usjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#usjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#usjstip").outerWidth(), tiph =jQuery("#usjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":usjsconfig[id].downColor});
        jQuery("#usjstip").show().html(usjsconfig[id].hover);
        jQuery("#usjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":usjsconfig[id].upColor});
        if (usjsconfig[id].target === "new_window") {
          window.open(usjsconfig[id].url);
        } else if (usjsconfig[id].target === "same_window") {
          window.parent.location.href = usjsconfig[id].url;
        } else if (usjsconfig[id].target === "modal") {
          jQuery(usjsconfig[id].url).modal("show");
        }
      });
    }
	}
}
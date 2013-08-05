function getHtmlFromScript($context) {
  if (typeof $context == 'undefined') {
    $context = $('script[type="text/html"]');
  }
  else {
    if (typeof $context == 'string') {
      $context = $($context);
    }
    if (!$context.is('script')) {
      $context = $context.find('script[type="text/html"]');
    }
  }

  var text = '';
  $context.each(function() {
    text += $.trim($(this).html()).replace("//<![CDATA[", "").replace("//]]>", "").replace("<![CDATA[", "").replace("]]>", "");
  });
  var elements = $.parseHTML(text);

  return elements;
}

$.fn.htmlFromScript = function($context) {
  $(this).html(getHtmlFromScript($context));
  return this;
};

$.fn.appendFromScript = function($context) {
  $(this).append(getHtmlFromScript($context));
  return this;
};

$.fn.prependFromScript = function($context) {
  $(this).prepend(getHtmlFromScript($context));
  return this;
};

$.fn.afterFromScript = function($context) {
  $(this).after(getHtmlFromScript($context));
  return this;
};

$.fn.beforeFromScript = function($context) {
  $(this).before(getHtmlFromScript($context));
  return this;
};

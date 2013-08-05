jQuery.htmlFromScript
======================
jQuery.htmlFromScript is a jQuery plugin to attach html from script tags of type "text/html". This can be useful when you don't want to expose some html content, previously hidden by javascript or css, in case javascript or/and css are deactivated.

How to use it
--------------
Just link jQuery and the jquery.htmlFromScript javascript file. Then you can use the following functions from a jQuery object as the container you want to replace or insert html within:

* htmlFromScript()
* appendFromScript()
* prependFromScript()
* afterFromScript()
* beforeFromScript()

All these functions are equivalent to html(), append(), after(), etc., using the script tag selector as argument the argument for content.

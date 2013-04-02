Simple Jasmine Spec Runner
===========

Bootstrap your [Jasmine](http://pivotal.github.com/jasmine/) unit testing with a single script tag.

``` javascript
http://daniellmb.github.com/jasmine-run/jasmine-run.js
```

Just include the script file as this
[live example](http://daniellmb.github.com/jasmine-run/example/jasmin-run.html) shows, and your ready to run specs!

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Unit Tests</title>
</head>
<body>
    <!-- include jasmine-run -->
    <script type="text/javascript" src="http://daniellmb.github.com/jasmine-run/jasmine-run.js"></script>

    <!-- sources to test -->
    <script type="text/javascript" src="example.js"></script>

    <!-- specs to run -->
    <script type="text/javascript" src="example-specs.js"></script>
</body>
</html>
```

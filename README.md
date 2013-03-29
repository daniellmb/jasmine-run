jasmine-run (Jasmine Spec Runner in 1 line)
===========

Jasmine one-line embed. A single script to embed [jasmine](http://pivotal.github.com/jasmine/) and bootstrap your .

All you need to do is include one script file as this [live example](http://daniellmb.github.com/jasmine-run/example/jasmin-run.html) shows.

```
http://daniellmb.github.com/jasmine-run/jasmine-run.js
```

``` html
<!DOCTYPE html>
</html>
<head>
    <title>Jasmine Run</title>
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
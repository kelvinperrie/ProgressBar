# ProgressBar

This provides a jquery plugin for making vertical progress bars out of images. 
Once the progress bar has been created you can interact with it to set the current percentage as required. 

![Example 1](examples/Example1DuckProgress.gif?raw=true "example of duck")

![Example 2](examples/Example2PieProgress.gif?raw=true "example of pies")

# Getting started

* Add the js and css files from the src folder to your html (and you'll need jquery).

```
<script type="text/javascript" src="../src/jquery.progressbar.js"></script>
<link rel="stylesheet" type="text/css" href="../src/progressbar.css">
```

* Create the progress bar

```
var duckbar1 = $("#divDuck1").progressBar({
    imageUrl: 'images/duck.png',
    imageHeight: 290,
    imageWidth: 254
});
```

* Set the percentage complete when required e.g.
```
// to update percentage value to 15%
duckbar1.SetPercentage(15);
```

Some examples here http://htmlpreview.github.io/?https://github.com/kelvinperrie/ProgressBar/blob/master/examples/examples.html

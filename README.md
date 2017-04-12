# Swipe-Bar
Bar in in which you can swipe items like categories

# Configuration

Configuration is soo easy, you must edit two vars in swipe_bar.js

``` javascript
var category_bar_id = "#swipe-bar"; // ID or class your container whos contain your items
var category_item_class = ".swipe-item"; // Class which will have items

...
```

# Implementation

You must add container which will contain items

``` html
<div id="your-container-id" onselectstart="return false" onselect="return false">
  <div class="your-swipe-item-class"></div>
</div>
```

# Example
![Screenshot](showcast/example.gif)




var category_bar_id = "#swipe-bar";
var category_item_class = ".swipe-item";






$(document).ready(function()
{
  var category_bar = $(category_bar_id);
  var category_items = category_bar.children(category_item_class);
  var items_width;
  var width_offset;
  var offset;

  function calculate_widths()
  {
    items_width = category_items.length * category_items.width();

    width_offset = (items_width - category_bar.width()) * -1;
  }

  function check_move_borders()
  {
    // Move borders
    if(width_offset < 0)
    {
      if(offset >= 0) offset = 0;

      if(offset <= width_offset) offset = width_offset;
    }
    else
    {
      if(offset <= 0) offset = 0;

      if(offset >= width_offset) offset = width_offset;
    }
  }



  calculate_widths();



  if(width_offset != 0)
  {
    // Centering items
    category_items.css('left', width_offset/2 + 'px');

    // Registering events and callbacks
    function mousemove_callback(event)
    {
      if( ! mousemove_callback.status) return;

      var width_offset = (items_width - category_bar.width()) * -1;

      if(event.originalEvent.touches || event.originalEvent.changedTouches)  //Mobile
        event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];


      if(mousemove_callback.prev_position == -1)
        mousemove_callback.prev_position = event.pageX;


      offset = mousemove_callback.prev_position - event.pageX;

      mousemove_callback.prev_position = event.pageX;

      offset = parseInt(category_items.css('left')) - offset;


      check_move_borders();

      category_items.css('left', offset + 'px');
    }



    if(mousemove_callback.prev_position == undefined)
      mousemove_callback.prev_position = -1;

    if(mousemove_callback.status == undefined)
      mousemove_callback.status = false;

    category_bar.on('mousemove touchmove', mousemove_callback);

    category_bar.on('mousedown touchstart', function()
    {
      mousemove_callback.status = true;
    });

    $('body').on('mouseup touchend', function()
    {
      mousemove_callback.status = false;
      mousemove_callback.prev_position = -1;
    });



    // Keep move borders over resizing
    $(window).resize(function()
    {
      calculate_widths();

      offset = parseInt(category_items.css('left'));

      check_move_borders();

      category_items.css('left', offset + 'px');
    });
  }else {
    category_bar.css('cursor', 'default');
  }
});

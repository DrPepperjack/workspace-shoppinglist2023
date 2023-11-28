/*
 * Practice on Elements
 */
// get all the hot class elements- change them to cool class
$(".hot").each(function (){
  //this.setAttribute("class", "cool");
  $(this).removeClass("hot");
  // Add the cool class
  $(this).addClass("cool");
});

// traverse the elements
$("#add").click(addElement);
$("two").parent().next().prev().children("p").addClass("border");
// $("#two").next().next().text("Butterfingers")
// add a new element by clicking the plus sign
$("#plus").click(function() {
  addElement();
});
// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  $("add").click(addElement);
  // add a input text box
  $("#todo").append("<li><input type=\"text\"></li>");
  // whenever the user are done add the element
  $('input').blur(function () {
    var userinput = $(this).val();
    $(this).parent().addClass("cool");
    $(this).parent().text(userinput);
  });

}

// bind click with the event handler
document.getElementById('todo').addEventListener('click', changeStyle);

//  click the li element will change the changeStyle
$('li').click(changeStyle);

//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } else if ($(this).hasClass('hot')) {
    $(this).removeClass('hot');
    $(this).addClass('complete');
  } else {
    // Assuming 'warm' is a style to be added when not 'cool' or 'hot'
    $(this).addClass('warm');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);


function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').click(removeElement);
  // remove the marked elements
  $('li.complete').remove();
}

// Save the list to database
$("#save").click(function(){
  $(this).text("Saved");

  // Loop through each list item to save in the database
  $('#todo li').each(function(index) {
    var itemName = $(this).data('itemname'); // Fetching the item name from data attribute
    var userinput = $(this).text(); // Getting the text input by the user
    if (itemName && userinput) {
      db.collection("shoppinglist").add({
        itemName: itemName,
        userinput: userinput
      });
    }
  });
});

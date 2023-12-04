/*
 * Practice on Elements
 */

$(document).ready(function () {
// get all the hot class elements- change them to cool class
$(".hot").each(function () {
  $(this).removeClass("hot");
  $(this).addClass("cool");
});

// traverse the elements
$("#two").next().next().text("milk");

// add a new element by clicking the plus sign
$("#add").click(function () {
  addElement();
});
// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  $("#todo").append('<li><input type="text" /></li>');

  // whenever the user are done add the element
  $("input").blur(function () {
    var toAdd = $(this).val();
    $(this).parent().addClass("cool");
    $(this).parent().text(toAdd);
  });
  $("li").click(function () {
    changeStyle();
  });
}

  // Delegate the blur event on input to handle text addition
  $('#todo').on('blur', 'input', function() {
    var userinput = $(this).val();
    $(this).parent().addClass('cool').text(userinput);
  });

  // Toggle classes for li elements based on their current classes
  $('#todo').on('click', 'li', function() {
    $(this).toggleClass('cool complete');
  });

// bind click with the event handler
$("li").click(function () {
  changeStyle($(this).attr("id"));
});

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle(id) {
  if ($(`li #${id}`).hasClass("cool")) {
    $(`li #${id}`).removeClass("cool");
    $(`li #${id}`).addClass("complete");
  } else if ($(`li #${id}`).hasClass("complete")) {
    $(`li #${id}`).removeClass("complete");
    $(`li #${id}`).addClass("cool");
  }
}

// delete complete element by clicking the trash can
document.getElementById("remove").addEventListener("click", removeElement);

$('remove').click(function() {
$("li.complete").remove();
});

 // Save the list to the database
$('#save').click(function() {
  var listItems = [];
  $('#todo li').each(function() {
    listItems.push($(this).text().trim());
  });

  console.log('Saving...', listItems);

  listItems.forEach(function(item) {
    db.collection('shoppinglist').add({ item: item });
  });
});
});
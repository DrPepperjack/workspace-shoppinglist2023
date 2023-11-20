/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function() {
  //this.setAttribute("class", "cool");
  $(this).removeClass("hot");
  // Add the cool class
  $(this).addClass("cool");
});

// traverse the elements
// $("two").parent().next().prev().children("p").addClass("border");
  $("#two").next().next().text("Butterfingers")
// add a new element by clicking the plus sign
  $("#plus").clickfunction() {}
// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  
  // whenever the user are done add the element
  
};

// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {};

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
};

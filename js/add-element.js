/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function(){
  // javascript this.setAttribute("class", "cool");
  //remove hot class and add cool
  $(this).removeClass("hot");
  $(this).addClass("cool");
});
// traverse the elements
$("#two").next().next().text("Candy");
//$("#two").parent

// add a new element by clicking the plus sign
$("#add").click(addElement)


// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  $("#todo").append("<li> <input type=\"text\"> </li>");
  
  // whenever the user are done add the element
  $('input').blur(function(){
    var userinput = $(this).val();
    $(this).parent().addClass("cool");
    $(this).parent().text(userinput);
        
  });


}

// bind click with the event handler
$('li').click(changeStyle)

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if($(this).hasClass('cool')){
    $(this).removeClass("cool");
    $(this).addClass("complete");

  }
  else if($(this).hasClass('hot')){
    $(this).removeClass("hot");
    $(this).addClass("complete");

  }
  else if($(this).hasClass('warm')){
    $(this).removeClass("warm");
    $(this).addClass("complete");

  }

}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
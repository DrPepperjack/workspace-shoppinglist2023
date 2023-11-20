/*
 * Practice on Elements
 */
const myarray = [1,2,3,4,5];
myarray.push(10);
console.log(myarray);

// get all the hot class elements- change them to cool class
$(".hot").each(function (){
  //this.setAttribute("class", "cool");
  $(this).removeClass("hot");
  // Add the cool class
  $(this).addClass("cool");
});

// traverse the elements
$("#add").click(addElement);
// $("two").parent().next().prev().children("p").addClass("border");
// $("#two").next().next().text("Butterfingers")
// add a new element by clicking the plus sign
 $("#plus").clickfunction();
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
$('li').click(changeStyle);

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasclass(cool));
    $(this).removeClass();
  $(this).addClass('complete');
  ($(this).hasclass('warm'));
  $(this).removeClass();
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').click(removeElement);
}

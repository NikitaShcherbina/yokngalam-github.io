$(document).ready(function() { 
 $("A#trigger").click(function() { 
    $("A#trigger").css("color", "#777");
    $("A#trigger2").css("color", "#ccc");
    $("#box").fadeOut();
    $("#box4").css("display", "block");
    return false;
  });
  $("A#trigger2").click(function() { 
    $("A#trigger2").css("color", "#777");
    $("A#trigger").css("color", "#ccc");
    $("#box4").css("display", "none");
    $("#box").fadeIn();
    return false;
  });
  $(".Block3_div1").css("display", "none !important");
});


$(document).ready(function() {
   $("A#bottom1").click(function() {
        $("A#bottom1").css({"color": "#01a2a6","font-size": "23px"});
        $("A#bottom2").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom3").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom4").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom5").css({"color": "#ccc","font-size": "18px"});
        $("DIV#box2").fadeIn();
        $(".change_div1").css("display", "none");
        $(".change_div2").css("display", "none");
        $(".change_div3").css("display", "none");
        $(".change_div4").css("display", "none");
        return false;
      });
        $("A#bottom2").click(function() {
        $("A#bottom2").css({"color": "#01a2a6","font-size": "23px"});
        $("A#bottom1").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom3").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom4").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom5").css({"color": "#ccc","font-size": "18px"});
        $(".change_div1").fadeIn();
        $("DIV#box2").css("display", "none");
        $(".change_div2").css("display", "none");
        $(".change_div3").css("display", "none");
        $(".change_div4").css("display", "none");
        return false;
      });
          $("A#bottom3").click(function() {
        $("A#bottom3").css({"color": "#01a2a6","font-size": "23px"});
        $("A#bottom2").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom1").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom4").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom5").css({"color": "#ccc","font-size": "18px"});
        $(".change_div2").fadeIn();
        $("DIV#box2").css("display", "none");
        $(".change_div1").css("display", "none");
        $(".change_div3").css("display", "none");
        $(".change_div4").css("display", "none");
        return false;
      });
            $("A#bottom4").click(function() {
        $("A#bottom4").css({"color": "#01a2a6","font-size": "23px"});
        $("A#bottom2").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom3").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom1").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom5").css({"color": "#ccc","font-size": "18px"});
        $(".change_div3").fadeIn();
        $("DIV#box2").css("display", "none");
        $(".change_div2").css("display", "none");
        $(".change_div1").css("display", "none");
        $(".change_div4").css("display", "none");
        return false;
      });
              $("A#bottom5").click(function() {
        $("A#bottom5").css({"color": "#01a2a6","font-size": "23px"});
        $("A#bottom2").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom3").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom4").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom1").css({"color": "#ccc","font-size": "18px"});
        $(".change_div4").fadeIn();
        $("DIV#box2").css("display", "none");
        $(".change_div2").css("display", "none");
        $(".change_div3").css("display", "none");
        $(".change_div1").css("display", "none");
        return false;
      });
              $("A#bottom6").click(function(){
                  if($("A#bottom1").css("font-size") == "23px"){
                    $("A#bottom1").css({"color": "#ccc","font-size": "18px"});
                    $("A#bottom2").css({"color": "#01a2a6","font-size": "23px"});
                    $("DIV#box2").css("display", "none");
                    $(".change_div1").fadeIn();
                    $(".change_div2").css("display", "none");
                    $(".change_div3").css("display", "none");
                    $(".change_div4").css("display", "none");
                  }
                  else{
                    if($("A#bottom2").css("font-size") == "23px"){
                    $("A#bottom2").css({"color": "#ccc","font-size": "18px"});
                    $("A#bottom3").css({"color": "#01a2a6","font-size": "23px"});
                    $("DIV#box2").css("display", "none");
                    $(".change_div2").fadeIn();
                    $(".change_div1").css("display", "none");
                    $(".change_div3").css("display", "none");
                    $(".change_div4").css("display", "none");
                  }
                  else{
                    if($("A#bottom3").css("font-size") == "23px"){
                    $("A#bottom3").css({"color": "#ccc","font-size": "18px"});
                    $("A#bottom4").css({"color": "#01a2a6","font-size": "23px"});
                    $("DIV#box2").css("display", "none");
                    $(".change_div3").fadeIn();
                    $(".change_div2").css("display", "none");
                    $(".change_div1").css("display", "none");
                    $(".change_div4").css("display", "none");
                  }
                  else{
                    if($("A#bottom4").css("font-size") == "23px"){
                    $("A#bottom4").css({"color": "#ccc","font-size": "18px"});
                    $("A#bottom5").css({"color": "#01a2a6","font-size": "23px"});
                    $("DIV#box2").css("display", "none");
                    $(".change_div4").fadeIn();
                    $(".change_div2").css("display", "none");
                    $(".change_div3").css("display", "none");
                    $(".change_div1").css("display", "none");
                  }
                  }
                  }
                  }
                return false;             
      });
              $("A#bottom7").click(function() {
        $("A#bottom5").css({"color": "#01a2a6","font-size": "23px"});
        $("A#bottom2").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom3").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom4").css({"color": "#ccc","font-size": "18px"});
        $("A#bottom1").css({"color": "#ccc","font-size": "18px"});
        $(".change_div4").fadeIn();
        $("DIV#box2").css("display", "none");
        $(".change_div2").css("display", "none");
        $(".change_div3").css("display", "none");
        $(".change_div1").css("display", "none");
        return false;
      });
});








function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.style.opacity = "0.4";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $("#Drag").css("border", "none");
    $("#Drag p").text("");
    $("#Bromo").css("border", "1.4px solid #d5d57d");
}

$(document).ready(function() {
function handleDragStart(ev) {
  this.style.opacity = '0.4';
}

function handleDragEnter(ev) {

}

function handleDrop(ev) {

}

function handleDragEnd(ev) {
  this.style.opacity = '1';  // this / e.target is the source node.
}

var cols = document.querySelectorAll('#Bromo');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});
});




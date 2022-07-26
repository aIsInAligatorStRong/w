x = 0;
Y = 0;
draw_circle=" ";
draw_rect=" ";

var SpeechRecognition = window.webkitSpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start()
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;


document.getElementById("status").innerhtml = "The Speech has been recognized as" + content;
 if(content==circle)
{
    x =()
}   y =
}
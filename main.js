
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function my_start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;


    if ((content == "circle") || (content == "Circle") ||(content == "circle.") || (content == "Circle.")) {
        y = Math.floor(Math.random() * 500);
        x = Math.floor(Math.random() * 800);
        document.getElementById("status").innerHTML = "Drawing Circle";
        draw_circle = "set";
    }


    if ((content == "rectangle") || (content == "Rectangle") || (content == "rectangle.") || (content == "Rectangle.")) {
        y = Math.floor(Math.random() * 500);
        x = Math.floor(Math.random() * 800);
        document.getElementById("status").innerHTML = "Drawing Rectangle";
        draw_rect = "set";
    }
}

function setup() {

    canvas = createCanvas(800, 500);

}


function draw() {

    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if (draw_rect == "set") {
        width = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 100);
        rect(x, y, width, height);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }

}
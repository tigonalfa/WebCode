function outputText() {
    var inputText = document.getElementById("textIndex").value;
    var h1Element = document.getElementById("text-1");
    h1Element.textContent = inputText;
}

function outputText2() {
    var inputText = document.getElementById("textIndex2").value;
    var h1Element = document.getElementById("text-2");
    h1Element.textContent = inputText;
}

function fontChoice1() {
    var headingElement1 = document.getElementById("text-1");
    headingElement1.style.fontFamily = "'Borel', cursive";

    var headingElement2 = document.getElementById("text-2");
    headingElement2.style.fontFamily = "'Borel', cursive";
}


function fontChoice2() {
    var headingElement1 = document.getElementById("text-1");
    headingElement1.style.fontFamily = "'Arial'";

    var headingElement2 = document.getElementById("text-2");
    headingElement2.style.fontFamily = "'Arial', sans-serif";

}

function fontChoice3() {
    var headingElement1 = document.getElementById("text-1");
    headingElement1.style.fontFamily = "'Comic Sans MS', sans-serif";

    var headingElement2 = document.getElementById("text-2");
    headingElement2.style.fontFamily = "'Comic Sans MS'";
}

function changeCol() {
    const selectedColor = document.getElementById("colSelector").value;
    const newcolor = document.getElementById("text-1");
    const newcolor2 = document.getElementById("text-2");

    newcolor.style.color = selectedColor;
    newcolor2.style.color = selectedColor;
}

function changeImg() {
    const selectedImage = document.getElementById("imgSelector").value;
    const resizableImage = document.getElementById("imgchg");

    imgchg.src = selectedImage;
}

function changeSize() {
    const fontSize = document.getElementById("slider").value;
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");

    text1.style.fontSize = fontSize + "px";
    text2.style.fontSize = fontSize + "px";

}



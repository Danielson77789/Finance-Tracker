function submit() {
    //creates varibles of input
    var title = document.getElementById('title');
    var date = document.getElementById('date');
    var price = document.getElementById('price');
    
    
    //creates varibles for output
    var newDiv = document.createElement("div");
    var output = title.value + date.value + '$' + price.value;
    var newText = document.createTextNode(output);
    newDiv.appendChild(newText);
    newDiv.id = "test";

    //output
    const currentDiv = document.getElementById("output-div");
    currentDiv.appendChild(newDiv);
}
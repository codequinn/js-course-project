function myFunction() {
    var h = document.createElement("h1");
    var t = document.createTextNode("dom is the best");

    h.appendChild(t);
    document.body.appendChild(h);
    
}
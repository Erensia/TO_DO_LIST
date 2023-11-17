var num = 0;
function upload() {
    var inputValue = document.getElementById("input-list").value;
    var show = document.getElementById("show");

    var newParagraph = document.createElement("p");
    var str = ++num;
    var numberNode = document.createTextNode(str);
    newParagraph.appendChild(numberNode);

    var spaceNode1 = document.createTextNode(" ");
    var spaceNode2 = document.createTextNode(" ");
    newParagraph.appendChild(spaceNode1);
    var textNode = document.createTextNode(inputValue);
    newParagraph.appendChild(textNode);
    newParagraph.appendChild(spaceNode2);
    newParagraph.style.textDecoration = "none";
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-primary");
    deleteButton.classList.add("btn-sm");
    deleteButton.addEventListener("click", function () {
        show.removeChild(newParagraph);
    });
    newParagraph.appendChild(deleteButton);

    newParagraph.addEventListener("click", function () {
        if (newParagraph.style.textDecoration == "none") {
            newParagraph.style.textDecoration = "line-through";
        } else {
            newParagraph.style.textDecoration = "none";
        }
    });
    

    show.appendChild(newParagraph);
    document.getElementById("input-list").value = "";
}

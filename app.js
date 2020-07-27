document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        console.log("enter clicked");
        newItem();
    }
}

function newItem() {
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);

    var ul = document.getElementById("list");

    var li = document.createElement("li");
    li.className = "notDoneYet";
    var icon = document.createElement("i");
    icon.className = "fa-li fa fa-square-o";
    console.log(icon);
    li.appendChild(icon);
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);

    document.getElementById("input").value = "";

    li.onclick = doItem;
};

function doItem(e) {
    if (e.target.tagName == "I") {
        console.log("worked");
        var target = e.target.parentElement;
        console.log(target);
    } else {
        var target = e.target;
    }
    var doneList = document.getElementById("donelist");
    var done = document.createElement("li");
    var icon = document.createElement('i');
    icon.className = "fa-li fa fa-check-square-o";
    var text = target.lastChild.nodeValue;
    done.appendChild(icon)
    done.appendChild(document.createTextNode(text));
    //console.log(e.target);
    doneList.appendChild(done);
    target.remove();
}
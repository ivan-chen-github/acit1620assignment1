// Javascript for index.html


const notesArray = 
[
    {title:"note one", body:"some text 1"},
    {title:"note two", body:"some text 2"}
];


function darkMode() {
    let body = document.querySelector("body");
    let newNote = document.querySelector("#new");
    let save = document.querySelector("#save");
    let nav = document.querySelector("nav");
    let section = document.querySelector("main");
    let notes = document.querySelector(".notes");
    let textBox = document.querySelector("#text");
    let cancel = document.querySelector("#cancel");
    let dark = document.querySelector("#dark");
    let footer = document.querySelector("footer");
    if (!(newNote.style.backgroundColor == "darkolivegreen")) {
        body.style.backgroundColor = "black";
        newNote.style.backgroundColor = "darkolivegreen";
        save.style.backgroundColor = "darkolivegreen";
        nav.style.backgroundColor = "gray";
        section.style.backgroundColor = "grey";
        notes.style.backgroundColor = "darkgray";
        textBox.style.backgroundColor = "darkgray";
        cancel.style.backgroundColor = "maroon";
        dark.innerHTML = "Light Theme";
        footer.style.backgroundColor = "rosybrown";
    }
    else {
        body.style.backgroundColor = "white";
        newNote.style.backgroundColor = "rgb(95, 152, 125)";
        save.style.backgroundColor = "rgb(95, 152, 125)";
        nav.style.backgroundColor = "rgb(192, 192, 192)";
        nav.style.color = "black";
        section.style.backgroundColor = "rgb(236, 232, 232)";
        notes.style.backgroundColor = "white";
        textBox.style.backgroundColor = "white";
        textBox.style.color = "black";
        cancel.style.backgroundColor = "rgb(210, 60, 34)";
        dark.innerHTML = "Dark Theme";
        footer.style.backgroundColor = "rgb(223, 188, 184)";
    }
}


function cancel() {
    let notes = document.querySelector(".notes");
    let bottomButtons = document.querySelector(".bottom_buttons");
    if (bottomButtons.style.display == "flex" || bottomButtons.style.display == "") {
        bottomButtons.style.display = "none";
        notes.style.display = "none";
    }
}


function newNote() {
    let notes = document.querySelector(".notes");
    let bottomButtons = document.querySelector(".bottom_buttons");
    let textBox = document.querySelector("#text");
    if (bottomButtons.style.display == "none"){
        bottomButtons.style.display = "flex";
        notes.style.display = "flex";
    }
    else{
        textBox.value = "";
    }
}


function save() {
    let newestList = document.querySelector("nav > ul > li:last-child");
    let textBox = document.querySelector("#text");
    var title = textBox.value.split("\n")[0];
    let newObj = {title: title, body: textBox.value};
    notesArray.push(newObj);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = title;
    newListItem.id = "note"+notesArray.length;
    newListItem.addEventListener('click', function(){update(this); }, false);
    newestList.after(newListItem);
}


function update(saved) {
    let textBox = document.querySelector("#text");
    let index = saved.id;
    index = index.replace("note", "") - 1;
    textBoxObj = notesArray[index];;
    textBox.value = textBoxObj.body;
}


function init(){
    let note1 = document.querySelector("#note1");
    let note2 = document.querySelector("#note2");
    note1.addEventListener('click', function(){update(this); }, false);
    note2.addEventListener('click', function(){update(this); }, false);
}

init()

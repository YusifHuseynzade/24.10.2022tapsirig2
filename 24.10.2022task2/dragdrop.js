let fruits = document.querySelectorAll('.itemfruit');
let vegetables = document.querySelectorAll('.itemvegetable');
let fruitsarea = document.querySelector('.area1');
let vegetablesarea = document.querySelector('.area2');
let fruitandvegetablesarea = document.querySelector('.area3');

let dragItem;
for(let item of fruits) {
    item.ondragstart = () => 
    dragItem = item;
}

fruitsarea.ondragover = a => {
    a.preventDefault();
}

fruitsarea.ondrop = () => {
    fruitsarea.appendChild(dragItem);
}

let dragItem2;
for(let item2 of vegetables) {
    item2.ondragstart = () => 
    dragItem2 = item2;
}

vegetablesarea.ondragover = a => {
    a.preventDefault();
}

vegetablesarea.ondrop = () => {
    vegetablesarea.appendChild(dragItem2);
}

    fruitsarea.addEventListener("dragstart", dragstart);
    fruitsarea.addEventListener("dragover", dragOver);
    fruitsarea.addEventListener("dragleave", dragLeave);
    vegetablesarea.addEventListener("dragstart", dragstart2);
    vegetablesarea.addEventListener("dragover", dragOver2);
    vegetablesarea.addEventListener("dragleave", dragLeave2);

function dragstart(a) {
    a.preventDefault();
    alert("Yerlesdirdiyiniz sekli tekrar drag ede bilmezsiniz.")
}

function dragstart2(a) {
    a.preventDefault();
    alert("Yerlesdirdiyiniz sekli tekrar drag ede bilmezsiniz.")
}

function dragOver(a) {
    a.preventDefault();
    this.className += " dashed background";
}

function dragLeave() {
    this.classList.remove('dashed');
    this.classList.remove('background');
}

function dragOver2(a) {
    a.preventDefault();
    this.className += " dashed background2";
}

function dragLeave2() {
    this.classList.remove('dashed');
    this.classList.remove('background2');
}



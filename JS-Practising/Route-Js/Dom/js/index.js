
let items = Array.from(document.querySelectorAll(".item img"));
let lightBox = document.querySelector("#lightBoxContainer");
let boxItem = document.querySelector("#boxItem");

let currentIndx = 0;
for (let i = 0; i < items.length; i++) {

    items[i].addEventListener("click", function (e) {

        currentIndx = items.indexOf(e.target);
        let newSrc = e.target.getAttribute('src');
        boxItem.style.backgroundImage = `url(${newSrc})`;
        lightBox.classList.remove('d-none');
        lightBox.classList.add('d-flex');

    })
}

// Close LightBox Container

let esc = document.getElementById("close");

esc.addEventListener('click', function () {
    closeBox();
})

function closeBox() {
    lightBox.classList.remove('d-flex');
    lightBox.classList.add('d-none');
}

// Get Next Item By Right Arrow ; 

let arrowRight = document.getElementById('next');

arrowRight.addEventListener('click', function () {
    getNext();
})

function getNext() {

    if (currentIndx == items.length - 1) {
        currentIndx = 0;
    }
    currentIndx++;
    let nwSrc = items[currentIndx].getAttribute('src');
    boxItem.style.backgroundImage = `url(${nwSrc})`;
}

//Get Previous Item From Array 

let arrowLeft = document.getElementById('prev');

arrowLeft.addEventListener("click", function () {
    getPrevious();
})

function getPrevious() {

    currentIndx--;
    if (currentIndx < 0) {
        currentIndx = (items.length - 1);
    }


    let nwSrc = items[currentIndx].getAttribute('src');
    boxItem.style.backgroundImage = `url(${nwSrc})`;


}



/////////////////////////////////////////////////////

//Esc ,Right ,Left --> Using Keyboard  ; 

document.addEventListener("keydown", function (e) {
    if (e.key == 'Escape') {
        closeBox();
    }
    if (e.key == 'ArrowRight') {
        getNext();
    }
    if (e.key == 'ArrowLeft') {
        getPrevious();
    }
})
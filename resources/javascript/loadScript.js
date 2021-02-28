var ldst = Date.now();

function onManImgLoad(domElement) {
    removeClass(domElement.parentElement, "hideFeatures");
}

function removeClass(domElem, cls) {
    var classes = domElem.className.split(" ");
    classes.splice(classes.indexOf(cls), 1);
    domElem.className = classes.join(" ");
}
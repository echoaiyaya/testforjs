let labels = document.querySelectorAll(".controls-visible>label");
let imgs = document.querySelectorAll(".slide>img");
let btnLabel = document.querySelector("#btn-labels");
let picWidth = 1000;
let defaultLablesImgHeight = 100;

//init all images display status
let initImg = () => {
  imgs.forEach((v,k) => {
    if(v.hasAttribute("checked")) {
      v.style.display = "block";
      labels[k].style.height = defaultLablesImgHeight + 5 + "px";
    } else {
      v.style.display = "none";
      labels[k].style.height = defaultLablesImgHeight + "px";
    }
  });
};

//let all images to display none
let clearChecked = () => {
  imgs.forEach(v => {
    v.removeAttribute("checked");
  });
  initImg();
};


let imgHidden = () => {
  imgs.forEach(v => {
    v.style.display = "none";
  });
}

let imgDisplay = index => {
  imgs[index].style.display = "block";
}

//add mouseover and mouseout and click events to labels that can control all images display status
labels.forEach((v,k) => {
  v.addEventListener('mouseover', () => {
    imgHidden();
    imgDisplay(k);
  });
  v.addEventListener('mouseout', () => {
    imgHidden();
    initImg();
  });
  v.addEventListener('click', () => {
    clearChecked();
    imgs[k].setAttribute("checked", null);
    initImg();
  });
});


//about show or hide labels
let btnLabelFun = () => {
  btnLabel.onclick = () => {
    let labelParent = labels[0].parentElement;
    if (labelParent.hasAttribute("checked")) {
      labelParent.removeAttribute("checked");
      labelParent.style.height = 0;
      labelParent.style.padding = 0;
    } else {
      labelParent.setAttribute("checked","");
      labelParent.style.height = "100px";
      labelParent.style.padding = "10px 5px";
    }
  };
};

initImg();
btnLabelFun();
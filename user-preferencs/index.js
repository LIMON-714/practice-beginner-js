///alert("hello all");


const selectFontSize= document.getElementById("selectFontSize");
const selectBgcColor = document.getElementById("selectBgcColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");
const para = document.querySelector("p");
const para2 = document.querySelector("p1");



const setValus = (selectedfontSize,selectedbgColor) => {
    selectFontSize.value =  selectedfontSize ;
    selectBgcColor.value = selectedbgColor;
    mainElement.style.fontSize= selectedfontSize;
    para.style.background= selectedbgColor;

}



// count localStorage value
const initialValue =()=>{
  const selectedbgColor =  localStorage.getItem("BgcColor");
  const selectedfontSize = localStorage.getItem("fontSize");

  if ( selectedbgColor  && selectedfontSize){
    setValus(selectedfontSize,selectedbgColor);
      
  }
  if (!selectedbgColor  && !selectedfontSize){
     setValus("16px","aqua");
  }
  if (!selectedbgColor  && selectedfontSize){
    setValus(selectedfontSize,"aqua");
 }
 if (selectedbgColor  && !selectedfontSize){
    setValus("16px",selectedbgColor );
 }
}






// changeFontSize
const changeFontSize= (event)=>{
    const selectedFontSize= event.target.value
    mainElement.style.fontSize= selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize);
}


// changecolor
const changeBgcColor= (event)=>{
    const selectBgcColor= event.target.value
    para.style.background= selectBgcColor;
    localStorage.setItem("BgcColor",selectBgcColor);
    
}

// local storade
const clearLocalStorage=()=>{
    localStorage.removeItem("BgcColor");
    localStorage.removeItem("fontSize");
    setValus("16px","aqua");

}



// add event listeners
selectFontSize.addEventListener("change",changeFontSize);
selectBgcColor.addEventListener("change",changeBgcColor);
resetButton.addEventListener("click",clearLocalStorage);


initialValue ();
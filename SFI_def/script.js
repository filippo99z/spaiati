function gira(element){
    let counter = document.getElementById("counter").textContent;
    console.log(counter);
    if(counter<3){
        counter++;

        document.getElementById("counter").innerHTML = counter;
        element.style.display ="none";
        let fronte = element.nextElementSibling;
        fronte.style.display ="block";
    }else{
        console.log("non puoi girare più carte");
    }


}
function slide() {
    let img =document.getElementById("roll1");
    img.classList.add("roll-out-left");
}
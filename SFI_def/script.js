var counter =0;
var counterSm = 0;
var cards = [];
function gira(element){
    let counter = document.getElementById("counter").textContent;
    console.log(counter);
    if(counter<3){
        counter++;


        document.getElementById("counter").innerHTML = counter;
        element.style.display ="none";
        let fronte = element.nextElementSibling;
        console.log(fronte.getAttribute("value"))
        let value = fronte.getAttribute("value")
        cards.push(value);
        if (counter ==3){
            checkWin(cards);
        }
        fronte.style.display ="block";

    }else{
        alert("hai gia gitato il numero massimo di carte!")
    }


}
function checkWin(array){
    //let audio = new Audio('');  decidere audio vittoria
    if(array[0] == array[1] && array[1]==array[2]){
        console.log("hai vintoooo!");
        document.getElementById("overlay").style.display="block";
        confetti.start();
       // audio.play()
        setTimeout(function (){
            document.getElementById("overlay").style.display="none";
            confetti.stop();
           // audio.pause();
        },6000)
    }

}

function slideOut() {
    console.log("cliccato");
    if(counter<7){
    counter++;
    console.log("slide out"+counter);
    let idPhoto = "roll"+counter
    let img =document.getElementById(idPhoto);

        if (counter%2 ==0){
            img.classList.remove("roll-in-left");
            img.classList.add("roll-out-left");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }else{
            img.classList.remove("roll-in-right");
            img.classList.add("roll-out-right");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }
    }

}
function slideIn() {
    if (counter>0) {
        console.log("slide in"+counter);

        let idPhoto = "roll" + counter
        let img = document.getElementById(idPhoto);

        if (counter % 2 == 0) {
            img.classList.add("roll-in-left");
            img.style.display = "block";


        } else {
            img.classList.add("roll-in-right");
            img.style.display = "block";

        }
        counter--;
    }
}

function slideOutSm() {
    console.log("cliccato");
    if(counterSm<7){
        counterSm++;
        console.log("slide out"+counter);
        let idPhoto = "rollsm"+counterSm
        let img =document.getElementById(idPhoto);

        if (counterSm%2 ==0){
            img.classList.remove("roll-in-left");
            img.classList.add("roll-out-left");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }else{
            img.classList.remove("roll-in-right");
            img.classList.add("roll-out-right");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }
    }

}
function slideInSm() {
    if (counterSm>0) {
        console.log("slide in"+counterSm);

        let idPhoto = "rollsm" + counterSm
        let img = document.getElementById(idPhoto);

        if (counterSm % 2 == 0) {
            img.classList.add("roll-in-left");
            img.style.display = "block";


        } else {
            img.classList.add("roll-in-right");
            img.style.display = "block";

        }
        counterSm--;
    }
}
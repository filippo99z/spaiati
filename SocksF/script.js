var counter =0;
var counterSm = 0;
var cards = [];
var questions =["Sei più un tipo da colazione salata o dolce?", "Quale animale pensi descriva meglio la tua personalità?", "Il tuo superpotere ideale sarebbe:", "Qual è la tua stagione preferita?", "Scegli un colore che ti descrive meglio:", "Quale genere musicale rappresenta meglio la tua vita?"];
var answers =["Salata come una torta di patate", "Dolce come una ciambella ricoperta di zucchero", "Una colazione mista, come un brunch gourmet", "Nessuna delle precedenti, preferisco il pranzo!", "Leopardo - elegante e indipendente", "Papero - socievole e vivace", "Gufo - saggio e riflessivo", "Pinguino - sempre pronto per una festa", "Invisibilità", "Teletrasporto","Lettura del pensiero","Capacità di volare","Primavera - rinascita e fioriture","Estate - sole, mare, e relax","Autunno - colori caldi e accoglienti","Inverno - neve e atmosfera natalizia","Rosso - audace e appassionato","Blu - calmo e riflessivo","Giallo - allegro e ottimista","Nero - elegante e misterioso","Rock","Pop","Jazz","Elettronica"];
var quizcounter = 0;

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

function change(foto){
    let swap;
    let thumbnail = document.getElementById("thumbanil_active");
    swap = thumbnail.src;
    thumbnail.src= foto.src;
    foto.src = swap;
}

function addP(bottone){
    let counter = document.getElementById("p_counter").textContent;
        if(bottone.id == "less"){
            if (counter !=1){
                counter--;
                document.getElementById("p_counter").innerHTML = counter;
            }
        }else{
            counter++;
            document.getElementById("p_counter").innerHTML = counter;
        }
}


function quizNext(){

    if (quizcounter < questions.length -1) {
        console.log("hai premuto")
        quizcounter++;
        console.log(questions[quizcounter])
        document.getElementById("question").innerHTML = questions[quizcounter];
        console.log(answers[(quizcounter*4)+1]);
        document.getElementById("a1").innerHTML = answers[(quizcounter*4)];
        document.getElementById("a2").innerHTML = answers[(quizcounter*4)+1];
        document.getElementById("a3").innerHTML = answers[(quizcounter*4)+2];
        document.getElementById("a4").innerHTML = answers[(quizcounter*4)+3];
        document.getElementById("exampleRadios1").checked = false;
        document.getElementById("exampleRadios2").checked = false;
        document.getElementById("exampleRadios3").checked = false;
        document.getElementById("exampleRadios4").checked = false;
        document.getElementById("bar").style.width=16.7*(quizcounter+1)+"%";

    }
    displayButton();
}
function quizBack(){
    if (quizcounter > 0) {

        console.log("hai premuto")
        quizcounter--;
        console.log(questions[quizcounter])
        document.getElementById("question").innerHTML = questions[quizcounter];
        console.log(answers[(quizcounter*4)+1]);
        document.getElementById("a1").innerHTML = answers[(quizcounter*4)];
        document.getElementById("a2").innerHTML = answers[(quizcounter*4)+1];
        document.getElementById("a3").innerHTML = answers[(quizcounter*4)+2];
        document.getElementById("a4").innerHTML = answers[(quizcounter*4)+3];
        document.getElementById("exampleRadios1").checked = false;
        document.getElementById("exampleRadios2").checked = false;
        document.getElementById("exampleRadios3").checked = false;
        document.getElementById("exampleRadios4").checked = false;
        document.getElementById("bar").style.width=16.7*(quizcounter+1) +"%";
    }
    displayButton();
}

function displayButton (){
    if (quizcounter==5) {
        let button = document.getElementsByClassName("gbottoneForm");

        console.log(button)
        button[0].style.display = "block";
    }else{
        let button = document.getElementsByClassName("gbottoneForm");


        button[0].style.display = "none";
    }
}

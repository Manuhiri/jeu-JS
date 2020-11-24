// Décalration des constante
//buisson (tableau)
const clouds = document.querySelectorAll(".hole");
//affichage du score
const scoreBoard = document.querySelector(".score");
//la tête
const heads = document.querySelectorAll(".head");

//pour enregistrer le nuage sélectionner
let lastCloud;

// pour tester si le jeux est terminé
let timeUp = false;
//initialisation du score
let score = 0;

//fonction qui nous créer un temps alléatoire
function randomTime(min, max){
    return Math.round(Math.random()*(max-min) + min);
};

//fonction qui nous permet de faire apparaittre dans un nuage
function randomCloud(clouds){
    //je génére des chiffre entre 1 et 6
    const indexCloud = Math.floor(Math.random()*clouds.length);
    //je récupère le nuage qui m'intéresse
    const cloudSelect = clouds[indexCloud];

    if (cloudSelect=== lastCloud){
        //phénomène de récursion on réappel la fonction dans la quelle nous sommes
        return randomCloud(clouds);
    }

    lastCloud = cloudSelect;

    return cloudSelect;
};

//fonction qui nous permet de sortir la tête
function showHead1(){
    const time = randomTime( 600, 1000);
    const cloud = randomCloud(clouds);
    //affichage de la tête, en intégrant un nouvelle dans le DOM
    cloud.classList.add("up");
    //fonction call back autre méthode d'écriture: (()=>{ },)
    setTimeout(()=>{
        if(!timeUp) showHead1();
        cloud.classList.remove("up");
    }, time);
}

function showHead2(){
    const time = randomTime( 500, 800);
    const cloud = randomCloud(clouds);
    //affichage de la tête, en intégrant un nouvelle dans le DOM
    cloud.classList.add("up");
    //fonction call back autre méthode d'écriture: (()=>{ },)
    setTimeout(()=>{
        if(!timeUp) showHead2();
        cloud.classList.remove("up");
    }, time);
}

function showHead3(){
    const time = randomTime( 250, 500);
    const cloud = randomCloud(clouds);
    //affichage de la tête, en intégrant un nouvelle dans le DOM
    cloud.classList.add("up");
    //fonction call back autre méthode d'écriture: (()=>{ },)
    setTimeout(()=>{
        if(!timeUp) showHead3();
        cloud.classList.remove("up");
    }, time);
}

//Affichage du score
function playerScore(event){
    if(!event.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;

}


//Function pour noter le score, le for each me permettre de parcourir mon tableau

heads.forEach(head => head.addEventListener("click",playerScore));

//créer une fonction pour démarer le jeux
function startGame1(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead1 ();
    setTimeout(()=>{
        timeUp = true;
        setTimeout(()=> {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

function startGame2(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2 ();
    setTimeout(()=>{
        timeUp = true;
        setTimeout(()=> {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

function startGame3(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3 ();
    setTimeout(()=>{
        timeUp = true;
        setTimeout(()=> {
            scoreBoard.textContent = "end";
        }, 2000);
    }, 10000);
}

// création des 3 niveau de difficulter
const speed = 50;
var i=0;
var text1 = "Novice";

var j=0;
var text2 = "Apprenti";

var k=0;
var text3 = "Expert";
// Novice
function typeWriter1(){
    if(i<text1.length){
        document.getElementById("demo1").innerHTML +=text1.charAt(i);
        i++;
        setTimeout(typeWriter1,speed);
    }
}
// Apprenti
function typeWriter2(){
    if(j<text2.length){
        document.getElementById("demo2").innerHTML +=text1.charAt(j);
        j++;
        setTimeout(typeWriter2,speed);
    }
}
//Expert
function typeWriter3(){
    if(k<text3.length){
        document.getElementById("demo3").innerHTML +=text3.charAt(k);
        k++;
        setTimeout(typeWriter3,speed);
    }
}

function myClick(){
    for(var i=1; i<=3; i++){
        document.getElementById("demo"+i).addEventListener("click", function(){
            document.getElementById("demo1").style.display ="none";
            document.getElementById("demo2").style.display ="none";
            document.getElementById("demo3").style.display ="none";
        });
    }
}

//Afficher les différent niveau
document.getElementById("morty-play").addEventListener("click", function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
})
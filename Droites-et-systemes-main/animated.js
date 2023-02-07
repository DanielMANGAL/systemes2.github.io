import { InsertData} from "/connexion.js"
import { verif, chePa} from "/main.js"
import {liste} from "/connexion.js"
import { active} from "/connexion.js"
import { ancienneNote } from "/connexion.js"
let no=document.getElementById("non")
let yes =document.getElementById("yes")
let congrulations = document.getElementById("congrulations")
let endBravo = document.getElementById("endBravo")
const modal= document.querySelector('.modal')
const jsConfetti = new JSConfetti()
let son= document.querySelectorAll('.son')
let newTiming=0
let blue=0
// console.log('T1' +newTiming)
// newTiming+=0.23
// console.loog('T2'+newTiming)
let welcomeSound= document.getElementById("myAudio")

let welcomeBackground = document.getElementById("welcomeBackground")
let soundEq1 = document.getElementById("soundEq1")
let background1 =  document.getElementById("background1")
let soundEq2 = document.getElementById("soundEq2")
let background2 =  document.getElementById("background2")
let soundEq3 = document.getElementById("soundEq3")
let background3 =  document.getElementById("background3")
let soundEq4 = document.getElementById("soundEq4")
let background4 =  document.getElementById("background4")
let soundEq5 = document.getElementById("soundEq5")
let background5 =  document.getElementById("background5")
let soundEq6 = document.getElementById("soundEq6")
let background6 =  document.getElementById("background6")

let presentation =  document.getElementById("presentation")
let presentationBackground = document.getElementById("presentationBackground")
let attention =document.getElementById("attention")
let attentionBackground = document.getElementById("attentionBackground")
let stade1 =document.getElementById("stade1")
let stade2 =document.getElementById("stade2")
let stade3 =document.getElementById("stade3")
let stade4 =document.getElementById("stade4")

let image= document.getElementById("image")
let images= document.querySelectorAll(".image")

let stade=  document.querySelectorAll('.etapes')

var elem = document.querySelector('body');
let time=600
//reduce
const secondes =document.getElementById('secondes')
const minutes = document.getElementById('minutes')
const afficheTiming = document.getElementById('afficheTiming')
afficheTiming.innerHTML=time
function setTime(){
    const timing= time-1
    const secondes2= timing
    const secondes3= timing%60
    const minutes3=Math.floor(timing/60)
    time=secondes2
  
    // const minutes2= (timing/60).toFixed(0)
    secondes.innerHTML=secondes3
    minutes.innerHTML=minutes3
}


function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
function confettiFY(){
    jsConfetti.addConfetti()
}
function confettiBoucle(){
    setTimeout(confettiFY,0 )
    setTimeout(confettiFY, 200)
    setTimeout(confettiFY,400 )
    setTimeout(confettiFY, 600)
    setTimeout(confettiFY, 1000)
    setTimeout(confettiFY, 1300)
    setTimeout(confettiFY, 1700)
    setTimeout(confettiFY, 2000)
    setTimeout(confettiFY,0 )
    setTimeout(confettiFY, 2200)
    setTimeout(confettiFY,2400 )
    setTimeout(confettiFY, 2900)
    setTimeout(confettiFY, 3300)
    setTimeout(confettiFY, 4000)
    setTimeout(confettiFY, 6000)
    setTimeout(confettiFY, 9000)
}

 function reduce(number,denomin){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(number,denomin);
    
  if(denomin==gcd){
    console.log(gcd)
    return number/gcd
    
  }
  else{
   
        if(denomin/gcd<0){
            return -number/gcd +"/"+ -denomin/gcd
        }
        else {
            return number/gcd +"/"+ denomin/gcd
        }

  }

  }
console.log('test '+reduce(265,-143))


function mauvaiseReponse(){
    modal.style.display= "block"
    setTimeout(retireAffiche,1000)
    no.play()

}

function bonneReponse(){
    yes.play()
}
function reussiReponses(){
    endBravo.play()
    congrulations.play()
    confettiBoucle()
}
 function retireAffiche(){
    modal.style.display= "none"
 }

 function nombreConstants(){
    modal2.style.display= "block"
    setTimeout(retireAffiche2,500)
 }

 function retireAffiche2(){
    modal2.style.display= "none"
 }

function pauseAll(){
    son.forEach(son=>{
        son.pause()
        son.currentTime= 0;
    })
}

function shuffleimageSources(){
    for (i = imageSources.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = imageSources[i]
        imageSources[i] = imageSources[j]
        imageSources[j] = k
      }
}



let L=["image1", "image2", "image3", "image4","image5","image6"]
let imageSources=[ "url('fleur.jpg')",
"url('surinam.jpg')",
"url('marche.jpg')",
"url('fusee.jpg')",
"url('caiman.jpg')",
"url('wassai.jpg')",
"url('drapeau.jpg')",
"url('perroquet.webp')",
"url('toucan.jpg')",
"url('iguane.jpeg')",
"url('anaconda.jpg')",
"url('dauphin1.jpg')",
"url('dauphin2.jpg')",
"url('mante1.jpeg')",
"url('mante2.jpeg')",
"url('dragon1.jpg')",
"url('dragon2.jpeg')",
"url('colibri.webp')",
"url('colibri2.html')",
"url('tapir.jpeg')",
"url('agouti3.jpeg')",
"url('agouti2.jpg')",
"url('agouti1.jpg')"


]

let numImage=0
function progressBar(){
    if(cle == 1){
        stade1.style.opacity=1
      
    }
    else if((1<cle) && (cle<4) ){

        stade2.style.opacity=1
    
    }
    else if((3<cle) && (cle<6) ){

        stade3.style.opacity=1
    }
    else{
        stade4.style.opacity=1
    }
 }

 function resetProgressBar(){
    stade.forEach(stade=>{
        stade.style.opacity="0.2";
    })
    stade1.style.opacity="1";
 }



function attentionner(){
    attentionBackground.volume="0.4"
    attention.play()
    attentionBackground.play()
 }

 
 function expliquer(){
    pauseAll()
    if(cle==1){
        background1.play()
        background1.volume=0.1
        soundEq1.play()
    }
    else if(cle==2){
       
        background2.volume=0.4
        soundEq2.play()
        background2.play()
    }
    else if(cle==3){
       
        background3.volume=0.3
        soundEq3.play()
        background3.play()
    }
    else if(cle==4){
       
        background4.volume=0.2
        soundEq4.volume = 0.9
        soundEq4.play()
        background4.play()
    }
    else if(cle==5){
       
        background5.volume=0.2
        soundEq5.volume = 1
        soundEq5.play()
        background5.play()
    }
    else if(cle==6){
       
   
        soundEq6.play()
        background6.play()
    }
 }

 let cle=1;


function commencer(){
    progressBar()
    background1.volume=0.1
    // soundEq1.play()
    // background1.play()
    pauseAll()
    // nombreConstants()
    reponse1.style.display="block"
    // document.getElementById("afficheEquation").innerHTML=a+'x+'+b
    image.style.backgroundImage=imageSources[0]
    
    
}
document.getElementById('myModal4').style.display='block'
var modal2 = document.getElementById("myModal2");

document.getElementById('timer2').addEventListener('click',()=>{
    setInterval(setTime,1000)
    setInterval(liste, 5500)
    setInterval(chrono, 100)
    console.log('chrono')
    document.getElementById('afficheEquation').style.display="block"
    document.getElementById('afficheEquation').style.fontSize="25px"
    
    document.getElementById('derniereNote').innerHTML=ancienneNote
   
    console.log('newTiming '+blue)
    document.getElementById('myModal5').style.display="none"
    setTimeout(InsertData,time*1000 );
  })
  function chrono(){
 
    newTiming+=0.10
   
     blue=newTiming.toFixed(1)
    
   
  }
let message= document.getElementById("message")
document.getElementById('myModal5').style.display="none"
document.getElementById('myModal6').style.display="none"
document.getElementById('wait').style.display="none"

document.getElementById('autre').addEventListener('click',()=>{
    window.location.reload()
}
)

//reduce
window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'Enter':

           if(active) verif()
      break;

    

        case 'q':
            if(active) InsertData()
        // case 'f':
        //     openFullscreen()
        break;
        case ' ':
            if(active) {
                chePa()
                console.log('ché Touch')
    }
    }
  
})

document.getElementById('afficheEquation').style.display="none"
export{shuffleimageSources}
export{newTiming}
export{blue, active}
export{reduce,mauvaiseReponse,retireAffiche,retireAffiche2,bonneReponse,reussiReponses,nombreConstants,pauseAll,confettiBoucle}
export{setTime}
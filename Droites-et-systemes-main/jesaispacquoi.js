let image= document.getElementById("image")
let images= document.querySelectorAll(".image")
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
let welcomeSound= document.getElementById("myAudio")
let no=document.getElementById("non")
let yes =document.getElementById("yes")
let endBravo = document.getElementById("endBravo")
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
let congrulations = document.getElementById("congrulations")

let stade1 =document.getElementById("stade1")
let stade2 =document.getElementById("stade2")
let stade3 =document.getElementById("stade3")
let stade4 =document.getElementById("stade4")

let stade=  document.querySelectorAll('.etapes')

let son= document.querySelectorAll('.son')


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
console.log("long"+ imageSources.length)
console.log(reduce(5,-18))
let numImage=0

shuffleL()
function shuffleL(){
    for (i = L.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = L[i]
        L[i] = L[j]
        L[j] = k
      }
}
function shuffleimageSources(){
    for (i = imageSources.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = imageSources[i]
        imageSources[i] = imageSources[j]
        imageSources[j] = k
      }
}
shuffleimageSources()

function randomNumber(){
    return Math.floor(Math.random()*40-20)
}
let a=randomNumber()
let b=randomNumber()
let c=randomNumber()
let d=randomNumber()


document.getElementById("one").innerHTML= "Le coefficient directeur a de la fonction affine est "+ '<input type="text" id="one1" placeholder="10?"></input>'+ " et l'ordonnée à l'origine est" +'<input type="text" id="one2" placeholder="10?"></input>'
document.getElementById("two").innerHTML="La fonction va s'annuler en x <sub>0</sub>="+'-b/a='+'<input type="text" id="two1" placeholder="10?">'+'/'+'<input type="text" id="two2" placeholder="10?">'
document.getElementById("three").innerHTML="On alors x <sub>0</sub>="+ '<input type="text" id="three1" placeholder="10?">'
document.getElementById("four").innerHTML="Le  coefficient directeur a de la fonction affine est: " +'<select id="four1" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>' +"La fonction est donc "+'<select name="INBOUND" placeholder="INBOUND" id="four2"><option>croissante<option>décroissante<option> constante </select>'
document.getElementById("five").innerHTML="La fonction est d'abord "+ '<select id="five1" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'+", puis elle s'annule et enfin, elle est "+ '<select id="five2" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'
document.getElementById("six").innerHTML='Voici le tableau de signes de la fonction f :</br>'+'<div id="tbSignes"><div class="bout" id="un"> x</div><div class="bout" id="deux"> <div id="deux1">-&#8734;</div><div id="deux2"> </div><div id="deux3"> <input type="text" id="six2"  placeholder="INBOUND" style="width: 40px"></div><div id="deux4"> </div><div id="deux5">+&#8734;</div></div><div class="bout" id="trois">signe de f(x)</div><div class="bout" id="quatre"><div id="cinq1"> </div><div id="cinq2"> <select id="six4" name="INBOUND" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq3"> <input type="text" id="six5"  placeholder="INBOUND" style="width: 40px"></div><div id="five4"><select id="six6" name="INBOUND" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq5"> </div></div></div>'



let reponse1= document.getElementById("one")
let reponse11=document.getElementById("one1")
let reponse12=document.getElementById("one2")
let reponse2= document.getElementById("two")
let reponse21=document.getElementById("two1")
let reponse22=document.getElementById("two2")
let reponse3= document.getElementById("three")
let reponse31=document.getElementById("three1")
let reponse32=document.getElementById("three2")
let reponse4= document.getElementById("four")
let reponse41=document.getElementById("four1")
let reponse42=document.getElementById("four2")
let reponse5= document.getElementById("five")
let reponse51=document.getElementById("five1")
let reponse52=document.getElementById("five2")
let reponse6= document.getElementById("six")

let reponse62=document.getElementById("six2")

let reponse64=document.getElementById("six4")
let reponse65=document.getElementById("six5")
let reponse66=document.getElementById("six6")

let message= document.getElementById("message")

let cle=1;
reponse1.style.fontSize="15px"
reponse2.style.fontSize="15px"
reponse3.style.fontSize="15px"
reponse4.style.fontSize="15px"
reponse5.style.fontSize="15px"
reponse6.style.fontSize="15px"


function corriger(){
 
    if(cle==1){
        
    if(reponse11.value==a && reponse12.value==b ){
        message.innerHTML="c'est la bonne réponse &#128521;"

        reponse2.style.display="block"
        document.getElementById(L[0]).style.backgroundColor="transparent"
        cle=2
        yes.play()
    }
 
    else{
        mauvaiseReponse()
        setTimeout(nombreConstants,3000)
    }   
}
    else if (cle==2){
    
      
          console.log("ton choix 1 "+ reponse21.value)
          console.log("ton choix 2  "+reponse22.value )
          console.log("le -b="+-b)
          console.log("le a: "+ a)
    if( (reponse21.value==(-b))&& reponse22.value==a){
        message.innerHTML="c'est la bonne réponse &#128521;"

        reponse3.style.display="block"
        cle=3
        document.getElementById(L[1]).style.backgroundColor="transparent"
        yes.play()
    }
 
    else{
        mauvaiseReponse()
    }   

    }
    else if (cle==3){
       console.log("tonchoixRes"+ reponse31.value)
       console.log("Reponseattendue "+ reduce(-b,a))
        if(reponse31.value==reduce(-b,a)|| reponse31.value==(-b/a)){
            message.innerHTML="c'est la bonne réponse 3&#128521;"
            reponse4.style.display="block"
            cle=4
            document.getElementById(L[2]).style.backgroundColor="transparent"
            yes.play()
        }
        else{
            mauvaiseReponse()
        }
    }
    else if(cle==4){  

        if(a>0){
            if(reponse41.value=="positive" && reponse42.value=="croissante"){
                console.log("on y est1")
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=5
                reponse5.style.display="block"
               yes.play()
            }
            else{
                console.log("on y est2")
                mauvaiseReponse()
            }
        }
    
        else if(a==0){
            if(reponse41.value=="nulle" && reponse42.value=="constante"){
               
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=5
                reponse5.innerHTML="La fonction est toujours "+'<select id="five2" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'
                reponse5.style.display="block"
               yes.play()
               
            }
        else{
            mauvaiseReponse()
        }}
        else if(a<0){
            console.log("okok")
            if(reponse41.value=="négative" && reponse42.value=="décroissante"){
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=5
                reponse5.style.display="block"
               yes.play()
            }
        else{
            mauvaiseReponse()
        }
    
    
    
    
    }
}
    else if (cle==5){
        if(a>0){
            if(reponse51.value=="négative" && reponse52.value=="positive"){
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=6
                reponse6.style.display="block"
               yes.play()
            }
            else{
                mauvaiseReponse()
            }
        }
    
        else if(a == 0){
        if(b>0){
            if(reponse51.value=="positive"){
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=6
                reponse6.style.display="block"
               yes.play()
            }
        else{
            mauvaiseReponse()
        }}
        else if(b==0){
            if(reponse51.value=="nulle"){
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=6
                reponse6.style.display="block"
               yes.play()
            }
        else{
            mauvaiseReponse()
        }
        }
        else if(b<0){
            if(reponse51.value=="negative"){
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=6
                reponse6.style.display="block"
               yes.play()
            }
        else{
            mauvaiseReponse()
        }

        }
    
    
    }
        else if(a< 0){
            if(reponse41.value=="négative" && reponse42.value=="décroissante"){
                document.getElementById(L[3]).style.backgroundColor="transparent"
                cle=6
                reponse6.style.display="block"
               yes.play()
            }
        else{
            mauvaiseReponse()
        }
    
    
    }
}
    else if (cle==6){
  
    console.log("62"+reponse62.value)
   
    console.log("deuxieme ligne")
    console.log("64"+reponse64.value)
    console.log("65"+reponse65.value)
    console.log("66"+reponse66.value)
        if((reponse62.value==(-b/a) || reponse62.value==reduce(-b,a))){

            if(a==0){
                        if(b<0){
                            if(reponse64.value=="-" && reponse65.value=="-" && reponse66.value=="-"){
                                pauseAll()
                                message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
                                reponse2.style.display="block"
                               
                                document.getElementById(L[5]).style.backgroundColor="transparent"
                                cle=7
                                endBravo.play()
                                congrulations.play()
                            }
                            else{
                                mauvaiseReponse()
                            }
                        }
                        else if(b==0){
                            if(reponse64.value=="0" && reponse65.value=="0" && reponse66.value=="0"){
                                pauseAll()
                                message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
                                reponse2.style.display="block"
                               
                                document.getElementById(L[5]).style.backgroundColor="transparent"
                                cle=7
                                endBravo.play()
                                congrulations.play()
                            }
                            else{
                                mauvaiseReponse()
                            }
                        }
                        else if(b>0){
                            if(reponse64.value=="+" && reponse65.value=="+" && reponse66.value=="+"){
                                pauseAll()
                                message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
                                reponse2.style.display="block"
                               
                                document.getElementById(L[5]).style.backgroundColor="transparent"
                                cle=7
                                endBravo.play()
                                congrulations.play()
                            }
                            else{
                                mauvaiseReponse()
                            }
                        }
            }
            else if(a>0){
            if(reponse64.value=="-" && reponse65.value=="0" && reponse66.value=="+"){

            pauseAll()
            message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
            reponse2.style.display="block"
           
            document.getElementById(L[5]).style.backgroundColor="transparent"
            cle=7
            endBravo.play()
            congrulations.play()
            }
            else{
                mauvaiseReponse()
            }
        
        }
        else if(a<0){
            if(reponse64.value=="+" && reponse65.value=="0" && reponse66.value=="-"){

            pauseAll()
            message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
            reponse2.style.display="block"
           
            document.getElementById(L[5]).style.backgroundColor="transparent"
            cle=7
            endBravo.play()
            congrulations.play()
            }
            else{
                mauvaiseReponse()
            }
        
        }

        numImage++ 
        progressBar()
        
    }  
    else {
        console.log("123123")
        mauvaiseReponse()
    } 
    }}



function commencer(){
    progressBar()
    background1.volume=0.1
    soundEq1.play()
    background1.play()
    pauseAll()
    nombreConstants()
    reponse1.style.display="block"
    document.getElementById("afficheEquation").innerHTML=a+'x+'+b
    image.style.backgroundImage=imageSources[0]
    
    
}
function saisPas(){
    console.log("la cle avant SP"+ cle)
    if(cle==1){
        
document.getElementById("one").innerHTML="Le coefficient directeur a de la fonction affine est "+ a+ " et l'ordonnée à l'origine est " +b
reponse2.style.display="block"
cle=2 
document.getElementById(L[0]).style.backgroundColor="transparent"
    }
    if(cle==2){
        
        document.getElementById("two").innerHTML=a+'x='+c+'x-'+(b+d)

        reponse3.style.display="block"
        cle=3
        document.getElementById(L[1]).style.backgroundColor="transparent"
        
            }
 else if(cle==3){
        
    document.getElementById("three").innerHTML=a+'x-'+c+'x='+c+'x-'+(b+d)+'-'+c+'x'

                reponse4.style.display="block"
                cle=4
                document.getElementById(L[2]).style.backgroundColor="transparent"
                
                    }
else if(cle==4){  
    document.getElementById("four").innerHTML=(a-c)+'x=-'+((b+d))
    if(a==c){
        document.getElementById(L[3]).style.backgroundColor="transparent"
        cle=5
    reponse5.innerHTML="Cette equation est-elle possible ?"+'<select name="INBOUND" placeholder="INBOUND"><option>No<option>Yes</select>'
    reponse5.style.display="block"

}


    else{
    document.getElementById("four").innerHTML=(a-c)+'x=-'+(b+d)
                    
                                    reponse5.style.display="block"
                                    cle=5
                                    document.getElementById(L[3]).style.backgroundColor="transparent"
                                    
                                        }}
                                        
    else if(cle==5){
        if (a==c){
            if(b==(-d)){
            document.getElementById("five").innerHTML='0' +'='+-(b+d)
            message.innerHTML="Cette équation est toujours vraie quelque soit le réel x. L'ensemble de solution est R."
            cle=7
            document.getElementById(L[4]).style.backgroundColor="transparent"
            document.getElementById(L[5]).style.backgroundColor="transparent"
        }
            else{
                document.getElementById("five").innerHTML='0' +'='+-(b+d)
            message.innerHTML="Cette équation est impossible. L'ensemble de solution est l'ensemble vide."
            cle=7
            document.getElementById(L[4]).style.backgroundColor="transparent"
            document.getElementById(L[5]).style.backgroundColor="transparent"
            }
        }
        else{
        document.getElementById("five").innerHTML=(a-c)+'x/'+(a-c)+'='+-(b+d)+'/'+(a-c)
        reponse6.style.display="block"
                cle=6
                document.getElementById(L[4]).style.backgroundColor="transparent"}
                                                                            
                                                                                }
                                                                                else if(cle==6){
                                                                            
                                                                                    cle=7
                                                                                    document.getElementById("six").innerHTML='x='+reduce(-(b+d),(a-c))
                                                                                    reponse6.style.display="block"
                                                                                          document.getElementById("message").textContent="Va falloir vraiment réviser le cours pour le controle de vendredi !!"
                                                                                          document.getElementById(L[5]).style.backgroundColor="transparent"
                                                                                          numImage++ 
                                                                                                                                                            }
                                                                                                                                                      
                                                                                                                                                            progressBar()
                                                                                                                                                                                               


                                                                                                                                                        }

function nouvelleEquation(){
    
   
    shuffleL()
    nombreConstants()

    a=randomNumber()
    b=randomNumber()
    c=randomNumber()
    d=randomNumber()
    reponse1.style.display="block"
    document.getElementById("afficheEquation").innerHTML=a+'x+'+b
    commencer()
    pauseAll()

    document.getElementById("one").innerHTML= "Le coefficient directeur a de la fonction affine est "+ '<input type="text" id="one1" placeholder="10?"></input>'+ " et l'ordonnée à l'origine est" +'<input type="text" id="one2" placeholder="10?"></input>'
    document.getElementById("two").innerHTML="La fonction va s'annuler en x <sub>0</sub>="+'-b/a='+'<input type="text" id="two1" placeholder="10?">'+'/'+'<input type="text" id="two2" placeholder="10?">'
    document.getElementById("three").innerHTML="On alors x <sub>0</sub>="+ '<input type="text" id="three1" placeholder="10?">'
    document.getElementById("four").innerHTML="Le  coefficient directeur a de la fonction affine est: " +'<select id="four1" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>' +"La fonction est donc "+'<select name="INBOUND" placeholder="INBOUND" id="four2"><option>croissante<option>décroissante<option> constante </select>'
    document.getElementById("five").innerHTML="La fonction est d'abord "+ '<select id="five1" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'+", puis elle s'annule et enfin, elle est "+ '<select id="five2" name="INBOUND" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'
    document.getElementById("six").innerHTML='Voici le tableau de signes de la fonction f :</br>'+'<div id="tbSignes"><div class="bout" id="un"> x</div><div class="bout" id="deux"> <div id="deux1"> <select id="six1" name="INBOUND" placeholder="INBOUND"><option>-&infin;<option>+&infin;</select></div><div id="deux2"> </div><div id="deux3"> <input type="text" id="six2"  placeholder="INBOUND" style="width: 40px"></div><div id="deux4"> </div><div id="deux5"> <select id="six3" name="INBOUND" placeholder="INBOUND"><option>-&infin;<option>+&infin;</select></div></div><div class="bout" id="trois">signe de f(x)</div><div class="bout" id="quatre"><div id="cinq1"> </div><div id="cinq2"> <select id="six4" name="INBOUND" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq3"> <input type="text" id="six5"  placeholder="INBOUND" style="width: 40px"></div><div id="five4"><select id="six6" name="INBOUND" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq5"> </div></div></div>'


    
    
    reponse1= document.getElementById("one")
 reponse11=document.getElementById("one1")
 reponse12=document.getElementById("one2")
 reponse2= document.getElementById("two")
 reponse21=document.getElementById("two1")
 reponse22=document.getElementById("two2")
 reponse3= document.getElementById("three")
 reponse31=document.getElementById("three1")
 reponse32=document.getElementById("three2")
 reponse4= document.getElementById("four")
 reponse41=document.getElementById("four1")
 reponse42=document.getElementById("four2")
 reponse5= document.getElementById("five")
 reponse51=document.getElementById("five1")
 reponse52=document.getElementById("five2")
 reponse6= document.getElementById("six")
 reponse61=document.getElementById("six1")
 reponse62=document.getElementById("six2")
 reponse63=document.getElementById("six3")
 reponse64=document.getElementById("six4")
 reponse65=document.getElementById("six5")
 reponse66=document.getElementById("six6")
 
 message= document.getElementById("message")


    reponse2.style.display="block"
    reponse2.style.display="none"
    reponse3.style.display="none"
    reponse4.style.display="none"
    reponse5.style.display="none"
    reponse6.style.display="none"
    document.getElementById("message").innerHTML="  "
    cle=1
  images.forEach(image=>{
    image.style.backgroundColor="black"
  })
 
image.style.backgroundImage=imageSources[numImage]


resetProgressBar()
    

}



function reduce(number,denomin){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(number,denomin);
    
  if(denomin/gcd==1){
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



function mauvaiseReponse(){
    modal.style.display= "block"
    setTimeout(retireAffiche,3000)
    no.play()

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

 function progressBar(){
    if(cle <= 2){
        stade1.style.opacity=1
      
    }
    else if(cle <5  ){

        stade2.style.opacity=1
    
    }
    else if(cle == 5){

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
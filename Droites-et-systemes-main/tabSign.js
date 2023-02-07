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
let presentation =  document.getElementById("presentation")
let presentationBackground = document.getElementById("presentationBackground")
let attention =document.getElementById("attention")
let attentionBackground = document.getElementById("attentionBackground")
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


function randomNumberTrue(){
    const a = Math.floor(Math.random()*50)
    const b= -a
    const n= Math.floor(Math.random()*8)
    const p=Math.floor(Math.random()*1)
    const c = ((-1)**(p)*b*(10**(-n))).toFixed(n)
    // const c = (1/3).toFixed(3)
    console.log('b '+b)
    const q= Math.floor(Math.random()*50)
    const d= (-1)**(p)*a+'/'+q
    // const e= [Math.sqrt(2),Math.sqrt(3),Math.sqrt(5), Math.PI]
    // const e= '<msqrt> 5</msqrt>'
   const e=[' &radic;<span style="text-decoration: overline">2</span>',' &radic;<span style="text-decoration: overline">5</span>','&pi;']
   //un type de pi '&#8719;'
//   const e2= '<math><msqrt><mi>2</mi></msqrt></math>'
    const f=Math.floor(Math.random()*3)
    // const h=Math.floor(Math.random()*4)
    let  h=Math.floor(Math.random()*4)+1
    // h=4
    console.log(e)
    const g= (-1)**(p)*a+e[f]
    const L=[a,b,c,d,g]
    
    return L[h]
    // return g
}
let choix;
let score=0
let counter=0;
const choixN= document.querySelector('.N')
const choixZ= document.querySelector('.Z')
const choixD= document.querySelector('.D')
const choixQ= document.querySelector('.Q')
const choixR= document.querySelector('.R')

choixN.addEventListener('click',()=>{
    choix='N'
    check()
    console.log(choix)
})
choixZ.addEventListener('click',()=>{
    choix='Z'
    check()
    console.log(choix)
})
choixD.addEventListener('click',()=>{
    choix='D'
    check()
    console.log(choix)
})
choixQ.addEventListener('click',()=>{
    choix='Q'
    check()
    console.log(choix)
})
choixR.addEventListener('click',()=>{
    choix='R'
    check()
    console.log(choix)
})

// ecrire le nombre qu'on recherche
const nombre= document.getElementById('afficheEquation')
class randomNumberTrue2{
    constructor(){
        this.naturel=Math.floor(Math.random()*50)+1
        this.relatif= -this.naturel
        this.puissance=Math.floor(Math.random()*8)
        this.signe= Math.floor(Math.random()*1)
        this.deciaml= ((-1)**(this.puissance)*this.relatif*(10**(-this.puissance))).toFixed(this.puissance)
        this.denominateur= Math.floor(Math.random()*50)+1
        this.quotient=(-1)**(this.puissance)*this.naturel+'/'+this.denominateur
        this.irrationnelList=[' &radic;<span style="text-decoration: overline">2</span>',' &radic;<span style="text-decoration: overline">5</span>','&pi;']
        this.indiceIrrationnel= Math.floor(Math.random()*3)
        this.a=this.irrationnelList[this.indiceIrrationnel]
        this.irrationel= (-1)**(this.puissance)*this.naturel+this.irrationnelList[this.indiceIrrationnel]
        this.nbList=[this.naturel,this.relatif,this.deciaml,this.quotient,this.irrationel]
        this.indiceNb=Math.floor(Math.random()*4)+1
        // this.indiceNb=1
        // this.nb= this.nbList[this.indiceNb]
        this.nb= this.nbList[this.indiceNb]
        if(this.indiceNb==0){
            this.solution='N'
        }
        if(this.indiceNb==1){
            this.solution='Z'
        }
        if(this.indiceNb==2){
            this.solution='D'
        }
        if(this.indiceNb==3){
            console.log('nou la ')
            console.log(33/40)
            console.log((33/40).toString().length)
            console.log('le nombr'+ this.nb)
            console.log('longueur '+this.naturel/+this.denominateur.toString().length)
            // console.log(Number.isInteger(2/3))
            // console.log('18  '+(18/48).toString().length)
            console.log('nb entier'+ Number.isInteger(((-1)**(this.puissance)*this.naturel/+this.denominateur)))
            if(Number.isInteger(((-1)**(this.puissance)*this.naturel/+this.denominateur))){
                if((-1)**(this.puissance)*this.naturel/+this.denominateur>0){
                    this.solution='N'
                }
                if((-1)**(this.puissance)*this.naturel/+this.denominateur<0){
                    this.solution='Z'
                }
            }else if( (this.naturel/+this.denominateur).toString().length<10){
                this.solution='D'
            }else{
                this.solution='Q'
            }
       
          console.log('sol'+ this.solution)
        }
        if(this.indiceNb==4){
            this.solution='R'
        }
    }
}
let  nombreNouveau = new randomNumberTrue2()
nombre.innerHTML= nombreNouveau.nb +'   score   '+score+'/'+counter
// console.log(nombreNouveau)
// console.log('irrLis'+ nombreNouveau.irrationnelList)
// console.log('a'+nombreNouveau.a)
// console.log('indice'+nombreNouveau.indiceIrrationnel)
// console.log('irrationnel'+ nombreNouveau.irrationel)
let premiereFois=true
function check(){
 console.log('counter'+ counter)
    if(counter<6){
   
    if(nombreNouveau.solution==choix){
       
        if(premiereFois){
        score++}
        bonneReponse()
        nombreNouveau = new randomNumberTrue2()
        premiereFois=true
       
        document.getElementById(L[counter]).style.backgroundColor="transparent"
        counter++
        nombre.innerHTML= nombreNouveau.nb +'   score   '+score+'/'+counter
    }
    else{
        mauvaiseReponse()
        premiereFois=false
    }}
    if(score==6){
     
        reussiReponses()
       
    }
    if(counter==6){
        console.log('ok ou pa')
        InsertData()
     
        document.getElementById('scorePresentation').innerHTML=score+'/'+counter
        document.getElementById('myModal3').style.display= "block"
    }
   



}

//     const a = Math.floor(Math.random()*50)
//     const b= -a
//     const n= Math.floor(Math.random()*8)
//     const p=Math.floor(Math.random()*1)
//     const c = ((-1)**(p)*b*(10**(-n))).toFixed(n)
//     // const c = (1/3).toFixed(3)
//     console.log('b '+b)
//     const q= Math.floor(Math.random()*50)
//     const d= (-1)**(p)*a+'/'+q
//     // const e= [Math.sqrt(2),Math.sqrt(3),Math.sqrt(5), Math.PI]
//     // const e= '<msqrt> 5</msqrt>'
//    const e=[' &radic;<span style="text-decoration: overline">2</span>',' &radic;<span style="text-decoration: overline">5</span>','&pi;']
//    //un type de pi '&#8719;'
// //   const e2= '<math><msqrt><mi>2</mi></msqrt></math>'
//     const f=Math.floor(Math.random()*3)
//     // const h=Math.floor(Math.random()*4)
//     let  h=Math.floor(Math.random()*4)+1
//     // h=4
//     console.log(e)
//     const g= (-1)**(p)*a+e[f]
//     const L=[a,b,c,d,g]
    
//     return L[h]
//     // return g


// const nombre= document.getElementById('afficheEquation')
// nombre.innerHTML= randomNumberTrue()

document.getElementById("one").innerHTML= "Le coefficient directeur a de la fonction affine est "+ '<input type="text" id="one1" placeholder="10?"></input>'+ " et l'ordonnée à l'origine est" +'<input type="text" id="one2" placeholder="10?"></input>'
document.getElementById("two").innerHTML="La fonction va s'annuler en x <sub>0</sub>="+'-b/a='+'<input type="text" id="two1" placeholder="10?">'+'/'+'<input type="text" id="two2" placeholder="10?">'
document.getElementById("three").innerHTML="On alors x <sub>0</sub>="+ '<input type="text" id="three1" placeholder="10?">'
document.getElementById("four").innerHTML="Le  coefficient directeur a de la fonction affine est: " +'<select id="four1" name="INBOUND" placeholder="INBOUND" style="font-size:34px"><option>positive<option>nulle<option> négative</select>' +"La fonction est donc "+'<select name="INBOUND" placeholder="INBOUND" style="font-size:34px" id="four2"><option>croissante<option>décroissante<option> constante </select>'
document.getElementById("five").innerHTML="La fonction est d'abord "+ '<select id="five1" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'+", puis elle s'annule et enfin, elle est "+ '<select id="five2" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'
document.getElementById("six").innerHTML='Voici le tableau de signes de la fonction f :</br>'+'<div id="tbSignes"><div class="bout" id="un"> x</div><div class="bout" id="deux"> <div id="deux1"> <select id="six1" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>-&infin;<option>+&infin;</select></div><div id="deux2"> </div><div id="deux3"> <input type="text" id="six2"  placeholder="INBOUND" style="width: 90px"></div><div id="deux4"> </div><div id="deux5"> <select id="six3" name="INBOUND" style="font-size:34px" style="width:150px" placeholder="INBOUND"><option>-&infin;<option>+&infin;</select></div></div><div class="bout" id="trois">signe de f(x)</div><div class="bout" id="quatre"><div id="cinq1"> </div><div id="cinq2"> <select id="six4"  style="font-size:34px" name="INBOUND" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq3"> <input type="text" id="six5"  placeholder="INBOUND" style="width: 40px"></div><div id="five4"><select id="six6" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq5"> </div></div></div>'



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
let reponse61=document.getElementById("six1")
let reponse62=document.getElementById("six2")
let reponse63=document.getElementById("six3")
let reponse64=document.getElementById("six4")
let reponse65=document.getElementById("six5")
let reponse66=document.getElementById("six6")

let message= document.getElementById("message")

let cle=1;


// reponse1.style.fontSize="15px"
// reponse2.style.fontSize="15px"
// reponse3.style.fontSize="15px"
// reponse4.style.fontSize="15px"
// reponse5.style.fontSize="15px"
// reponse6.style.fontSize="15px"


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
                document.getElementById(L[4]).style.backgroundColor="transparent"
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
                document.getElementById(L[4]).style.backgroundColor="transparent"
                cle=6
                reponse6.style.display="block"
               yes.play()
            }
        else{
            mauvaiseReponse()
        }}
        else if(b==0){
            if(reponse51.value=="nulle"){
                document.getElementById(L[4]).style.backgroundColor="transparent"
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
                document.getElementById(L[4]).style.backgroundColor="transparent"
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
                document.getElementById(L[4]).style.backgroundColor="transparent"
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
        var valeur1= reponse61.value
        var valeur2= reponse63.value
    console.log("61"+ reponse61.value)
    console.log("62"+reponse62.value)
    console.log("63"+reponse63.value)
    console.log("deuxieme ligne")
    console.log("64"+reponse64.value)
    console.log("65"+reponse65.value)
    console.log("66"+reponse66.value)
        if(reponse61.value=="-\u221e"  && reponse63.value=="+\u221e"  && (reponse62.value==(-b/a) || reponse62.value==reduce(-b,a))){

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
                                confettiBoucle()
                                confettiBoucle()
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
                                confettiBoucle()
                                confettiBoucle()
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
                                confettiBoucle()
                            }
                            else{
                                mauvaiseReponse()
                            }
                        }
            }
            else if(a>0){
            if(reponse64.value=="-" && reponse65.value=="0" && reponse66.value=="+"){
                confettiBoucle()
            pauseAll()
            message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
            reponse2.style.display="block"
           
            document.getElementById(L[5]).style.backgroundColor="transparent"
            cle=7
            endBravo.play()
            congrulations.play()
            confettiBoucle()
            }
            else{
                mauvaiseReponse()
            }
        
        }
        else if(a<0){
            if(reponse64.value=="+" && reponse65.value=="0" && reponse66.value=="-"){
                confettiBoucle()
            pauseAll()
            message.innerHTML="Bravo, c'est fini ! Tu as réussi l'équation ! "
            reponse2.style.display="block"
           
            document.getElementById(L[5]).style.backgroundColor="transparent"
            cle=7
            endBravo.play()
            congrulations.play()
            confettiBoucle()
            }
            else{
                mauvaiseReponse()
            }
        
        }

        numImage++ 
       
        
    }  
    else {
   
        mauvaiseReponse()
    } 
    } progressBar()
}



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

















function saisPas(){
    console.log("la cle avant SP"+ cle)
    if(cle==1){
        console.log("la ou non ? ")
        document.getElementById("one").innerHTML= "Le coefficient directeur a de la fonction affine est "+ a+ " et l'ordonnée à l'origine est " +b
        reponse2.style.display="block"
        cle=2 
document.getElementById(L[0]).style.backgroundColor="transparent"
    }
    else if(cle==2){
        console.log("ici aussi ?")
        document.getElementById("two").innerHTML="La fonction va s'annuler en x <sub>0</sub>="+'-b/a='+(-b)+'/'+a

        reponse3.style.display="block"
        cle=3
        document.getElementById(L[1]).style.backgroundColor="transparent"
        
            }

        else if (cle==3){
            document.getElementById("three").innerHTML="On a x<sub>0</sub>="+reduce(-b,a)
            reponse4.style.display="block"
            cle=4
            document.getElementById(L[2]).style.backgroundColor="transparent"
            
        }
 else if(cle==4){

    reponse5.style.display="block"
    cle=5
    document.getElementById(L[3]).style.backgroundColor="transparent"
        if(a>0){
            document.getElementById("four").innerHTML="Le coefficient directeur de la fonction est positif. La fonction est donc croissante."
        }
        else if(a==0){
            document.getElementById("four").innerHTML="Le coefficient directeur de la fonction est nul. La fonction est donc constante."
        }
        else if(a<0){
            document.getElementById("four").innerHTML="Le coefficient directeur de la fonction est négatif. La fonction est donc décroissante."
        }
 

    
                
                    }
else if(cle==5){  
    if(a>0){
        document.getElementById("five").innerHTML="La fonction est d'abord négative, puis elle s'annule et enfin, elle est positive."
    }
    else if(a==0){
        document.getElementById("five").innerHTML="La fonction est toujours est du signe de l'ordonnée à l'origine."
        if(b<0){
            document.getElementById("five").innerHTML+="</br>Elle est toujours négative."
        }
        else if(b==0){
            document.getElementById("five").innerHTML+="</br>Elle est toujours nulle"
        }
        else if(b>0){
            document.getElementById("five").innerHTML+="</br>Elle est toujours positive."
        }
    }
    else if(a<0){
        document.getElementById("five").innerHTML="La fonction est d'abord positive, puis elle s'annule et enfin, elle est négative." }
   document.getElementById(L[4]).style.backgroundColor="transparent"
        cle=6
   reponse6.style.display="block"

}

                            
    else if(cle==6){
        document.getElementById(L[5]).style.backgroundColor="transparent"
        numImage++ 
        if(a>0){
            document.getElementById("six").innerHTML=`
            
    Voici le tableau de signes de la fonction f :</br>
    <div id="tbSignes">
    <div class="bout" id="un"> x</div>
    <div class="bout" id="deux"> 
    <div id="deux1"> 
        -&infin;</div>
        <div id="deux2"> </div>
        <div id="deux3"> ${reduce(-b,a)}</div>
        <div id="deux4"> </div>
        <div id="deux5"> +&infin;</div></div>
    <div class="bout" id="trois">signe de f(x)</div>
    <div class="bout" id="quatre">
        <div id="cinq1"> 
        </div><div id="cinq2"> -</div>
        <div id="cinq3"> 0</div>
        <div id="five4">+</div>
        <div id="cinq5"> </div>
        </div>
        
        </div>
  
            
            
            
            
            `
        }
        else if(a==0){
if(b>0){
    document.getElementById("six").innerHTML=`
             Voici le tableau de signes de la fonction f :</br>
        <div id="tbSignes">
        <div class="bout" id="un"> x</div>
        <div class="bout" id="deux"> 
        <div id="deux1"> 
            -&infin;</div>
            <div id="deux2"> </div>
            <div id="deux3"> ${reduce(-b,a)}</div>
            <div id="deux4"> </div>
            <div id="deux5"> +&infin;</div></div>
        <div class="bout" id="trois">signe de f(x)</div>
        <div class="bout" id="quatre">
            <div id="cinq1"> 
            </div><div id="cinq2"> </div>
            <div id="cinq3"> +</div>
            <div id="five4"></div>
            <div id="cinq5"> </div>
            </div>
            
            </div>`

        }
    else if(b==0){
        document.getElementById("six").innerHTML=`
            
        Voici le tableau de signes de la fonction f :</br>
        <div id="tbSignes">
        <div class="bout" id="un"> x</div>
        <div class="bout" id="deux"> 
        <div id="deux1"> 
            -&infin;</div>
            <div id="deux2"> </div>
            <div id="deux3"> ${reduce(-b,a)}</div>
            <div id="deux4"> </div>
            <div id="deux5"> +&infin;</div></div>
        <div class="bout" id="trois">signe de f(x)</div>
        <div class="bout" id="quatre">
            <div id="cinq1"> 
            </div><div id="cinq2"> </div>
            <div id="cinq3"> 0</div>
            <div id="five4"></div>
            <div id="cinq5"> </div>
            </div>
            
            </div>`

    }
    else if(b<0){
        document.getElementById("six").innerHTML=`
        Voici le tableau de signes de la fonction f :</br>
        <div id="tbSignes">
        <div class="bout" id="un"> x</div>
        <div class="bout" id="deux"> 
        <div id="deux1"> 
            -&infin;</div>
            <div id="deux2"> </div>
            <div id="deux3"> ${reduce(-b,a)}</div>
            <div id="deux4"> </div>
            <div id="deux5"> +&infin;</div></div>
        <div class="bout" id="trois">signe de f(x)</div>
        <div class="bout" id="quatre">
            <div id="cinq1"> 
            </div><div id="cinq2"> </div>
            <div id="cinq3"> -</div>
            <div id="five4"></div>
            <div id="cinq5"> </div>
            </div>
            
            </div>`


    }
    
    
    
    }
    else if (a<0){
        document.getElementById("six").innerHTML=`
        Voici le tableau de signes de la fonction f :</br>
        <div id="tbSignes">
        <div class="bout" id="un"> x</div>
        <div class="bout" id="deux"> 
        <div id="deux1"> 
            -&infin;</div>
            <div id="deux2"> </div>
            <div id="deux3"> ${reduce(-b,a)}</div>
            <div id="deux4"> </div>
            <div id="deux5"> +&infin;</div></div>
        <div class="bout" id="trois">signe de f(x)</div>
        <div class="bout" id="quatre">
            <div id="cinq1"> 
            </div><div id="cinq2"> +</div>
            <div id="cinq3"> 0</div>
            <div id="five4">-</div>
            <div id="cinq5"> </div>
            </div>
            
            </div>`
      

    }                                                                                                                              
                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                           
    }
                                                                                progressBar()
                                                                            }                                                                                                         

function nouvelleEquation(){
    
   
    shuffleL()
    // nombreConstants()

    a=randomNumber()
    b=randomNumber()
    c=randomNumber()
    d=randomNumber()
    // reponse1.style.display="block"
    // document.getElementById("afficheEquation").innerHTML='hisCiFy'
    document.getElementById('myModal3').style.display= "none"
    score=0
    counter=0
    nombre.innerHTML= nombreNouveau.nb +'   score   '+score+'/'+counter
    // commencer()
    pauseAll()

    // document.getElementById("one").innerHTML= "Le coefficient directeur a de la fonction affine est "+ '<input type="text" id="one1" placeholder="10?"></input>'+ " et l'ordonnée à l'origine est" +'<input type="text" id="one2" placeholder="10?"></input>'
    // document.getElementById("two").innerHTML="La fonction va s'annuler en x <sub>0</sub>="+'-b/a='+'<input type="text" id="two1" placeholder="10?">'+'/'+'<input type="text" id="two2" placeholder="10?">'
    // document.getElementById("three").innerHTML="On alors x <sub>0</sub>="+ '<input type="text" id="three1" placeholder="10?">'
    // document.getElementById("four").innerHTML="Le  coefficient directeur a de la fonction affine est: " +'<select id="four1" name="INBOUND" placeholder="INBOUND" style="font-size:34px"><option>positive<option>nulle<option> négative</select>' +"La fonction est donc "+'<select name="INBOUND" placeholder="INBOUND" style="font-size:34px" id="four2"><option>croissante<option>décroissante<option> constante </select>'
    // document.getElementById("five").innerHTML="La fonction est d'abord "+ '<select id="five1" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'+", puis elle s'annule et enfin, elle est "+ '<select id="five2" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>positive<option>nulle<option> négative</select>'
    // document.getElementById("six").innerHTML='Voici le tableau de signes de la fonction f :</br>'+'<div id="tbSignes"><div class="bout" id="un"> x</div><div class="bout" id="deux"> <div id="deux1"> <select id="six1" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>-&infin;<option>+&infin;</select></div><div id="deux2"> </div><div id="deux3"> <input type="text" id="six2"  placeholder="INBOUND" style="width: 90px"></div><div id="deux4"> </div><div id="deux5"> <select id="six3" name="INBOUND" style="font-size:34px" style="width:150px" placeholder="INBOUND"><option>-&infin;<option>+&infin;</select></div></div><div class="bout" id="trois">signe de f(x)</div><div class="bout" id="quatre"><div id="cinq1"> </div><div id="cinq2"> <select id="six4"  style="font-size:34px" name="INBOUND" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq3"> <input type="text" id="six5"  placeholder="INBOUND" style="width: 40px"></div><div id="five4"><select id="six6" name="INBOUND" style="font-size:34px" placeholder="INBOUND"><option>-<option>+</select></div><div id="cinq5"> </div></div></div>'

    
    
//     reponse1= document.getElementById("one")
//  reponse11=document.getElementById("one1")
//  reponse12=document.getElementById("one2")
//  reponse2= document.getElementById("two")
//  reponse21=document.getElementById("two1")
//  reponse22=document.getElementById("two2")
//  reponse3= document.getElementById("three")
//  reponse31=document.getElementById("three1")
//  reponse32=document.getElementById("three2")
//  reponse4= document.getElementById("four")
//  reponse41=document.getElementById("four1")
//  reponse42=document.getElementById("four2")
//  reponse5= document.getElementById("five")
//  reponse51=document.getElementById("five1")
//  reponse52=document.getElementById("five2")
//  reponse6= document.getElementById("six")
//  reponse61=document.getElementById("six1")
//  reponse62=document.getElementById("six2")
//  reponse63=document.getElementById("six3")
//  reponse64=document.getElementById("six4")
//  reponse65=document.getElementById("six5")
//  reponse66=document.getElementById("six6")
 
//  message= document.getElementById("message")


    // reponse2.style.display="block"
    // reponse2.style.display="none"
    // reponse3.style.display="none"
    // reponse4.style.display="none"
    // reponse5.style.display="none"
    // reponse6.style.display="none"
    // document.getElementById("message").innerHTML="  "
    // cle=1
    // resetProgressBar()
    // commencer()

  images.forEach(image=>{
    image.style.backgroundColor="black"
  })
 
image.style.backgroundImage=imageSources[numImage]



// document.getElementById("afficheEquation").innerHTML='hisCiFy'

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

let password= 0
 function demo(){
if (password==0){
    confettiBoucle()
    // confettiFY()
//    commencer()
//     setTimeout(commencer,20)
//     setTimeout(saisPas,400)
//     setTimeout(saisPas,500)
//     setTimeout(saisPas,600)
//     setTimeout(saisPas,700)
//     setTimeout(saisPas,800)
//     setTimeout(saisPas,900)
//     setTimeout(saisPas,1000)
    setTimeout(nouvelleEquation,10000)
    // setTimeout(commencer,12000)
    setTimeout(corriger, 20000)
    setTimeout(saisPas,30000)
    setTimeout(saisPas,33000)
    setTimeout(saisPas,36000)
    setTimeout(saisPas,39000)
    setTimeout(saisPas,42000)
    setTimeout(saisPas,45000)
    setTimeout(saisPas,45500)
    setTimeout(nouvelleEquation,53000)
    setTimeout(saisPas,60000)
    setTimeout(saisPas,62000)
    setTimeout(saisPas,64000)
    setTimeout(saisPas,6600)
    setTimeout(saisPas,68000)
    setTimeout(saisPas,70000)
    setTimeout(saisPas,70500)
    setTimeout(nouvelleEquation,72000)
    setTimeout(saisPas,73000)
    setTimeout(saisPas,74000)
    setTimeout(saisPas,75000)
    setTimeout(saisPas,7600)
    setTimeout(saisPas,77000)
    setTimeout(saisPas,78000)
    setTimeout(saisPas,78500)
    setTimeout(nouvelleEquation,80000)
    setTimeout(saisPas,80500)
    setTimeout(saisPas,81000)
    setTimeout(saisPas,81500)
    setTimeout(saisPas,8200)
    setTimeout(saisPas,82000)
    setTimeout(saisPas,82500)
    setTimeout(saisPas,82900)
    setTimeout(nouvelleEquation,84000)
    setTimeout(saisPas,84200)
    setTimeout(saisPas,84400)
    setTimeout(saisPas,84600)
    setTimeout(saisPas,84800)
    setTimeout(saisPas,85000)
    setTimeout(saisPas,85200)
    setTimeout(saisPas,85400)
    setTimeout(nouvelleEquation,86000)
    setTimeout(saisPas,86200)
    setTimeout(saisPas,86400)
    setTimeout(saisPas,86600)
    setTimeout(saisPas,86800)
    setTimeout(saisPas,86000)
    setTimeout(saisPas,86200)
    setTimeout(saisPas,86400)
    setTimeout(nouvelleEquation,87000)
    setTimeout(saisPas,87100)
    setTimeout(saisPas,87200)
    setTimeout(saisPas,87300)
    setTimeout(saisPas,87400)
    setTimeout(saisPas,87500)
    setTimeout(saisPas,87600)
    setTimeout(saisPas,87700)

   
    setTimeout(nouvelleEquation,95000)

    presentationBackground.volume = "0.1"
    presentationBackground.play()
    presentation.play()
}
password=2

 }

function attentionner(){
    attentionBackground.volume="0.4"
    attention.play()
    attentionBackground.play()
 }

//  import JSConfetti from 'js-confetti'

// const jsConfetti = new JSConfetti()

// jsConfetti.addConfetti()

// function confettiFY(){
//     jsConfetti.addConfetti();
// }

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


// on commence ici
let xA= Math.floor(Math.random()*10)
let yA= Math.floor(Math.random()*10)
let xB= Math.floor(Math.random()*10)
let yB= Math.floor(Math.random()*10)

const questions={
    q1: 'La norme du vecteur AB est égal'+ [ [<input id="r1a"></input>-<input id="r1b"></input>],[<input id="r1c"></input>-<input id="r1d"></input> ]]',
    r1a: xA,
    r1b: xB,
    r2a: yA,
    r2b: yB,
    
}
const question1= document.getElementById('question1')
question1.innerHTML=questions.innerHTML(questions.q1)
  

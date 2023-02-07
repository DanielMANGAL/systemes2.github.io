import { InsertData,liste } from "/connexion.js"
import{active} from "/animated.js"

import {reduce,mauvaiseReponse,retireAffiche,retireAffiche2,bonneReponse,reussiReponses,nombreConstants,pauseAll,shuffleimageSources,confettiBoucle} from "/animated.js"
let score2=0
let sloto=1
let first= true
// New vector
let xA= Math.floor(Math.random()*10)
let yA= Math.floor(Math.random()*10)
let xB= Math.floor(Math.random()*10)
let yB= Math.floor(Math.random()*10)
let xC= Math.floor(Math.random()*10)
let yC= Math.floor(Math.random()*10)
let xD= Math.floor(Math.random()*10)
let yD= Math.floor(Math.random()*10)
let m=Math.floor(Math.random()*20-10)
let n=Math.floor(Math.random()*20-10)
while(yB-yA==0){
  xA= Math.floor(Math.random()*10)
 yA= Math.floor(Math.random()*10)
}
let questions={
    q1: `On a <span style="text-decoration:overline; font-size:25px">AB</span></span><sup><sup>\></sup></sup>
    <div class='aligne'>
    <table>
  <tr>
    <td><input id="ra1"></input></td>
    
  </tr>
  <tr>
  
    <td><input id="ra2"></input></td>
  </tr>
</table>
</div> et <span style="text-decoration:overline; font-size:25px">CD</span></span><sup><sup>\></sup></sup>
<div class='aligne'>
<table>
<tr>
<td><input id="ra3"></input></td>

</tr>
<tr>

<td><input id="ra4"></input></td>
</tr>
</table>
</div> 
`,
q2:`Les coordonnées des vecteurs sont <select name="cars" id="rb1">
<option value="proportionnelles">proportionnelles</option>
<option value="non proportionnelles">non proportionnelles</option></select> donc les droites (AB) et (CD) sont <select name="cars" id="rb2">
<option value="parallèles">parallèles</option>
<option value="sécantes">sécantes</option></select>
`,
q3: `Une équation cartésienne de la droite (AB) est <input id="rc1"></input>x+<input id="rc2"></input>y+m=0 et </br>de (CD) <input id="rc3"></input>x+<input id="rc4"></input>y+l=0 où m et l sont des réels.
`,
q4:`En remplaçant x et y par les coordonnées du point A, dans l'équation cartésienne de (AB), on détermine m et ainsi. On a (AB) qui pour équation: </br>
<input id="rd1"></input>x+<input id="rd2"></input>y+<input id="rd3"></input>=0.
</br> De même, avec le point C pour (CD), on a </br> <input id="rd4"></input>x+<input id="rd5"></input>y+<input id="rd6"></input>=0
`,

q5:` Cherchons les points d'intersection entre ces deux droites.
</br>
Pour cela, nous allons résoudre un système avec les deux équations cartésiennes trouvées:
<div class='aligne'>
    <table>
  <tr>
    <td><input id="re1"></input>x+<input id="re2"></input>y+<input id="re3"></input>=0</td>
    
  </tr>
  <tr>
  
    <td><input id="re4"></input>x+<input id="re5"></input>y+<input id="re6"></input>=0</td>
  </tr>
</table>
</div>
`,

q6:
`
On a </br>
<div class='aligne'>
    <table>
  <tr>
    <td>x=(-<input id="rf1"></input>y-<input id="rf2"></input>)/<input id="rf3"></input></td>
    
  </tr>
  <tr>
  
    <td><input id="rf4"></input>x+<input id="rf5"></input>y+<input id="rf6"></input>=0</td>
  </tr>
</table>
</div>


`,
q7:` On a enfin pu isoler la variable x.</br> Nous allons maintenant la remplacer dans la deuxième ligne de l'équation afin de trouver y.
</br>

<div class='aligne'>
    <table>
  <tr>
    <td>x=(-<input id="rg1"></input>y-<input id="rg2"></input>)/<input id="rg3"></input></td>
    
  </tr>
  <tr>
  
    <td><input id="rg4"></input>(-<input id="rg5"></input>y-<input id="rg6"></input>)/<input id="rg7"></input>+<input id="rg8"></input>y+<input id="rg9"></input>=0</td>
  </tr>
</table>
</div>



`,
q8:`Nous avons: 

<div class='aligne'>
    <table>
  <tr>
    <td>x=(-<input id="rh1"></input>y-<input id="rh2"></input>)/<input id="rh3"></input></td>
    
  </tr>
  <tr>
  
    <td>y=<input class="ending" id="rh4"></input></td>
  </tr>
</table>
</div>


`,
q9:`En remplaçant maintenant y dans la première ligne, nous pouvons trouver x:

<div class='aligne'>
    <table>
  <tr>
    <td>x=(-<input id="ri1"></input>&times;<input class="ending" id="ri2"></input>-<input id="ri3"></input>)/<input id="ri4"></input></td>
    
  </tr>
  <tr>
  
    <td>y=<input class="ending" id="ri5"></input></td>
  </tr>
</table>
</div>


`,
q10:`Ainsi, le point d'intersection des droites est </br>I(<input class="ending" id="rj1"></input>; <input id="rj2" class="ending"></input>).`
}
const question1= document.getElementById('question1')
question1.innerHTML=questions.q1
const question2= document.getElementById('question2')
question2.style.display="none"
question2.innerHTML=questions.q2
const question3= document.getElementById('question3')
question3.style.display="none"
question3.innerHTML=questions.q3

const question4= document.getElementById('question4')
question4.style.display="none"
question4.innerHTML=questions.q4
const question5= document.getElementById('question5')
question5.style.display="none"
question5.innerHTML=questions.q5
const question6= document.getElementById('question6')
question6.style.display="none"
question6.innerHTML=questions.q6
const question7 = document.getElementById('question7')
question7.style.display="none"
question7.innerHTML=questions.q7
const question8 = document.getElementById('question8')
question8.style.display="none"
question8.innerHTML=questions.q8
const question9 = document.getElementById('question9')
question9.style.display="none"
question9.innerHTML=questions.q9
const question10 = document.getElementById('question10')
question10.style.display="none"
question10.innerHTML=questions.q10
const nombre= document.getElementById('afficheEquation')
nombre.style.fontSize='35px'
  nombre.innerHTML=`A(${xA};${yA}), B(${xB};${yB}), C(${xC};${yC}) et D(${xD};${yD}). `


let ra1=document.getElementById('ra1')
let ra2=document.getElementById('ra2')
let ra3=document.getElementById('ra3')
let ra4=document.getElementById('ra4')
let ra5=document.getElementById('ra5')
let ra6=document.getElementById('ra6')

let Ra1=xB-xA
let Ra2=yB-yA
let Ra3=xD-xC
let Ra4=yD-yC
let Ra5=xB-xA
let Ra6=yB-yA

let rb1=document.getElementById('rb1')
let rb2=document.getElementById('rb2')
let rb3=document.getElementById('rb3')
let Rb1;
let Rb2;
if(Ra1*Ra4-Ra2*Ra3==0){
    Rb1='proportionnelles'
    Rb2='parallèles'
}
else{
    Rb1='non proportionnelles'
    Rb2='sécantes'
}

let Rb3=Math.pow(Rb1, 2)+Math.pow(Rb2, 2);

let rc1=document.getElementById('rc1')
let rc2=document.getElementById('rc2')
let rc3=document.getElementById('rc3')
let rc4=document.getElementById('rc4')
let rc5=document.getElementById('rc5')
let rc6=document.getElementById('rc6')

let Rc1=-Ra2
let Rc2= Ra1
let Rc3= -Ra4
let Rc4=Ra3
let Rc5= xD-xC
let Rc6= yD-yC

let rd1=document.getElementById('rd1')
let rd2=document.getElementById('rd2')
let rd3=document.getElementById('rd3')
let rd4=document.getElementById('rd4')
let rd5=document.getElementById('rd5')
let rd6=document.getElementById('rd6')
let rd7=document.getElementById('rd7')
let rd8=document.getElementById('rd8')

let Rd1=Rc1
let Rd2= Rc2
let Rd3= -(Rc1*xA+Rc2*yA)
let Rd4=Rc3
let Rd5= Rc4
let Rd6= -(Rc3*xC+Rc4*yC)
let Rd7=m
let Rd8=Rc6

let re1=document.getElementById('re1')
let re2=document.getElementById('re2')
let re3=document.getElementById('re3')
let re4=document.getElementById('re4')
let re5=document.getElementById('re5')
let re6=document.getElementById('re6')

let Re1=Rd1
let Re2=Rd2
let Re3=Rd3
let Re4=Rd4
let Re5=Rd5
let Re6=Rd6


let rf1=document.getElementById('rf1')
let rf2=document.getElementById('rf2')
let rf4=document.getElementById('rf4')
let rf5=document.getElementById('rf5')
let rf3=document.getElementById('rf3')
let rf6=document.getElementById('rf6')

let Rf1=Re2
let Rf2= Re3
let Rf3=Re1
let Rf4= Re4
let Rf5= Re5
let Rf6= Re6

let rg1=document.getElementById('rg1')
let rg2=document.getElementById('rg2')
let rg3=document.getElementById('rg3')
let rg4=document.getElementById('rg4')
let rg6=document.getElementById('rg6')
let rg5=document.getElementById('rg5')
let rg7=document.getElementById('rg7')
let rg8=document.getElementById('rg8')
let rg9=document.getElementById('rg9')


let Rg1=Rf1
let Rg2=Rf2
let Rg3=Rf3
let Rg4=Rf4
let Rg5=Rf1
let Rg6=Rf2
let Rg7=Rf3
let Rg8=Rf5
let Rg9=Rf6
let rh1=document.getElementById('rh1')
let rh2=document.getElementById('rh2')
let rh3=document.getElementById('rh3')
let rh4=document.getElementById('rh4')
let Rh1=Rg1
let Rh2=Rg2
let Rh3=Rg3
let Rh5=(Rg9*Rg7)
let Rh6= Rg4*Rg6
let Rh7=Rh5+Rh6
let Rh8=Rg4*Rg5
let Rh9=Rg8*Rg7
let Rh10=Rh8+Rh9
let Rh4=reduce(-Rh7,Rh10)
console.log('num '+Rh7)
console.log('num1 '+Rg9*Rg7)
console.log('num2 '+Rg4*Rg6)
console.log('denom '+(Rg4*Rg5+Rg8*Rg7)*1)
console.log('test2 '+reduce(Rh7,Rh10))
console.log('testV '+Rh4)
let ri1=document.getElementById('ri1')
let ri2=document.getElementById('ri2')
let ri3=document.getElementById('ri3')
let ri4=document.getElementById('ri4')
let ri5=document.getElementById('ri5')
let Ri1=Rh1
let Ri2=Rh4
let Ri3=Rh2
let Ri4=Rh3
let Ri5=Rh4
let rj1=document.getElementById('rj1')
let rj2=document.getElementById('rj2')
let Rj1=reduce(-Ri1*(Rg9*Rg7+Rg4*Rg6)-Ri3*(Rg4*Rg5+Rg8*Rg7),(Ri4*(Rg4*Rg5+Rg8*Rg7)))
let Rj2=Rh4

document.getElementById('pas').addEventListener('click',()=>{
    chePa()
    console.log('chePz')
})
function chePa(){
    if(sloto==1){
        document.getElementById('ra1').value=Ra1
        document.getElementById('ra1').style.color='red'
        document.getElementById('ra1').style.fontWeight='bold'
        document.getElementById('ra2').value=Ra2
        document.getElementById('ra2').style.color='red'
        document.getElementById('ra2').style.fontWeight='bold'
        document.getElementById('ra3').value=Ra3
        document.getElementById('ra3').style.color='red'
        document.getElementById('ra3').style.fontWeight='bold'
        document.getElementById('ra4').value=Ra4
        document.getElementById('ra4').style.color='red'
        document.getElementById('ra4').style.fontWeight='bold'
question2.style.display="block"
sloto++
    }
     else if(sloto==2){
        document.getElementById('rb1').value=Rb1
        document.getElementById('rb1').style.color='red'
        document.getElementById('rb1').style.fontWeight='bold'
        document.getElementById('rb2').value=Rb2
        document.getElementById('rb2').style.color='red'
        document.getElementById('rb2').style.fontWeight='bold'

question3.style.display="block"
sloto++
    }
    else if(sloto==3){
        document.getElementById('rc1').value=Rc1
        document.getElementById('rc1').style.color='red'
        document.getElementById('rc1').style.fontWeight='bold'
        document.getElementById('rc2').value=Rc2
        document.getElementById('rc2').style.color='red'
        document.getElementById('rc2').style.fontWeight='bold'
        document.getElementById('rc3').value=Rc3
        document.getElementById('rc3').style.color='red'
        document.getElementById('rc3').style.fontWeight='bold'
        document.getElementById('rc4').value=Rc4
        document.getElementById('rc4').style.color='red'
        document.getElementById('rc4').style.fontWeight='bold'

question4.style.display="block"
sloto++
    }
    else if(sloto==4){
        document.getElementById('rd1').value=Rd1
        document.getElementById('rd1').style.color='red'
        document.getElementById('rd1').style.fontWeight='bold'
        document.getElementById('rd2').value=Rd2
        document.getElementById('rd2').style.color='red'
        document.getElementById('rd2').style.fontWeight='bold'
        document.getElementById('rd3').value=Rd3
        document.getElementById('rd3').style.color='red'
        document.getElementById('rd3').style.fontWeight='bold'
        document.getElementById('rd4').value=Rd4
        document.getElementById('rd4').style.color='red'
        document.getElementById('rd4').style.fontWeight='bold'
        document.getElementById('rd5').value=Rd5
        document.getElementById('rd5').style.color='red'
        document.getElementById('rd5').style.fontWeight='bold'
        document.getElementById('rd6').value=Rd6
        document.getElementById('rd6').style.color='red'
        document.getElementById('rd6').style.fontWeight='bold'
  

question5.style.display="block"
sloto++
    }

    else if(sloto==5){
        document.getElementById('re1').value=Rd1
        document.getElementById('re1').style.color='red'
        document.getElementById('re1').style.fontWeight='bold'
        document.getElementById('re2').value=Rd2
        document.getElementById('re2').style.color='red'
        document.getElementById('re2').style.fontWeight='bold'
        document.getElementById('re3').value=Rd3
        document.getElementById('re3').style.color='red'
        document.getElementById('re3').style.fontWeight='bold'
        document.getElementById('re4').value=Rd4
        document.getElementById('re4').style.color='red'
        document.getElementById('re4').style.fontWeight='bold'
        document.getElementById('re5').value=Rd5
        document.getElementById('re5').style.color='red'
        document.getElementById('re5').style.fontWeight='bold'
        document.getElementById('re6').value=Rd6
        document.getElementById('re6').style.color='red'
        document.getElementById('re6').style.fontWeight='bold'
  

question6.style.display="block"
sloto++
    }
    else if(sloto==6){
        document.getElementById('rf1').value=Rf1
        document.getElementById('rf1').style.color='red'
        document.getElementById('rf1').style.fontWeight='bold'
        document.getElementById('rf2').value=Rf2
        document.getElementById('rf2').style.color='red'
        document.getElementById('rf2').style.fontWeight='bold'
        document.getElementById('rf3').value=Rf3
        document.getElementById('rf3').style.color='red'
        document.getElementById('rf3').style.fontWeight='bold'
        document.getElementById('rf4').value=Rf4
        document.getElementById('rf4').style.color='red'
        document.getElementById('rf4').style.fontWeight='bold'
        document.getElementById('rf5').value=Rf5
        document.getElementById('rf5').style.color='red'
        document.getElementById('rf5').style.fontWeight='bold'
        document.getElementById('rf6').value=Rf6
        document.getElementById('rf6').style.color='red'
        document.getElementById('rf6').style.fontWeight='bold'
  

question7.style.display="block"
sloto++
    }
    else if(sloto==7){
        document.getElementById('rg1').value=Rg1
        document.getElementById('rg1').style.color='red'
        document.getElementById('rg1').style.fontWeight='bold'
        document.getElementById('rg2').value=Rg2
        document.getElementById('rg2').style.color='red'
        document.getElementById('rg2').style.fontWeight='bold'
        document.getElementById('rg3').value=Rg3
        document.getElementById('rg3').style.color='red'
        document.getElementById('rg3').style.fontWeight='bold'
        document.getElementById('rg4').value=Rg4
        document.getElementById('rg4').style.color='red'
        document.getElementById('rg4').style.fontWeight='bold'
        document.getElementById('rg5').value=Rg5
        document.getElementById('rg5').style.color='red'
        document.getElementById('rg5').style.fontWeight='bold'
        document.getElementById('rg6').value=Rg6
        document.getElementById('rg6').style.color='red'
        document.getElementById('rg6').style.fontWeight='bold'
        document.getElementById('rg7').value=Rg7
        document.getElementById('rg7').style.color='red'
        document.getElementById('rg7').style.fontWeight='bold'
        document.getElementById('rg8').value=Rg8
        document.getElementById('rg8').style.color='red'
        document.getElementById('rg8').style.fontWeight='bold'
        document.getElementById('rg9').value=Rg9
        document.getElementById('rg9').style.color='red'
        document.getElementById('rg9').style.fontWeight='bold'
  

question8.style.display="block"
sloto++
    }
    else if(sloto==8){
        document.getElementById('rh1').value=Rh1
        document.getElementById('rh1').style.color='red'
        document.getElementById('rh1').style.fontWeight='bold'
        document.getElementById('rh2').value=Rh2
        document.getElementById('rh2').style.color='red'
        document.getElementById('rh2').style.fontWeight='bold'
        document.getElementById('rh3').value=Rh3
        document.getElementById('rh3').style.color='red'
        document.getElementById('rh3').style.fontWeight='bold'
        document.getElementById('rh4').value=Rh4
        document.getElementById('rh4').style.color='red'
        document.getElementById('rh4').style.fontWeight='bold'
        console.log('dernir '+Rh4)

question9.style.display="block"
sloto++
    }

    else if(sloto==9){
        document.getElementById('ri1').value=Ri1
        document.getElementById('ri1').style.color='red'
        document.getElementById('ri1').style.fontWeight='bold'
        document.getElementById('ri2').value=Ri2
        document.getElementById('ri2').style.color='red'
        document.getElementById('ri2').style.fontWeight='bold'
        document.getElementById('ri3').value=Ri3
        document.getElementById('ri3').style.color='red'
        document.getElementById('ri3').style.fontWeight='bold'
        document.getElementById('ri4').value=Ri4
        document.getElementById('ri4').style.color='red'
        document.getElementById('ri4').style.fontWeight='bold'
        document.getElementById('ri5').value=Ri5
        document.getElementById('ri5').style.color='red'
        document.getElementById('ri5').style.fontWeight='bold'
        console.log('dernir '+Rh4)

question10.style.display="block"
sloto++
    }
    else if(sloto==10){
        document.getElementById('rj1').value=Rj1
        document.getElementById('rj1').style.color='red'
        document.getElementById('rj1').style.fontWeight='bold'
        document.getElementById('rj2').value=Rj2
        document.getElementById('rj2').style.color='red'
        document.getElementById('rj2').style.fontWeight='bold'

        console.log('dernir '+Rh4)

question8.style.display="block"
sloto++
    }
}
const afficheScore= document.getElementById('score2')
function afficheScore2(){
    afficheScore.innerHTML=score2
    console.log('afficheScore')
}
document.getElementById('corriger').addEventListener('click',()=>{
    verif()
})
function initialize3(){
    window.location.reload()
}

document.getElementById('newVectors').addEventListener('click',()=>{
    initialize3()
})


function nulll(a){
    if(a==0){
        return 'nul'
    }else{
        return 'non nul'
    }

}
function coll(a){
    if(a==0){
        return 'colinéaires'
    }else{
        return 'ne sont pas colinéaires'
    }
}
function align(a){
    if(a==0){
        return 'alignés.'
    }else{
        return 'ne sont pas alignés.'
    }
}


function verif(){
    console.log('first'+first)
if(sloto==1){
    if(ra1.value==Ra1 &&
    ra2.value==Ra2 && 
    ra3.value==Ra3 &&
    ra4.value==Ra4
  
    ){
        if (first){
            score2++
            afficheScore2()
        
        }
        question2.style.display='block'
        first=true
        sloto++
        bonneReponse()
  
    }
    else{
        console.log('fausse reppone')
        first=false
        mauvaiseReponse()
     
     
    }}
else if(sloto==2){
    if(rb1.value==Rb1 &&
    rb2.value==Rb2 
  
    ){
        question3.style.display='block'
        sloto++
        bonneReponse()
        if (first){
            score2++
            afficheScore2()
        }
        first=true
    }
    else{
        console.log('fausse reppone')
        first=false
        mauvaiseReponse()
    }

}
else if(sloto==3){
    if(rc1.value==Rc1 &&
    rc2.value==Rc2 && rc3.value==Rc3 &&
    rc4.value==Rc4
 
  
    ){
        bonneReponse()
        question4.style.display='block'
        sloto++
        if (first){
            score2++
            afficheScore2()
        }
        first=true
    }
    else{
        
    
        first=false
        console.log('fausse reppone 3')

      
        mauvaiseReponse()
    }

}
else if(sloto==4){
    if(rd1.value==Rd1 &&
        rd2.value==Rd2 &&
        rd3.value==Rd3 &&
        rd4.value==Rd4 &&
        rd5.value==Rd5 &&
        rd6.value==Rd6
    ){
        bonneReponse()
        question5.style.display='block'
        sloto++
        if (first){
            score2++
            afficheScore2()
        }
        first=true
    }
    else{
        console.log('fausse reppone')
        first=false
        mauvaiseReponse()
      
 
    }}
    else if(sloto==5){
    if(re1.value==Re1 &&
        re2.value==Re2 &&
        re3.value==Re3 &&
        re4.value==Re4 &&
        re5.value==Re5 &&
        re6.value==Re6 

    ){
        bonneReponse()
        question6.style.display='block'
        sloto++
        if (first){
            score2++
            afficheScore2()
        }
        first=true
    }
    else{
        console.log('fausse reppone')
        first=false
        mauvaiseReponse()
        console.log(Re1)
        console.log( re1.value)
        console.log(Re2)
        console.log( re2.value)
        console.log(Re3)
        console.log(re3.value)
    }}
    else if(sloto==6){
    if(rf1.value==Rf1 &&
        rf2.value==Rf2 &&
        rf3.value==Rf3 &&
        rf4.value==Rf4 &&
        rf5.value==Rf5 &&
        rf6.value==Rf6

 
    ){
        bonneReponse()
       console.log('ok reussi')
       if (first){
            score2++
            afficheScore2()
           
        }
        first=true
        sloto++
        question7.style.display="block"
  
    }
    else{
        console.log('fausse reppone')
        first=false
        mauvaiseReponse()
        console.log(Rf1)
        console.log( rf1.value)
        console.log(Rf2)
        console.log( rf2.value)
        console.log(Rf3)
        console.log(rf3.value)
        console.log(Rf4)
        console.log(rf4.value)
        console.log(rff1.value)
        console.log(rff2.value)
     
    }}
    else if(sloto==7){
        if(rg1.value==Rg1 &&
        rg2.value==Rg2 && 
        rg3.value==Rg3 &&
        rg4.value==Rg4 &&
        rg5.value==Rg5 &&
        rg6.value==Rg6 &&
        rg7.value==Rg7 &&
        rg8.value==Rg8 &&
        rg9.value==Rg9
     
        ){
            question8.style.display='block'
            console.log('ok on y est')
            bonneReponse()
           console.log('ok reussi')
           if (first){
                score2++
                afficheScore2()
            }
          
        //     if(score2==7){
        //         top()
        //    }
        //    InsertData()
        //    console.log('dataend')
        }
        else{
            console.log('fausse reppone')
            first=false
            mauvaiseReponse()
        }}
        else if(sloto==8){
            if(rh1.value==Rh1 &&
            rh2.value==Rh2 && 
            rh3.value==Rh3 &&
            rh4.value==Rh4 
         
            ){
                question9.style.display='block'
                console.log('ok on y est')
                bonneReponse()
               console.log('ok reussi')
               if (first){
                    score2++
                    afficheScore2()
                }
              
          
            }
            else{
                console.log('fausse reppone')
                first=false
                mauvaiseReponse()
            }}
            else if(sloto==9){
                if(ri1.value==Ri1 &&
                ri2.value==Ri2 && 
                ri3.value==Ri3 &&
                ri4.value==Ri4 
             
                ){
                    question10.style.display='block'
                    console.log('ok on y est')
                    bonneReponse()
                   console.log('ok reussi')
                   if (first){
                        score2++
                        afficheScore2()
                    }
                  sloto++
              
                }
                else{
                    console.log('fausse reppone')
                    first=false
                    mauvaiseReponse()
                }}
                else if(sloto==10){
                    if(rj1.value==Rj1 &&
                    rj2.value==Rj2
                 
                    ){
                        question10.style.display='block'
                        console.log('ok on y est')
                        bonneReponse()
                       console.log('ok reussi')
                       if (first){
                            score2++
                            afficheScore2()
                        }
                      if(score==10){
                        top()

                      }
                  InsertData()
                    }
                    else{
                        console.log('fausse reppone')
                        first=false
                        mauvaiseReponse()
                    }}
}
function top(){
    endBravo.play()
    congrulations.play()
    confettiBoucle()
reussiReponses()

}
// function reduce(number,denomin){
//     var gcd = function gcd(a,b){
//       return b ? gcd(b, a%b) : a;
//     };
//     gcd = gcd(number,denomin);
    
//   if(denomin/gcd==1){
//     return number/gcd
//   }
//     else{
//         if(denomin/gcd<0){
//             return -number/gcd +"/"+ -denomin/gcd
//         }
//         else {
//             return number/gcd +"/"+ denomin/gcd
//         }

//     }
//   }
///juste pour travailler
console.log('y '+  Rj1)
document.getElementById('myModal4').style.display="none"
document.getElementById('afficheEquation').style.display="block"


question1.style.display="block"
question2.style.display="none"
question3.style.display="none"
question4.style.display="none"
question6.style.display="none"
question5.style.display="none"
question7.style.display="none"
// console.log('det '+Rd5)

sloto=1
score2=0

export{score2,verif,chePa}
let a= -2
let b= 8
let c= -3
let d= 5
let j=0
let emoj=["&#128170","&#128170","&#128170","&#128170","&#128051","&#128051","&#128051","&#128028","&#129419"]

let z0=0
let z=0
let z1=0
let z2=0
let z3=0
let z4=0
let z5=0
let z6=0
let z7=0
let z8=0
let z9=0
let z10=0
let z11=0
let z12=0
let z13=0



let n0=0

let p=0
let cl=0
let v = "&le;"
let w = "&geq;"
let G=[v,w,"<",">","="]
let M=[]
let Q= 0

let equationEl= document.getElementById("count2")
let messageEl =document.getElementById("message")
let resoudreEl = document.getElementById("count1")
let methodEl0= document.getElementById("method0")
let methodEl1 = document.getElementById("method1")
let methodEl2 = document.getElementById("method2")
let methodEl3 = document.getElementById("method3")
let methodEl4 = document.getElementById("method4")
let methodEl5 = document.getElementById("method5")
let methodEl6 = document.getElementById("method6")
let methodEl7 = document.getElementById("method7")
let methodEl8 = document.getElementById("method8")
let methodEl9 = document.getElementById("method9")


function randomNumber9(){
    return Math.floor(Math.random()*9)
}

function randomNumber(){
    return Math.floor(Math.random()*20)-10
}

function randomNumber2(){
    return Math.floor(Math.random()*4)
}


function nouvellEquation(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
 
   let t= a+"x"+"+"+b+"="+ c+"+" +  d +"x"
    equationEl.textContent = t
    resoudreEl.textContent ="Résoudre dans l'ensemble des nombres réels, l'équation ci-dessous: "
    messageEl.textContent=" "
    methodEl1.textContent ="" 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
}

function solution(){
    if (cl==1){
    messageEl.textContent= "La solution est:" +" " +"x=" +reduce((d-b),(a-c))+" c'est à dire que x="+(d-b)/(a-c)
    }
  
}


    function reduce(number,denomin){
        var gcd = function gcd(a,b){
          return b ? gcd(b, a%b) : a;
        };
        gcd = gcd(number,denomin);
        return number/gcd +"/"+ denomin/gcd
      }

let R=[,]
let L=[,]
function generator(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
    L=[a+"x",b]

    R=[c+"x",d]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    LL= L[e]+"+"+L[(e+1)%2]
    RR= R[f]+"+"+R[(f+1)%2]
    
    resoudreEl.innerHTML="Résoudre dans l'ensemble des nombres réels &reals; , l'équation ci-dessous: " 
    
    equationEl.textContent = LL +"="+ RR 
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "

    cl= 1
}


function solution2(){
    if (cl==1){
    messageEl.textContent= "La solution est:" +" " +"x=" +reduce((d-b),(a-c))+" c'est à dire que x="+ ((d-b)/(a-c))
    }
    else if(cl==2){

        if((a-c)>0 && j==0){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"]"
        }
        if((a-c)>0 && j==1){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"[" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
        }
        if((a-c)>0 && j==2){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"["
        }
        if((a-c)>0 && j==3){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
        }
        if((a-c)<0 && j==0){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"[" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
        }
        if((a-c)<0 && j==1){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"]"
        }
        if((a-c)<0 && j==2){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
        }
        if((a-c)<0 && j==3){
            methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"["
        }


    }

    else if(cl==3){
        messageEl.innerHTML=RR+"="+a**2+"x"+"&sup2;"+"+" +2*a*b+"x"+" +"+b**2
    }

    else if(cl==5){
       methodEl6.innerHTML = "Finalement la solution est: "
         
    
   methodEl7.innerHTML = z7+" &le; "+z+" < "+ z10
         
    }
    else if(cl==6){
        
 methodEl7.innerHTML = "On en déduit alors que l'arrondi de "+z +" est: "
     


    methodEl8.innerHTML = z19
     

    }
    else if(cl==7){
        methodEl2.innerHTML = "Ainsi, on a: "+a**2+"x"+"&sup2;"+"+" +2*a*b+"x"+" +"+b**2+"="+RR
         
    }
    else if (cl==8){
        methodEl6.innerHTML = "Finalement la solution est: "
         
     methodEl7.innerHTML = "S={"+reduce(-b,a)+";"+ reduce(-d,c) +"}"
         
}
    }




function revers(n){
    if (n==0){
        return 1}
    else if (n==1){
        return 0}
    else if (n==2){
          return   3}
       else if (n==3){
           return 2}
           if (n==4){
            return 4}
    }
console.log(revers(2))


function generatorInequation(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
    j=randomNumber2()
    L=[a+"x",b]

    R=[c+"x",d]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    LL= L[e]+"+"+L[(e+1)%2]
    RR= R[f]+"+"+R[(f+1)%2]
    
    resoudreEl.innerHTML ="Résoudre dans l'ensemble des nombres réels &reals;, l'inéquation ci-dessous: " 
    
    equationEl.innerHTML = LL +" "+ G[j]+ " "+ RR 
    cl=2
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
}




function method(){

if(cl==1){
   
    if(p==0){
    methodEl1.textContent = a+"x"+"+"+b+"="+ c+"x"+ "+"+d 
  
    }
    else if(p==1){
    methodEl2.textContent =a+"x"+"+"+b+ "-" +"("+c+"x"+")"+"="+ c+"x"+ "+"+d +"-" +"("+c+"x"+")"
   
    }
    else if(p==2){
    methodEl3.textContent = (a-c)+"x"+"+"+b+"="+d 
    
    }
    else if(p==3){ methodEl4.textContent = (a-c)+"x"+"+"+b+"+"+"("+"-"+b+")"+"="+d+"+" +"("+"-"+b+")"
 
}
    else if(p==4){methodEl5.textContent = (a-c)+"x"+"="+(d-b) 
  
}
    else if(p==5){methodEl6.textContent = "x"+"="+(d-b) +"/"+(a-c)
}
   else if(p==6){methodEl7.textContent = "x"+"="+reduce((d-b),(a-c))
}
   else if(p==7){methodEl8.textContent = "x"+"="+(d-b)/(a-c)
} 
    p+=1
}
else if (cl == 2){
 
    if(p==0){
    methodEl1.innerHTML =  a+"x"+"+"+b+" "+G[j]+ " "+ c+"x"+ "+"+d
    }
    else if(p==1){
        methodEl2.innerHTML =a+"x"+"+"+b+ "-" +"("+c+"x"+")"+" "+G[j]+ " "+ c+"x"+ "+"+d +"-" +"("+c+"x"+")"
       
        }
        else if(p==2){
        methodEl3.innerHTML = (a-c)+"x"+"+"+b+" "+G[j]+ " "+d 
        
        }
        else if(p==3){ methodEl4.innerHTML = (a-c)+"x"+"+"+b+"+"+"("+"-"+b+")"+" "+G[j]+ " "+d+"+" +"("+"-"+b+")"
     
    }
        else if(p==4){methodEl5.innerHTML = (a-c)+"x"+" "+G[j]+ " "+(d-b) 
      
    }
        else if(p==5){
            
            if ((a-c)<0){
                methodEl6.innerHTML= "x"+" "+G[revers(j)]+ " "+(d-b) +"/"+(a-c)
            }
            else{
            methodEl6.innerHTML= "x"+" "+G[j]+ " "+(d-b) +"/"+(a-c)}

    }
       else if(p==6){
        if ((a-c)<0){
            methodEl7.innerHTML = "x"+" "+G[revers(j)]+ " "+reduce((d-b),(a-c))
        }
        else{
        methodEl7.innerHTML = "x"+" "+G[j]+ " "+reduce((d-b),(a-c))
        }
    }
       else if(p==7){
        if((a-c)<0){
            methodEl8.innerHTML = "x"+" "+G[revers(j)]+ " "+(d-b)/(a-c)
        }
        else{
        methodEl8.innerHTML = "x"+" "+G[j]+ " "+(d-b)/(a-c)
        }}

        else if(p==8){
            if((a-c)>0 && j==0){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"]"
            }
            if((a-c)>0 && j==1){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"[" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
            }
            if((a-c)>0 && j==2){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"["
            }
            if((a-c)>0 && j==3){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
            }
            if((a-c)<0 && j==0){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"[" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
            }
            if((a-c)<0 && j==1){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"]"
            }
            if((a-c)<0 && j==2){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +reduce((d-b),(a-c))+" "+";"+" "+"+"+"&#8734"+"["
            }
            if((a-c)<0 && j==3){
                methodEl9.innerHTML = "L'ensemble de solutions S est"+" "+"S="+"]" +"-"+ "&#8734"+" "+";"+" "+reduce((d-b),(a-c))+"["
            }

        }
        p+=1
    } 


    if(cl==3){
   
        if(p==0){
        methodEl1.innerHTML = "="+ "("+a+"x"+")"+"&sup2;"+" +"+2+"&times;" +a+"&times;"+b+"x"+"+"+b+"&sup2;"
      
        }
        else if(p==1){
        methodEl2.innerHTML ="="+a+"&sup2;"+"x"+"&sup2;" +"+2"+"&times;" +a+"&times;"+b+"x"+" +"+b+"&sup2;"
       
        }
        else if(p==2){
        methodEl3.innerHTML = "="+a**2+"x"+"&sup2;"+"+" +2*a*b+"x"+" +"+b**2
        
        }
        else if(p==3){ methodEl4.innerHTML = "Ainsi, on a :"+ RR+"="+a**2+"x"+"&sup2;"+"+" +2*a*b+"x"+" +"+b**2
     
    }
        p+=1
    }

    if(cl==4){
   
        if(p==0){
        methodEl1.innerHTML = "="+a+"x"+"&times;"+c+"x"+"+"+" "+a+"x"+"&times;"+d+"+"+" "+b+"&times;"+c+"x"+"+"+" "+b+"&times;"+d
      
        }
        else if(p==1){
        methodEl2.innerHTML ="="+a+"&times;"+c+"x"+"&sup2;"+"+"+" "+a*d+"x"+"+"+" "+b*c+"x"+"+"+" "+b*d
       
        }
        else if(p==2){
        methodEl3.innerHTML ="="+a*c+"x"+"&sup2;"+"+"+" "+(a*d+b*c)+"x"+"+"+" "+b*d
       
        
        }
        else if(p==3){ methodEl4.innerHTML = "Ainsi, on a :"+ Q+"="+a*c+"x"+"&sup2;"+"+"+" "+(a*d+b*c)+"x"+"+"+" "+b*d
     
    }
        p+=1
    }


    if (cl==5){

        if(p==0){
            methodEl1.innerHTML = "C'est très simple et facile ! Faisons le ensemble ! &#128527; "
          
            }
            else if(p==1){
            methodEl2.innerHTML =" Il faut d'abord recopier le nombre jusqu'à "+-n0 +" chiffres après la virgule.&#129312; "
           
            }
            else if(p==2){
            methodEl3.innerHTML ="Ici, dans notre cas, on aura le donc nombre "+z7
           
            
            }
            else if(p==3){ methodEl4.innerHTML = "On a alors: "+z7+" &le; "+z
         
        }else if(p==4){ methodEl5.innerHTML = "En ajoutant 1 au dernier chiffre du nombre tronqué "+ z7+" on pourra majorer "+z+" pour avoir : "+z+" < "+ z10
         
    }
    else if(p==5){ methodEl6.innerHTML = "Finalement la solution est: "
         
    }
    else if(p==6){ methodEl7.innerHTML = z7+" &le; "+z+" < "+ z10
         
}
            p+=1


    }

    if (cl==6){

        if(p==0){
            methodEl1.innerHTML = "C'est très simple et facile ! Faisons le ensemble ! &#128527; "
          
            }
    else if(p==1){
            methodEl2.innerHTML =" On donne tout d'abord un encadrement à 10 "+"<sup>"+n0+"</sup> de: "+z+ ".&#129312;"
       
            }

    else if(p==2){
            methodEl3.innerHTML =z7+" &le; "+z+" < "+ z10
           
            
            }
        else if(p==3){ methodEl4.innerHTML = "L'arrondi c'est la borne la plus proche de "+z
         
        }
    else if(p==4){ methodEl5.innerHTML = " L'écart avec la borne inférieure est: "+ z+"-"+z7+" soit: "+ z17
         
}
else if(p==5){ methodEl6.innerHTML = "L'écart avec la borne supérieure est: "+ z10+"-"+ z +" soit: "+ z18
     
}


else if(p==6){ methodEl7.innerHTML = "On en déduit alors que l'arrondi de "+z +" est: "
     
}


else if(p==7){ methodEl8.innerHTML = z19
     
}
            p+=1
    }

    
    if(cl==7){
       
if(p==0){

            methodEl1.innerHTML = "="+ "("+a+"x"+")"+"&sup2;"+" +"+2+"&times;" +a+"&times;"+b+"x"+"+"+b+"&sup2;"
          
            }
            else if(p==1){ methodEl2.innerHTML = "Ainsi, on a: "+a**2+"x"+"&sup2;"+"+" +2*a*b+"x"+" +"+b**2+"="+RR
         
        }
 
  
    p=p+1
       
    }

       if (cl==8){
        if(p==0){
            methodEl1.innerHTML = "C'est très simple et facile ! Faisons le ensemble ! &#128527; "
          
            }
            else if(p==1){
            methodEl2.innerHTML =" Il faut d'abord résoudre le premier facteur égal à 0 soit  "+Q1+"="+"0" +"&#129312; "
           
            }
            else if(p==2){
            methodEl3.innerHTML ="Cette équation a pour solution: "+ reduce(-b,a)+" soit "+-(b/a)
           
            
            }
            else if(p==3){
                methodEl4.innerHTML =" Puis, on résoud le deuxième facteur égal à 0 soit  "+Q2+"="+"0" +"&#129312; "
               
                }
                else if(p==4){
                methodEl5.innerHTML ="Cette équation a pour solution: "+ reduce(-d,c) +" soit "+-(d/c)
               
                
                }
    else if(p==5){ methodEl6.innerHTML = "Finalement la solution est: "
         
    }
    else if(p==6){ methodEl7.innerHTML = "S={"+reduce(-b,a)+";"+ reduce(-d,c) +"}"
         
}
p++








        Q1= R[e]+"+"+R[(e+1)%2]
    Q2= S[e]+"+"+S[(e+1)%2]
    Q="("+ Q1 +")"+"("+ Q2 +")"

       }
}


function ouvrir() {
   
    document.getElementById("mySidebar").style.width = "auto";
  }
  
  function fermer() {
    document.getElementById("mySidebar").style.width= "0";
  }












  function identite(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
    j=randomNumber2()
    L=[a,b]

    R=[a+"x",b]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    LL= R[e]+"+"+R[(e+1)%2]
    RR= "("+LL+")"+"&sup2;"
    
    resoudreEl.innerHTML =" Développer l'expression ci-dessous: " 
    
    equationEl.innerHTML = RR
    cl=2
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
    cl=3
}





function doubleProduit(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
    j=randomNumber2()
    L=[a,b]
    M=[c,d]

    R=[a+"x",b]
    S=[c+"x",d]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    Q1= R[e]+"+"+R[(e+1)%2]
    Q2= S[e]+"+"+S[(e+1)%2]
    Q="("+ Q1 +")"+"("+ Q2 +")"

    
    
    resoudreEl.innerHTML =" Développer l'expression ci-dessous: " 
    
    equationEl.innerHTML = Q
    cl=2
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
    cl=4
}

z100= Math.floor(Math.random()*100000000000)
function encadrement(){
    d=randomNumber9()
    z0= Math.floor(Math.random()*100000000000)
    z1=z0.toString()
    z2=z1.length
    z3= Math.floor(Math.random()*5)
    z4= Math.floor(Math.random()*5)
    n0=-z4
    z= (z0/(10**(z2-z3)))
    z6=z.toString()
    z7=z6.slice(0,(z3-n0+1))
    z8=(z+10**(n0))
    z9=z8.toString()
    z10=z9.slice(0,(z3-n0+1))
    if (z<1){
        z7=z6.slice(0,(z3-n0+2))
        z10=z9.slice(0,(z3-n0+2))
    }
    resoudreEl.innerHTML =" Donner un encadrement à 10"+"<sup>"+n0+"</sup> de: "
    
    equationEl.innerHTML = z+ emoj[d]
    cl=5
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
    console.log(emoj[1])
    console.log(emoj[randomNumber9()])


}
let z111= 0
let z112= 0
let z14= 0
let z15= 0
let z16= 0
let z17= 0
let z18= 0
let z19= 0


function arrondi(){
    d=randomNumber9()
    z0= Math.floor(Math.random()*100000000000)
    z1=z0.toString()
    z2=z1.length
    z3= Math.floor(Math.random()*5)
    z4= Math.floor(Math.random()*5)
    n0=-z4
    z= (z0/(10**(z2-z3)))
    z6=z.toString()
    z7=z6.slice(0,(z3-n0+1))
    z8=(z+10**(n0))
    z9=z8.toString()
    z10=z9.slice(0,(z3-n0+1))
    z111= z6.slice((z3-n0+1),(z3-n0+1+2))
    z11= 0+"."+z111
    if (z<1){
        z7=z6.slice(0,(z3-n0+2))
        z10=z9.slice(0,(z3-n0+2))
    }

    z15=Number(z7)
    z16=Number(z10)
    z17=z-z15
    z18= z16-z
    
    resoudreEl.innerHTML =" Donner l'arrondi  à 10"+"<sup>"+n0+"</sup> de: "
    
    equationEl.innerHTML = z+emoj[d]
    cl=6
    if (z17<z18){
        z19=z7
    }
    else if(z17>=z18){
        z19=z10
    }
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
}





function factoriser(){

    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
    j=randomNumber2()
    L=[a,b]

    R=[a+"x",b]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    LL= R[e]+"+"+R[(e+1)%2]
    RR= "("+LL+")"+"&sup2;"
    
    resoudreEl.innerHTML =" Factoriser l'expression ci-dessous: " 
    
    equationEl.innerHTML = a**2+"x"+"&sup2;"+"+" +2*a*b+"x"+" +"+b**2
 
    cl=2
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
    cl=7
}





function produitNul(){
    a= randomNumber()
    b= randomNumber()
    c= randomNumber()
    d= randomNumber()
    j=randomNumber2()
    L=[a,b]
    M=[c,d]

    R=[a+"x",b]
    S=[c+"x",d]
    e= Math.floor(Math.random()*2)
    f= Math.floor(Math.random()*2)

    Q1= R[e]+"+"+R[(e+1)%2]
    Q2= S[e]+"+"+S[(e+1)%2]
    Q="("+ Q1 +")"+"("+ Q2 +")"+"="+0

    
    
    resoudreEl.innerHTML =" Résoudre dans l'ensemble des nombres réels &reals; l'équation produit nul: " 
    
    equationEl.innerHTML = Q
   
    messageEl.textContent =" "
    p=0
    methodEl0.textContent =" "
    methodEl1.textContent =" " 
    methodEl2.textContent=" "
    methodEl3.textContent=" "
    methodEl4.textContent=" "
    methodEl5.textContent=" "
    methodEl6.textContent=" "
    methodEl7.textContent=" "
    methodEl8.textContent=" "
    methodEl9.textContent=" "
    cl=8



}
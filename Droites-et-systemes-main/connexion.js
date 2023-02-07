const dossier ='205Det'
const url='file:///C:/Users/manga/Documents/firebase/vecteursOperations2/login.html'
const elem= document.querySelector('body')
const commentaires= document.getElementById('commentaires')
const identity= document.getElementById('identity')
import {score2} from "/main.js"
import {newTiming,blue} from "/animated.js"
import{setTime} from "/animated.js"
let active=false
let firstName1;
let lastName1;
let email;
let password;
let ancienneNote;
let timing=0
let nbPlays=0

//liste


function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function enregistrer(){
    console.log('cliqué')
     nom= document.getElementById("name").value
 prenom= document.getElementById("prenom").value
 identifiant =document.getElementById("identifiant").value
 document.getElementById('myModel4').style.display='none'
 window.open(url,'','fullscreen=yes')
 document.documentElement.requestFullscreen()
 openFullscreen() 
}




/// on prend le relais 



              // Import the functions you need from the SDKs you need
              import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyAfkh3Mc9FDtmFfjqtqyz9N-glmLVElZAw",
          authDomain: "authe-423f3.firebaseapp.com",
          databaseURL: "https://authe-423f3-default-rtdb.asia-southeast1.firebasedatabase.app/",
          projectId: "authe-423f3",
          storageBucket: "authe-423f3.appspot.com",
          messagingSenderId: "900566541846",
          appId: "1:900566541846:web:1591a80ec8ae00ccc1f737"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
       
        
//         document.getElementById('login').addEventListener('click',function(){
//             const email1= document.getElementById("prenom").value
//             const password1= document.getElementById("identifiant").value
//             if(check()){
//             signInWithEmailAndPassword(auth, email1, password1)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     console.log('logged')
//     // location.assign('/login.html')
//   //  location.assign('/Users/manga/Documents/firebase/login.html')
//   document.getElementById('connexion').display ='none'
//   document.getElementById('jeu').display='block'
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode +errorMessage)
//   });
//             }
//         })



        
        //THIS IS WHERE YOU PASTE THE CODE TO CONNECT TO YOUR OWN DATABASE
        //Copy and paste the CDN bit of code from your app that you created on Firebase.
        //The script tag above is already there, so careful not to have duplicate script tags.
        //After you've copied and pasted, just delete the unnecessary script tags. 
   

        import {getDatabase, ref, get, set, child, update, remove}
        from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"//Copy and Paste the URL from near the top of the CDN you pasted in from firebase
        // (the one where you imported "initializeApp" from),
        //but change "firebase-app" to "firebase-database"
        

        const db = getDatabase();
        const dbRef= ref(db)
       
       
        function check2(){
    //         firstName1= document.getElementById("firstName").value  
    //  lastName1= document.getElementById("lastName").value  
   
        get(child(dbRef, `${dossier}/${firstName1}${lastName1}/played`)).then((snapshot) => {
            // get(child(dbRef, `Notes/julieMangal/played`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log('_a exsite')
    console.log(snapshot.val());
    return 'yoplait'
 
  } 
  else {
    console.log("No data available");
    return 'boulot'
  }


}).catch((error) => {
  console.error(error);
  return false
});}


    
// document.getElementById("").addEventListener('click',()=>{
//   insertData()
// })

       
      let identifiant;  

document.getElementById('evaluer').addEventListener('click',function(){
  console.log('comparer '+ Math.max(score2, ancienneNote))
  console.log('evaluééé')
active=true
openFullscreen()
             document.getElementById('myModal4').style.display="none"
          document.getElementById('wait2').style.display="block"
            password= document.getElementById("identifiant").value
            
     firstName1= document.getElementById("prenom").value  
    lastName1= document.getElementById("nom").value  
      email= document.getElementById("email").value  
      identifiant=document.getElementById('identifiant').value
console.log('firsTName '+ firstName1)
console.log('firsTName '+ lastName1)

identity.innerHTML= lastName1+ ' '+firstName1
     
  get(child(dbRef, `${dossier}/${lastName1}${firstName1}${identifiant}/played`)).then((snapshot) => {
            


    if (!snapshot.exists()) {
        console.log('_a exsite pas ')
    console.log(snapshot.val());
  
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // console.log('created')
    // console.log(firstName +lastName)
    document.getElementById('wait2').style.display="none"
    document.getElementById('myModal4').style.display ='none'
  document.getElementById('myModal5').style.display='block'


})    
   } else{
    // alert('Tu ne peux pas être noté une deuxieme fois')
    document.getElementById('wait2').style.display="none"
    document.getElementById('refus').style.display="block"
    document.getElementById('autre2').addEventListener('click',()=>{
        window.location.reload()
    })
   } })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log('error '+ errorMessage)
    document.getElementById('myModal4').style.display="none"
          document.getElementById('wait2').style.display="none"
          document.getElementById('refus').style.display="block"
  });
}


)


// login se connecter
document.getElementById('login').addEventListener('click',()=>{


  firstName1= document.getElementById("prenom").value  
  lastName1= document.getElementById("nom").value  
    email= document.getElementById("email").value  
    identifiant=document.getElementById('identifiant').value
 
document.getElementById('identity').innerHTML=lastName1+' '+firstName1
getNbPlays()

    openFullscreen()
             document.getElementById('myModal4').style.display="none"
          document.getElementById('wait2').style.display="block"
    signInWithEmailAndPassword(auth, email, identifiant)
      .then((userCredential) => {
        getAncienneNote()
        getMaxEntrainements()
       
        // Signed in 
        const user = userCredential.user;
        active=true
        console.log('logged')
        document.getElementById('afficheNom').innerHTML=lastName1+' '+firstName1
        document.getElementById('wait2').style.display="none"
    document.getElementById('myModal4').style.display ='none'
  document.getElementById('myModal5').style.display='block'

 
  getMaxEntrainements()
  getTiming()
  console.log('ancien Timin '+ timing)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('error '+ errorMessage)

      });

}


)

function InsertData() {
  liste()
  document.getElementById('afficheTime').innerHTML=blue
 console.log('new Timing' +newTiming)
 console.log('new Timing2 ' +newTiming.toFixed(1))
    console.log('insertDatabegin')
    document.getElementById('afficheNom').innerHTML=nom +' '+ prenom
    document.getElementById('wait').style.display='block'
        document.getElementById('afficheNote').innerHTML =score2
firstName1= document.getElementById("prenom").value  
lastName1= document.getElementById("nom").value  
email= document.getElementById("email").value  
identifiant=document.getElementById('identifiant').value
document.getElementById('afficheNom').innerHTML=lastName1+' '+firstName1
console.log('fir '+firstName1)
console.log('fir '+lastName1)
const commentaires1= commentaires.value
console.log('ancienneNote' +ancienneNote)
const scoreFin=Math.max(score2,ancienneNote)
nbPlays++
let  timingFin=600

if(ancienneNote>score2){
  timingFin=timing

}
else if(ancienneNote==score2){
  timingFin=Math.min(timing,blue)
 
}
else{
  
  timingFin=blue
}



    set(ref(db, dossier+'/'+lastName1 +firstName1+identifiant ),{
        firstName: firstName1,
        lastName: lastName1,
        note: scoreFin,
       time: timingFin, 
        comments: commentaires1,
        played:true,
        nbPlays:nbPlays,


    })
    .then(()=>{
        document.getElementById('wait').style.display='none'
        // alert("Note envoyée à M MANGAL ! Merci ! ");
        document.getElementById('myModal6').style.display="block"
        // alert("Super ! Ta note est bien envoyée. M.MANGAL te remercie ");
        document.getElementById('jeu').style.display="none"
        document.getElementById('connexion').style.display="block"
      
        document.getElementById('wait').style.display='none'
        // alert("Note envoyée à M MANGAL ! Merci ! ");
        document.getElementById('myModal6').style.display="block"
        liste()
   
    })
    .catch((error)=>{
        console.log(error);
    });}



    function liste(){
      // console.log('on liste')
    get(child(dbRef, dossier+'/')).then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById('resultatsCamarades').innerHTML=" "
        // console.log(snapshot.val());
        const list=snapshot.val()
        const listName= []
        let long=0
        Object.entries(list).forEach(element => {
          listName.push(element)

        });
        listName.sort(function(a, b){
          if(b[1].note==a[1].note){ 
            if(b[1].time==undefined && a[1].time!=undefined){
              return -1
            }else if(b[1].time!=undefined && a[1].note!=undefined){
              return -(b[1].time-a[1].time)
            }
         
          }
          else{
          return b[1].note - a[1].note}
        
        });
      
// trophée 🏆 🥇 🥈 🥉
let recompense= ' '
let temps;
  let font;
  
  document.getElementById('resultatsCamarades2').innerHTML=" "
        listName.forEach(element=>{
          long++
          if(element[1].firstName==firstName1){
            document.getElementById('afficheClassement').innerHTML=long+'/'+listName.length
            console.log(' firstName '+firstName1)
          }
         
         let color;
         let emoji;
         function assignColor(a){
          if(a<4){
            color='darkOrange'
           
            emoji='&#128560;'
          }
          else if(a==7){
            color='rgb(24, 228, 150)'
            emoji='&#129299;'
          }
          else{
            color='lightBlue'
            emoji='&#129300';
           
          }
        }
        const ecriture='Lobster'
        const taille='34px'
        let note=element[1].time
      
        function reward(long){
          // temps= ` en ${element[1].time}s` 

          if(long==1){
              temps= ` en ${element[1].time}s` 
            
            recompense='🏆🥇'
            emoji=' '
            font=`font-family:${ecriture}; font-size: ${taille}`
          }
          else if(long==2){
            temps= ` en ${element[1].time}s` 
    
         
           recompense= '🥈'
           emoji=' '
           font=`font-family:${ecriture}; font-size: ${taille}`
          }
          else if(long==3){
            temps= ` en ${element[1].time}s` 
     
           recompense= '🥉'
           emoji=' '
           font=`font-family:${ecriture}; font-size: ${taille}`
          }
          else{
            temps= ` en ${element[1].time}s` 
            recompense =' '
            font=''
          }
        }
        assignColor(element[1].note)
        reward(long)
       if(element[1].time==undefined){
        temps=' '
       }
       if(long<2){
       document.getElementById('resultatsCamarades').innerHTML+= `<div class="container">
       <svg viewBox="0 0 690 300">
         <symbol id="s-text">
         <text text-anchor="start" x="2%" y="10%">${long}.${element[1].lastName}${recompense}${emoji}: ${element[1].note}/7 ${temps}</text>
         </symbol>
     
         <g class = "g-ants">
           <use xlink:href="#s-text" class="text-copy"></use>
           <use xlink:href="#s-text" class="text-copy"></use>
           <use xlink:href="#s-text" class="text-copy"></use>
           <use xlink:href="#s-text" class="text-copy"></use>
           <use xlink:href="#s-text" class="text-copy"></use>
         </g>
       </svg>
     </div>`
     document.getElementById('resultatsCamarades2').innerHTML+= `<div class="container">
     <svg viewBox="0 0 690 300">
       <symbol id="s-text">
       <text text-anchor="start" x="2%" y="10%">${long}.${element[1].lastName}${recompense}${emoji}: ${element[1].note}/7 ${temps}</text>
       </symbol>
   
       <g class = "g-ants">
         <use xlink:href="#s-text" class="text-copy"></use>
         <use xlink:href="#s-text" class="text-copy"></use>
         <use xlink:href="#s-text" class="text-copy"></use>
         <use xlink:href="#s-text" class="text-copy"></use>
         <use xlink:href="#s-text" class="text-copy"></use>
       </g>
     </svg>
   </div>`}
      else  if(long>1){
          // console.log(`${element[1].lastName}: ${element[1].note}/7 ${emoji}`)
          document.getElementById('resultatsCamarades').innerHTML+=`<div style="color: ${color}; ${font}">${long}.${element[1].lastName}${recompense}${emoji}: ${element[1].note}/7 ${temps}</div>`
          document.getElementById('resultatsCamarades2').innerHTML+=`<div style="color: ${color}; ${font}">${long}.${element[1].lastName}${recompense}${emoji}: ${element[1].note}/7 ${temps}</div>`
       }
        })
     

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    });
    
    
    }


    function getAncienneNote(){
      // console.log('on liste')
    get(child(dbRef, dossier+'/'+`${lastName1}${firstName1}${identifiant}/note`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        ancienneNote=snapshot.val()
        
      }
      else{
        ancienneNote=0
      }
    }).catch((error) => {
      console.log(error);
    });
    
    
    }

    
    function getNbPlays(){
      // console.log('on liste')
    get(child(dbRef, dossier+'/'+`${lastName1}${firstName1}${identifiant}/nbPlays`)).then((snapshot) => {
      if (snapshot.exists()) {
        nbPlays=snapshot.val()
        console.log('nombreFoisjoué'+nbPlays)
        document.getElementById('nbEntrainements').innerHTML='entrainement n°'+nbPlays
      }else{
        nbPlays=0
      }
    }).catch((error) => {
      console.log(error);
    });
    
    
    }
   
    
    function getMaxEntrainements(){
      // console.log('on liste')
    get(child(dbRef, dossier+'/')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const list=snapshot.val()
        const listName= []
        let long=listName.length
        Object.entries(list).forEach(element => {
          listName.push(element)

        });
        listName.sort(function(a, b){
          if(a[1].nbPlays==undefined && b[1].nbPlays!=undefined ){
            // console.log('on la eu ')
            return- 1
            
          }
          
          return -(b[1].nbPlays - a[1].nbPlays)});





// trophée 🏆 🥇 🥈 🥉
let recompense= ' '
  // console.log('taille long' +listName.length)
  // console.log(listName[0].nbPlays==undefined)
        listName.forEach(element=>{
         

          if(long==listName.length-1){
          // console.log(`${element[1].lastName}: ${element[1].note}/7 ${emoji}`)
          document.getElementById('nameMaxEntrainements').innerHTML=`${element[1].lastName} ${element[1].firstName}💪`
          document.getElementById('nbMaxEntrainements').innerHTML= `${element[1].nbPlays}`
          
          }
       
       long++
        })
     

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    });
    
    
    }

    // liste()

    function getTiming(){
      // console.log('on liste')
    get(child(dbRef, dossier+'/'+`${lastName1}${firstName1}${identifiant}/time`)).then((snapshot) => {
      if (snapshot.exists()) {
        timing=snapshot.val()
        console.log('temps jouée '+timing)

      }else{
        timing=0
      }
    }).catch((error) => {
      console.log(error);
    });
    
    
    }
  

//on ecrit les données 

// import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";



console.log()

export{liste}



export{ancienneNote,timing}



    export{InsertData}

// ic la fin 


export{active}

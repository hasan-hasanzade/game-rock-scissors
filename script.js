const siyahi = ["paper.png","scissors.png","rock.png"]
console.log(typeof siyahi)
//siyahi[]

const kagiz = document.getElementById('kagiz')
const qayci = document.querySelector('#qayci')
const das = document.getElementById('das')

const komputerSecim = document.getElementById('komputer-secim')
const neticeYazilanDiv = document.getElementById('netice')

kagiz.onclick = seciminiEt
qayci.onclick = seciminiEt
das.onclick = seciminiEt

// HOSTING vs HOISTING

function seciminiEt() {
   const komputerinQerari = randomSeciminiEt()
   const menimQerarim = this.dataset.id
   // THIS arashdirma movzusu w3schools

   // setTimeout((), 3000)

   let netice = ''
// 
   if(komputerinQerari === menimQerarim) {
      netice = "Yeniden cehd edin!"
   }

   else if(komputerinQerari ==0 && menimQerarim ==1) {
      netice = "You win!"
   }

   
   else if(komputerinQerari ==0 && menimQerarim ==2) {
      netice = "You lose!"
   }

   else if(komputerinQerari ==1 && menimQerarim ==0) {
      netice = "Laptop win!"
   }

   else if(komputerinQerari ==1 && menimQerarim ==2) {
      netice = "You win!"
   }

   else if(komputerinQerari ==2 && menimQerarim ==0) {
      netice = "You win! Paper wrapped stone"
   }

   else {
      netice = "Please, try again :("
   }

   neticeYazilanDiv.innerText = netice

}

// PARAMETRSIZ FUNKSIYALAR ()

function randomSeciminiEt() {
   const say = Math.round(Math.random()*2)
   //INTERPOLATION (stringlerin interpolasiyasi)
   komputerSecim.src = `./image/${siyahi[say]}` // ${} ``(backktick) e aiddir
   // komputerSecim.src = "/image" + siyahi[say]
   return say
}

window.onload = function() {
      const loadPercent = document.getElementById('load__percent')
      const preloader = document.getElementById('page-preloader')
      if (!preloader.classList.contains('done'))
      {
         let i = 0
            count = setInterval(()=> {
               i = i+25
               loadPercent.innerText = i + '%'

               if(i == 100) {
                   preloader.classList.add('done');
               }
         },1000)
         // loadPercent.innerText = '100%'
         
      }
   
}




// const loaderActive = document.getElementById('loaderActive');
// const loaderText = document.getElementById('loaderText');

// let i = 0;
// counter = setInterval(function () {
// 	i=i+25;
// 	let widthElem = 'width: ' + i + '%;'
// 	loaderActive.setAttribute('style', widthElem);
// 	loaderText.innerText = i + '%';
// 	if (i === 100) {
// 		clearInterval(counter);
// 	}
// }, 100);

//counting

const hearts = document.getElementsByClassName('heart-click');
const heartCount = document.getElementById('heart-count');
 let heartCounts =0;

for(let i=0; i<hearts.length; i++){
    hearts[i].addEventListener('click', function(){
        heartCounts++;
        heartCount.innerText=heartCounts;
    })
}


// call section

const coin = document.getElementById('coin-count');
let coins = parseInt(coin.innerText);

const callButtons = document.getElementsByClassName('call-btn');


const historyBox = document.getElementById('history-sec');
const clearBtn = document.getElementById('clear-btn');

for(const btn of callButtons){
    btn.addEventListener('click', function(){
          const serviceName = this.getAttribute('data-service');
        const serviceNumber = this.getAttribute('data-number');
        if(coins >= 20){
            coins = coins - 20;
            coin.innerText = coins;

historyBox.innerHTML += `
        <div class="shadow-lg rounded-lg p-7 flex justify-between items-center font-semibold" >
            <p>${serviceName} <br> ${serviceNumber}</p>
             
             <div>${new Date().toLocaleTimeString()}</div>
        </div>`;

            alert(`Calling ${serviceName}.${serviceNumber}`);
        }else{
            alert('You are out of credit')
        }

        
    })
}

//clear history











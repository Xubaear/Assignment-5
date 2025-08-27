//counting

const hearts = document.getElementsByClassName('heart-click');
const heartCount = document.getElementById('heart-count');
 let heartCounts =0;

for(let i=0; i<hearts.length; i++){
    hearts[i].addEventListener('click', function(){
        heartCounts++;
        heartCount.textContent=heartCounts;
    })
}






function play(){
        const homeSection=document.getElementById('home-screen');
        homeSection.classList.add('hidden') ;  
        
        const playGround=document.getElementById('play-ground');
        playGround.classList.remove('hidden');
        continueGame();
}

function continueGame(){
        const alphabet =getARandomAlphabet();
        console.log('Your random alphabet is',alphabet);

        const currentAlphabet =document.getElementById('current-alphabet');
        currentAlphabet.innerText = alphabet ;
}


function getARandomAlphabet(){
        const alphabetString='abcdefghijklmnopqrstuvwxyz';
        const alphabets =alphabetString.split('');
        

        const randomNumber=Math.random()*25 ;
        const index =Math.round(randomNumber);
        console.log(index);

        const alphabet=alphabets[index];
        return alphabet;

         
}
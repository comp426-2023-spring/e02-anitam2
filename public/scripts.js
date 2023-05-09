function showHideShots() {
    let opponent = document.getElementById('opponent');
    let rps = document.getElementById('rps');
    
    if (opponent.checked == true){
        console.log("opponent.checked == true && radio_rpsls.checked == true");
        $('.shots').show();
        
        if (rps.checked == true){
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }

}

function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame() {
    console.log('play game is being called');

    let opponent = document.getElementById('opponent');

    let game = $('input[type=radio][name=game]:checked').val();
    console.log('game', game);

    let shot = ''
    if (opponent.checked == true){
        shot = $('input[type=radio][name=shot]:checked').val();
        console.log('shot', shot);
    }

    let baseurl = window.location.href + 'app/'
    console.log(baseurl);
    let url = baseurl + game + '/play/' + shot
    console.log('url:', url);
    let response = await fetch(url);
    console.log('response:', response);
    let result = await response.json();
    console.log('result:', result);

    const myDiv = document.getElementById("answer");
    myDiv.innerHTML = "Player: "+result.player+" Opponent: "+result.opponent+"\n\nResult: "+result.result;
}
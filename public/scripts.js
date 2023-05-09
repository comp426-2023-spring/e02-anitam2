// // If you would like to see some examples of similar code to make an interface interact with an API, 
// // check out the coin-server example from a previous COMP 426 semester.
// // https://github.com/jdmar3/coinserver

// document.addEventListener('DOMContentLoaded', main);
// function main(){
//     document.getElementById('gameForm').addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting and causing a page reload
      
//         const rpsRadio = document.getElementById('rpsRadio');
//         const rplsRadio = document.getElementById('rplsRadio');
        
//         function getSelectedShootValue() {
//         const shootRadioButtons = document.getElementsByName('shoot');
//         let selectedValue;
    
//         for (let i = 0; i < shootRadioButtons.length; i++) {
//             if (shootRadioButtons[i].checked) {
//                 selectedValue = shootRadioButtons[i].value;
//                 break;
//             }
//         }
    
//         return selectedValue;
//         }
    
//         if (rpsRadio.checked) {
//             console.log("rps was selected")
//             fetch('/app/rps/play?shot=' + getSelectedShootValue(), {
//                 method: 'GET',
//             })
//             .then(res => res.json()) // Parse the response as JSON and return a new Promise
//             .then(data => {
//                 console.log(data);
//                 const result = data["result"];
//                 const resultDiv = document.getElementById("result");
//                 resultDiv.innerText = result;
//                 resultDiv.style.display = "inline";
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//         } 

//         else if (rplsRadio.checked) {
//             console.log("rpls was selected")
//             window.location.href = '/app/rpsls';
//         } 

//         else {
//             alert('Please select a game mode.');
//         }

//       });
    
//       document.getElementById("rpsRadio").addEventListener('click', (event) => {
//         console.log("onclick works")
//         const views = ["rockView","scissorView","paperView"];
//         views.forEach(view => {
//             document.getElementById(view).style.display ="inline";
//         })
//         const removeViews = ["lizardView","spockView"]
//         removeViews.forEach(view => {
//             document.getElementById(view).style.display ="none";
//         })
//       });
    
//       document.getElementById("rplsRadio").addEventListener('click', (event) => {
//         console.log("onclick works")
//         const views = ["rockView","scissorView","paperView","lizardView","spockView"];
//         views.forEach(view => {
//             document.getElementById(view).style.display ="inline";
//         })
//       })
    
//       document.getElementById('refreshButton').addEventListener('click', () => {
//         window.location.reload();
//     });
    
    
// }

// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


function showHideShots() {
    let opponent = document.getElementById('opponent');
    let rps = document.getElementById('rps');
    //let radio_rpsls = document.getElementsByClassName('rpsls');

    
    if (opponent.checked == true){
        console.log("opponent.checked == true && radio_rpsls.checked == true");
        $('.shots').show();
        
        if (rps.checked == true){
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }
    

    //if your not playing against an opponent you hide all of the shots check boxes
    /*
    if (radio_rpsls.checked == true && radio_rps.checked == false){
        $('.rpsls').show()
    } else {
        $('.rpsls').hide() 
    }
    */


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


    //let shots = document.getElementsByClassName('shots');
    //console.log("shots", shots);

    let shot = ''
    if (opponent.checked == true){
        shot = $('input[type=radio][name=shot]:checked').val();
        console.log('shot', shot);
    }

    /*
    let selectedShot = '';
    for (let i = 0; i < shots.length; i++) {
        if (shots[i].checked) {
          selectedShot = shots[i].value;
          break;
        }
      }
    

    console.log('selectedshots', selectedShot);
    */
    //let shot = '';
    //if (shots.checked == true){
    //    console.log("shots.value", shots.value);
    //}
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
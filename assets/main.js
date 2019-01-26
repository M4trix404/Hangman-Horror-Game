//MAIN PROCESS
//Initiates  Code
startGame();

document.onkeyup = function(event)
{
    test = true;
    var letterGuessed = event.key;
    for(var i = 0; i < keyboard.length; i++)
    {   
        if(letterGuessed === keyboard[i] && test === true)
        {
            var splicedWord = keyboard.splice(i,1);
            //Test / Debug
            console.log('Double word is = ' + keyboard[i])
            console.log('Spliced Word is = ' + splicedWord);

            compareLetters(letterGuessed);
            winLose();
        }
    }       
        
}
let tallyTotal = 0; 

const options = [
    {id:"java", text:"Java", votes:0},
    {id:"js", text:"JavaScript", votes:0},
    {id:"python", text:"Python", votes:0},
    {id:"csharp", text:"C#", votes:0},

]
function submitVote(){
    const selectedOption = document.querySelector('input[name="poll"]:checked')
    const selectedOptionObj = options.find((x)=> x.id === selectedOption.value)
    if(selectedOptionObj){
        selectedOptionObj.votes++
        alert("You have succesfully voted for " + selectedOptionObj.text)
        displayTally()
        displayBarPercent()
    }
}

function displayTally(){
    const tally =document.getElementsByClassName('tally')

    for(let i = 0; i < 4; i++){
       if(options[i].id === tally[i].id){
            tally[i].textContent = options[i].votes
       }
    }
    
}

function getTotalVotes(){
    return options.reduce((total, option)=> total +option.votes, 0)
}

function displayBarPercent(){
    const bars =document.getElementsByClassName('barBG')
    const percent = document.getElementsByClassName('percent')
    for(let i = 0; i < 4; i++){
        if(options[i].id === bars[i].id){
            const percentage = ((options[i].votes/ getTotalVotes() * 100)).toFixed(0) + "%"
            bars[i].style.width = percentage
        }

        if(options[i].id === percent[i].id){
            const percentage = ((options[i].votes/ getTotalVotes() * 100)).toFixed(0) + "%"
            percent[i].textContent = percentage
        }
     }

   

}
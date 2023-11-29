let tallyTotal = 0; 
let java, python, js, csharp

const options = [
    {id:"java", text:"Java", votes:0},
    {id:"js", text:"JavaScript", votes:0},
    {id:"python", text:"Python", votes:0},
    {id:"csharp", text:"C#", votes:0},

]
function submitVote(){
    const selectedOption = document.querySelector('input[name="poll"]:checked')
    tallyTotal+=1
    if(selectedOption.value === options[0].id){
        options[0].votes+=1 
    }else if(selectedOption.value === options[1].id){
        options[1].votes+=1
    }else if(selectedOption.value === options[2].id){
        options[2].votes+=1
    }else if(selectedOption.value === options[3].id){
        options[3].votes+=1
    }
    
    const javaTally = document.getElementById('javaTally');
    const pyTally = document.getElementById('pyTally');
    const jsTally = document.getElementById('jsTally');
    const cTally = document.getElementById('cTally');

    javaTally.textContent =  toPercent(options[0].votes/tallyTotal)
    jsTally.textContent =  toPercent(options[1].votes/tallyTotal)
    pyTally.textContent =  toPercent(options[2].votes/tallyTotal)
    cTally.textContent =  toPercent(options[3].votes/tallyTotal)



}

function toPercent(vote){
    let votePercent = (vote * 100).toFixed(2); 
    return votePercent +"%"
}


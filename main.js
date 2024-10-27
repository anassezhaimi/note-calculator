document.getElementById('button').addEventListener('click',function(){
    const Math = document.getElementById('math').value;
    const Physics = document.getElementById('physic').value;
    const English = document.getElementById('english').value;
    const Philosophie = document.getElementById('philosophie').value;
    const Science = document.getElementById('science').value;
    const showResult = document.getElementById('result')
    function calculate(math,physic,english,science,philosophie){
        let mathNote = math*7;
        let physicNote = physic * 7;
        let englishNote = english*2;
        let philosophieNote = philosophie*2;
        let scienceNote= science*5;
        let output = (mathNote + physicNote + englishNote + scienceNote + philosophieNote) / 23;
        return output;
    }
    const result = calculate(Math,Physics,English,Science,Philosophie);
    if(!isNaN(result)){
        const yourNote = document.createElement('p');
        yourNote.textContent = result;
        showResult.appendChild(yourNote);
    }else{
        alert("S'il vous plaît, utilisez des numéros, pas des mots.")
    }
    document.getElementById('math').value = '';
    document.getElementById('physic').value = '';
    document.getElementById('english').value = '';
    document.getElementById('science').value = '';
    document.getElementById('philosophie').value = '';
})




document.getElementById('testParagraph').style.color = 'blue';

document.getElementById('clickThisButton').addEventListener('click', (details) => {
    //document.querySelectorAll('p.sampleClass')[0].innerHTML = '<i>My text has changed</i>';
    if (details.target.style.backgroundColor == 'blue') {
        details.target.style.backgroundColor = 'red'
    } else {
        details.target.style.backgroundColor = 'blue'
    }
})

document.getElementById('nameInput').addEventListener('keyup', (e) => {

    console.log(target.e.value);
})
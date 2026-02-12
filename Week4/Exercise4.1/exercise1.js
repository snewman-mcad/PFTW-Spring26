//select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
//put an h1 inside of the div
//create new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas eat grass so let\'s make the background green';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
//putting the h1 element inside of the div
myEmptyDiv.appendChild(heading);
//when the heading is clicked, the background will change to lawn green
function handleHeadingClick () {
    document.body.style.backgroundColor = 'lawngreen';
}
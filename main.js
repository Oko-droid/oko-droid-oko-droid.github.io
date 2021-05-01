const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill Listener

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// loop through empty
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragdrop', dragDrop);
}


// drag function

function dragStart() {
    this.className += 'hold';
    setTimeout(() => (this.className = 'invisible'), 0);    
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver() {
    Console.log(over)
}
function dragEnter() {
    Console.log(over);
}
function dragLeave() {
    Console.log('leave');
}
function dragDrop() {
    Console.log('drop');
}
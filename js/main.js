function showSection(id){
    document.querySelectorAll('.box').forEach(s=>{
        s.classList.remove('active');
        s.classList.add('section');
    });
    document.getElementById(id).classList.add('active');
}   


// Make all photo containers draggable

let topZ = 1;

document.querySelectorAll('.cont').forEach(box => {
    dragElement(box);
    bringToFront(box);
});

function dragElement(elmnt){
    let pos1=0,pos2=0,pos3=0,pos4=0;

    elmnt.onmousedown = startDrag;
    elmnt.ontouchstart = startDragTouch; // 📱 touch start

    function startDrag(e){
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = stopDrag;
        document.onmousemove = drag;
    }

    function startDragTouch(e){
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.ontouchend = stopDrag;
        document.ontouchmove = dragTouch;
    }

    function drag(e){
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        moveElement();
    }

    function dragTouch(e){
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        moveElement();
    }

    function moveElement(){
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function stopDrag(){
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

function bringToFront(elmnt){
    elmnt.onclick = function(){
        topZ++; // increase layer
        elmnt.style.zIndex = topZ;
    };
}
/* YOUR CODE HERE! */

function dragStartHandler(event) {
    if (event.button !== 0) {
        return;
    }

    event.target.oldX = event.clientX;
    event.target.oldY = event.clientY;

    event.target.oldLeft = window.getComputedStyle(event.target).getPropertyValue('left')
        .split('px')[0] * 1;
    event.target.oldTop = window.getComputedStyle(event.target).getPropertyValue('top')
        .split('px')[0] * 1;

    event.target.moving = true;
}

function dragHandler(event) {
    event.preventDefault();

    if (!event.target.moving) {
        return;
    }

    event.target.distX = event.clientX - event.target.oldX;
    event.target.distY = event.clientY - event.target.oldY;

    event.target.style.left = event.target.oldLeft + event.target.distX + "px";
    event.target.style.top = event.target.oldTop + event.target.distY + "px";
}

function dragEndHandler(event) {
    event.target.moving = false;
}

elements = document.getElementsByClassName("box");
for (const element of elements) {
    element.addEventListener('mousedown', dragStartHandler);
    element.addEventListener('mousemove', dragHandler);
    element.addEventListener('mouseup', dragEndHandler);
}

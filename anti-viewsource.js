document.onkeydown = function(e) {
    if(e.ctrlKey && e.shiftKey && e.code == 'KeyI'){
        debugger;
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.code == 'KeyJ'){
        debugger;
        return false;
    }

    if(e.ctrlKey && e.code == 'KeyU'){
        debugger;
        return false;
    }

    if(e.code == 'F12') {
        debugger;
        return false;
    }

    if(e.ctrlKey && e.code == 'KeyS'){
        debugger;
        return false;
    }

    if(e.code == 'Enter') {
        return false;
    }

    if(e.code == 'NumpadEnter') {
        return false;
    }
}

document.oncontextmenu = () => {
    return false;
}
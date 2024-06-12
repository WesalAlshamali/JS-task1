function changeFont() {
    const font = document.getElementById('font-selector').value;
    document.execCommand('fontName', false, font);
}

function toggleBold() {
    document.execCommand('bold');
}

function toggleUnderline() {
    document.execCommand('underline');
}

function changeFontSize() {
    const size = document.getElementById('font-size-selector').value;
    document.execCommand('fontSize', false, '7');
    const fontElements = document.getElementsByTagName('font');
    for (let i = 0; i < fontElements.length; i++) {
        if (fontElements[i].size == '7') {
            fontElements[i].removeAttribute('size');
            fontElements[i].style.fontSize = size;
        }
    }
}

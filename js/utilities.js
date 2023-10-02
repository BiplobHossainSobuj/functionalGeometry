function getInputValueId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    inputField.value = '';
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
function getAreaOfTriangle(base,height) {
    return 0.5*base*height;
}
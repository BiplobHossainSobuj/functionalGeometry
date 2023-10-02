function getInputValueId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    inputField.value = '';
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
function setElement(elementId,elementValue) {
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}
function getAreaOfTriangle(base,height) {
    return 0.5*base*height;
}
function getAreaOfRectangle(base,height) {
    return base*height;
}
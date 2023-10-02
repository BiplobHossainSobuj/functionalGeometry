document.getElementById('btn-triangle-calculate').addEventListener('click',function(){
    // const triangleBaseField = document.getElementById('triangle-base-field');
    // const triangleBaseValueString = triangleBaseField.value;
    // console.log(triangleBaseValueString);
    const base = getInputValueId('triangle-base-field');
    const height = getInputValueId('triangle-height-field');
    const result = getAreaOfTriangle(base,height);
    const area = setElement('triangle-area',result);
    console.log(result);
})
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const width = getInputValueId('rectangle-width-field');
    const length = getInputValueId('rectangle-length-field');
    const result = getAreaOfRectangle(width,length);
    const area = setElement('rectangle-area',result);
    console.log(result);
})
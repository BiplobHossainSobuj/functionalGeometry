document.getElementById('btn-triangle-calculate').addEventListener('click',function(){
    // const triangleBaseField = document.getElementById('triangle-base-field');
    // const triangleBaseValueString = triangleBaseField.value;
    // console.log(triangleBaseValueString);
    const base = getInputValueId('triangle-base-field');
    const height = getInputValueId('triangle-height-field');
    const result = getAreaOfTriangle(base,height);
    console.log(result);
})
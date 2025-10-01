let form=document.querySelector('.form');
// console.log(form);
form.addEventListener('submit',function (e) {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height input').value);
    let weight = parseInt(document.querySelector('#weight input').value);
    // console.log(height);
    // console.log(weight);
    let result=document.querySelector('.result');
    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `please give a valid ${height}`;
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML=`enter a valid weight ${weight}`
    }else{
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        // injecting the bmi 
        result.innerHTML=`<span>${bmi}</span>`;
    }
});
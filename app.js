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
         if(bmi<18.7){
            result.innerHTML= `<span>${bmi} "UnderWeight"</span>`;
        }
        if(bmi>18.6 && bmi<25){
            result.innerHTML= `<span>${bmi} "Normal"</span>`;
        }else if(bmi>25){
            result.innerHTML= `<span>${bmi} "Overwait"</span>`;
        }
       // result.innerHTML=`<span>${bmi}</span>`;
        
    }
});
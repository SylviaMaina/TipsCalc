const bill = document.getElementById("inp-bill");
const tipBtn = document.querySelectorAll('.tip');
const tipCustom = document.getElementById('inp-tip')
const people = document.getElementById('pple-el')
const result = document.querySelectorAll('.value')
const resetBtn = document.querySelector('.reset');

tipBtn.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

tipCustom.addEventListener('click', setTipCustomValue)
bill.addEventListener('input',setBillValue)
people.addEventListener('input',setPeopleValue)
resetBtn.addEventListener('click',resetValue)

let billValue = 0.0//default value
let tipValue = 0.15//default value
let peopleValue =1


function validateInt(s){
    var rgx = /^[0-9]*/ 
    return s.match(rgx)
}

function setBillValue(){
    if(bill.value.includes(',')){
        bill.value = bill.value.replace(',','.')
    }
    billValue = parseFloat(bill.value)
    calculateTip()
}

function handleClick(){
    tipBtn.forEach(btn =>{
        //remove active state
        btn.classList.remove('btn-active');

        //set active state
        if(event.target.innerHTML==btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
        }

    })
}

tipCustom.value=""
calculateTip()

function setTipCustomValue(){
  if(!validateInt(tipCustom.value)){
  tipCustom.value = tipCustom.value.substring(0 ,tipCustom.value.length-1);
  }
  tipValue = parseFloat(tipCustom.value/100);

  tipBtn.forEach(btn => {
      btn.classList.remove('btn-active')
  })

  if(tipCustom.value !== ''){
      calculateTip()
  }
  
 // console.log(tipValue)
}

function setPeopleValue(){
    if(!validateInt(people.value)){
        people.value = people.value.substring(0 ,people.value.length-1);
        }
        peopleValue = parseFloat(people.value);
calculateTip()
    }   


function calculateTip(){
    if (peopleValue >=1 ){
        let tipAmount = billValue * tipValue / peopleValue
        let total = billValue * (tipValue + 1) / peopleValue
        result[0].innerHTML = '$'  + tipAmount.toFixed(2);
        result[1].innerHTML = '$' + total.toFixed(2);
    }
}

function resetValue(){
    bill.value= '0.0'
    setBillValue()

    tipBtn[2].click()

    people.value = '1'
    setPeopleValue()
}
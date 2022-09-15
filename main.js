 let button = document.getElementById('btn');

 button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if(height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <=0)) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6) {
            result.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('The form has errors');
        result.innerHTML = ' ';
    }
 });






 
// // love calculator
//  prompt("What is your name?");
//  prompt("What is your crush name?");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;

//  if (loveScore > 89) {
//     alert("Your result is " + loveScore + "%." + " God bless your relationship." );
//  } else if (loveScore > 59) {
//     alert("Your result is " + loveScore + "%." + " You guys are cute together, just try to be committed." );
//  } else if (loveScore > 49) {
//     alert("Your result is " + loveScore + "%." + " You will need lot of committments for your relationship to work." );
//  } else if (loveScore > 25) { 
//     alert("Your result is " + loveScore + "%." + " Please think about it very well." );
//  } else {
//      alert("Your result is " + loveScore + "%." + " I will advise you don't try it." );
//  }



// // alert("Your result is " + loveScore + "%" + " God bless your relationship" );




// console.log(loveScore);
  



// var guestList = ["Ope", "Pelumi", "Olamide", "Sijuade", "Demilade", "Sandra"];

// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("You are welcome");
// } else {
//     alert("try some other time");
// }

 
  

     
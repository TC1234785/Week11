// function greet(name) {
//     console.log('Hello',name)
// }

// greet('Tobias')

// let input = prompt("what is your name?")
// greet(input)

// //Anonymous function
// const greet = function (name)
// {
//         console.log(`Hello ${name}`);
// }

// let greet = (name) =>
//     console.log(`Hello ${name}`)

// function greet(name,time ="day")
// {
//     console.log (`Good ${time} ${name}`)
// }

// greet('Tobias')
// //Good day Tobias
// greet('Neda', 'evening', 'sandwich')
// //Good evening Neda (Will ignore sandwich as it was not expecting another)

// function calculateCircleArea(radius){
//         if (isNaN(radius))
//         {
//             alert("This is not a number")
//         } else {
//             const area = Math.PI * radius**2;
//         return area
//         }
    
// }

// let userValue = prompt("Enter a number");
// //prompt is always a string, so you can't check here, but you can check within the function
// let result = calculateCircleArea(userValue);
// //This is one way to round the result
// //alert(`The area of a circle with radius ${userValue} is ${Math.round(result,2)}.`)
// //This is also another way to round the result
// alert(`The area of a circle with radius ${userValue} is ${result.toFixed(2)}.`)


// //Slide 14
// const radiusPara = document.querySelector('#radius');
// console.log(radiusPara)
// const resultPara = document.querySelector('#result');
// console.log(resultPara)


// function calculateCircleArea(radius){
//     if (isNaN(radius))
//     {
//         //replace this alert by updating the text
//         radiusPara.textContent = 'This is not a number'
//         return;
//     }
//     else {
//         const area = Math.PI * radius**2;
//     return area
//     }
// }

// let userValue = prompt("Enter a number");
// //update the text of the radiuspara
// radiusPara.textContent += userValue;
// //prompt is always a string, so you can't check here, but you can check within the function
// let result = calculateCircleArea(userValue);

// if (result !== undefined){
//     //replace alert with updating text of resultPara
//     resultPara.textContent = `The area of a circle with radius ${userValue} is ${result.toFixed(2)}.`
// } else{
//     resultPara.textContent = 'Error'
// }

//Slide 15
function populateList(shoppingList) {
//1. Select and store a reference to the ul -> querySelector
    const ulList = document.querySelector('.shopping')
//2. Loop through the shoppingList => for loop
    //for(let i=0 ; i<shoppingList.lenght ; i++)
    for (let item of shoppingList) {
        //console.log(item)
//      3. create an li -> .createElement('li')
        const newLi = document.createElement('li')
//      4. append the li to the ul -> parent.appendChild(child)
        ulList.appendChild(newLi)
//      5. update the textContent of the li with array item
        newLi.textContent = item
    }
}

let myList = ['bread', 'cheese', 'green pepper']
populateList(myList);

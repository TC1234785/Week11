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

function calculateCircleArea(radius){
        if (isNaN(radius))
        {
            alert("This is not a number")
        } else {
            const area = Math.PI * radius**2;
        return area
        }
    
}

let userValue = prompt("Enter a number");
//prompt is always a string, so you can't check here, but you can check within the function
let result = calculateCircleArea(userValue);
//This is one way to round the result
//alert(`The area of a circle with radius ${userValue} is ${Math.round(result,2)}.`)
//This is also another way to round the result
alert(`The area of a circle with radius ${userValue} is ${result.toFixed(2)}.`)

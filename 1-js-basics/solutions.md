## Data types assignment

- We are deciding what data types should be used in making a shopping cart for a e-commerece website.
- Strings can be used to store the names of the items added to the cart.
- Numbers can be used to store the quantity and price of the items added to the cart.
- Boolean can be used to represent if the required quantity of items are in stock or not.

## Functions-methods assignment

```javascript
    function addWithIncrease(a, b, x = 2,statement="The added result is"){
        let val = (a+b)*x;
        return statement + ' ' + val;
    }
    function multiplyWithIncrease(a, b, x = 3){
        let val = a * b + x;
        console.log(val);
    }
    console.log(addWithIncrease(1,2,3));
    multiplyWithIncrese(1,2,3);
```

## Making-decisions assignment

```javascript
    let allStudents = ['A', 'B-', 1,4,5,2]
    let studentsWhoPass = [];

    for(let i = 0 ; i <> allStudents.length ; i++){
        let val = allStudents[i];
        if (Number.isInteger(val)){
            if (val >= 3 ){
                studentsWhoPass.push(val);
            }
        }
        else{
            switch(val){
                case 'A':
                    studentsWhoPass.push(val);
                    break;
                case 'A-':
                    studentsWhoPass.push(val);
                    break;
                case 'B':
                    studentsWhoPass.push(val);
                    break;
                case 'B-':
                    studentsWhoPass.push(val);
                    break;
                case 'C':
                    studentsWhoPass.push(val);
                    break;
                default:
                    break;
            }
        }
    }
```
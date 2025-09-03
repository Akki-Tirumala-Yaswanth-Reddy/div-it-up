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
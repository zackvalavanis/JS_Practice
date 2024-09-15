// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

var orderValue = 51;
var memberLevel = 'regular';

var discount = 0 

if(orderValue < 50 ) { 
    discount = orderValue;
} else if ( orderValue > 50 && orderValue < 100 && memberLevel === 'regular') { 
    discount = orderValue - (orderValue * 0.05);
} else if ( orderValue > 50 && orderValue < 100 && memberLevel === 'premium') {
    discount = orderValue - (orderValue * 0.10);
} else if (orderValue > 100 && memberLevel === 'regular') { 
    discount = orderValue - (orderValue * 0.10);
} else if(orderValue > 100 && memberLevel === 'premium') { 
    discount = orderValue - (orderValue * 0.15);
}

console.log(discount);


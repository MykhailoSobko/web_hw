/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) { return new Promise(resolve => setTimeout(resolve, ms)) }

class Dish {
    constructor(cookingTime) {
        this.cookingTime = cookingTime;
    }

    async cook() {
        const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
        await wait(actualCookingTime);
        return this;
    }
}
/* DONT CHANGE THIS CODE - END */

/*
    YOUR CODE HERE
*/
class Kitchen {
    constructor() {
        this.fridge = new Map();
        this.orders = [];
    }

    addToFridge(ingredients) {
        for (const ingredient of ingredients) {
            if (this.fridge.has(ingredient.name)) {
                this.fridge[ingredient.name] += ingredient.quantity;
            } else {
                this.fridge[ingredient.name] = 0;
            }
        }
    }

    order(dish) {
        this.orders.push(dish);
        for (const [name, quantity] of dish.ingredients.entries()) {
            if (this.fridge[name] -= quantity < 0) {
                throw 'Not enough ingredients in fridge'
            }
        }
    }

    cookFastestOrder() {
        if (this.orders.length === 0) {
            console.log('Order list is empty')
            return;
        }
        let fastestOrder = this.orders[0];
        for (let i = 1; i < this.orders.length; i++) {
            if (this.orders[i].cookingTime < fastestOrder) {
                fastestOrder = this.orders[i];
            }
        }
        for (const [name, quantity] of fastestOrder.ingredients.entries()) {
            this.fridge[name] -= quantity;
        }
        console.log('Cooked fastest order: %s', fastestOrder.constructor.name)
        return fastestOrder;
    }

    async cookAllOrders() {
        for (const order of this.orders) {
            for (const [name, quantity] of order.ingredients.entries()) {
                this.fridge[name] -= quantity;
            }
        }
        console.log('Cooked all orders: %s',
            this.orders.map(order => order.constructor.name).join(', '));
        let orders = this.orders;
        this.orders = [];
        return orders;
    }
}

class Ingridient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

class Bolognese extends Dish {
    constructor() {
        super(10);
        this.ingredients = new Map([['spaghetti', 1], ['spaghetti', 1], ['meat', 1]]);
    }
}

class MashedPotatoes extends Dish {
    constructor() {
        super(8);
        this.ingredients = new Map([['potato', 1]]);
    }
}

class Steak extends Dish {
    constructor() {
        super(7);
        this.ingredients = new Map([['meat', 1]]);
    }
}

class SteakAndFries extends Dish {
    constructor() {
        super(10);
        this.ingredients = new Map([['potato', 1], ['meat', 1]]);
    }
}

async function test() {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
        new Ingridient('potato', 1),
        new Ingridient('spaghetti', 1),
        new Ingridient('meat', 3),
        new Ingridient('tomato', 2)
    ])

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and ingridients

    await kitchen.cookFastestOrder(); // Returns fastest dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough ingridients in fridge
}

test();

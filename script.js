let orderStages = {
    Margherita: 0,
    Pepperoni: 0,
    Veggie: 0
};

function handleOrder(pizzaType) {
    const button = document.getElementById(`orderButton${pizzaType}`);
    const icon = document.getElementById(`icon${pizzaType}`);
    const text = document.getElementById(`text${pizzaType}`);
    const orderNote = document.getElementById(`orderNote${pizzaType}`);

    // Change the button's state based on the current stage
    switch (orderStages[pizzaType]) {
        case 0:
            // Stage 1: Processing
            button.classList.add('processing');
            icon.textContent = '⏳';
            text.textContent = 'Preparing your pizza...';
            orderNote.textContent = "Our chef is hard at work!";
            orderStages[pizzaType]++;
            setTimeout(() => handleOrder(pizzaType), 2000); // Move to the next stage after 2 seconds
            break;
        
        case 1:
            // Stage 2: Delivering
            button.classList.remove('processing');
            button.classList.add('delivering');
            icon.textContent = '🚗';
            text.innerHTML = 'On the way<span class="demo__text--dots">...</span>';
            orderNote.textContent = "Your pizza is being delivered!";
            orderStages[pizzaType]++;
            setTimeout(() => handleOrder(pizzaType), 3000); // Move to the next stage after 3 seconds
            break;
        
        case 2:
            // Stage 3: Enjoy your meal
            icon.textContent = '🍽️';
            text.textContent = "Enjoy your pizza!";
            orderNote.textContent = "Thanks for ordering with Pizza Palace!";
            orderStages[pizzaType]++;
            break;
        
        default:
            // Reset to the initial stage
            button.classList.remove('delivering');
            icon.textContent = '🍕';
            text.textContent = 'Order Now';
            orderNote.textContent = "Your delicious pizza is just a click away!";
            orderStages[pizzaType] = 0;
            break;
    }
}


let orderStage = 0;

function handleOrder() {
    const button = document.getElementById('orderButton');
    const icon = document.getElementById('icon');
    const text = document.getElementById('text');
    const orderNote = document.getElementById('orderNote');

    // Change the button's state based on the current stage
    switch (orderStage) {
        case 0:
            // Stage 1: Processing
            button.classList.add('processing');
            icon.textContent = '⏳';
            text.textContent = 'Preparing your pizza...';
            orderNote.textContent = "Our chef is hard at work!";
            orderStage++;
            setTimeout(handleOrder, 2000); // Move to the next stage after 2 seconds
            break;
        
        case 1:
            // Stage 2: Delivering
            button.classList.remove('processing');
            button.classList.add('delivering');
            icon.textContent = '🚗';
            text.innerHTML = 'On the way<span class="demo__text--dots">...</span>';
            orderNote.textContent = "Your pizza is being delivered!";
            orderStage++;
            setTimeout(handleOrder, 3000); // Move to the next stage after 3 seconds
            break;
        
        case 2:
            // Stage 3: Enjoy your meal
            icon.textContent = '🍽️';
            text.textContent = "Enjoy your pizza!";
            orderNote.textContent = "Thanks for ordering with Pizza Palace!";
            orderStage++;
            break;
        
        default:
            // Reset to the initial stage
            button.classList.remove('delivering');
            icon.textContent = '🍕';
            text.textContent = 'Order Pizza';
            orderNote.textContent = "Your delicious pizza is just a click away!";
            orderStage = 0;
            break;
    }
}

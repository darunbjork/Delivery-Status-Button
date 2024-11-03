let orderStage = 0;

function handleOrder() {
    const button = document.getElementById('orderButton');
    const icon = document.getElementById('icon');
    const text = document.getElementById('text');

    // Change the button's state based on the current stage
    switch (orderStage) {
        case 0:
            // Stage 1: Processing
            button.classList.add('processing');
            icon.textContent = '⌛';
            text.textContent = 'Processing...';
            orderStage++;
            setTimeout(handleOrder, 2000); // Move to the next stage after 2 seconds
            break;
        
        case 1:
            // Stage 2: Delivering
            button.classList.remove('processing');
            button.classList.add('delivering');
            icon.textContent = '🚁';
            text.innerHTML = 'Delivering<span class="demo__text--dots">...</span>';
            orderStage++;
            setTimeout(handleOrder, 3000); // Move to the next stage after 3 seconds
            break;
        
        case 2:
            // Stage 3: It's on the way
            icon.textContent = '📦';
            text.textContent = "It's on the way!";
            orderStage++;
            break;
        
        default:
            // Reset to the initial stage
            button.classList.remove('delivering');
            icon.textContent = '🛒';
            text.textContent = 'Place Order';
            orderStage = 0;
            break;
    }
}

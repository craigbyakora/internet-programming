document.getElementById('calculate-total').addEventListener('click', () => {
    const rows = document.querySelectorAll('#items-table tr');
    let total = 0;
    rows.forEach(row => {
        const checkbox = row.querySelector('.item-checkbox');
        if (checkbox.checked) {
            const property = row.querySelector('input[type="radio"]:checked');
            const units = row.querySelector('.item-units').value;
            if (property) {
                const cost = parseInt(property.value) * parseInt(units);
                row.querySelector('.item-cost').textContent = `$${cost}`;
                total += cost;
            }
        }
    });

    if (total < 200) total += total * 0.15;
    else total -= total * 0.15;

    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `Total: $${total.toFixed(2)}`;
    if (confirm(`Total cost is $${total.toFixed(2)}. Do you want to proceed?`)) {
        alert('Thank you for your purchase!');
    } else {
        alert('Purchase cancelled.');
    }
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
});

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const paymentStatus = formData.get('status');

    await fetch('/set-payment-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: paymentStatus,
        })
    }).then(response => response.json())
        .then(data => console.log('Server response:', data))
})

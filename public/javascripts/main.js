const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const paymentStatus = formData.get('status');

    const res = await fetch('/set-payment-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: paymentStatus,
        })
    })

    const data = await res.json();

    console.log(data.redirectUrl)
    console.log(data.success)
    if (data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
    };
})

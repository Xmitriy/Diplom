// Animation for form elements
const serviceSelect = document.getElementById('service');
const timeInput = document.getElementById('time');

[serviceSelect, timeInput].forEach(el => {
    el.addEventListener('focus', (e) => {
        e.target.style.boxShadow = '0 0 0 2px #6a82fb44';
        e.target.style.transition = 'box-shadow 0.3s';
    });
    el.addEventListener('blur', (e) => {
        e.target.style.boxShadow = '';
    });
});

// Form submit and QR code generation
const form = document.getElementById('bookingForm');
const qrSection = document.getElementById('qrSection');
const qrCanvas = document.getElementById('qrcode');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const service = serviceSelect.value;
    const time = timeInput.value;
    if (!service || !time) {
        alert('Бүх талбарыг бөглөнө үү!');
        return;
    }
    // QR code data
    const qrData = `Үйлчилгээ: ${service}\nЦаг: ${time}\nОгноо: ${new Date().toLocaleDateString()}`;
    // Generate QR
    const qr = new QRious({
        element: qrCanvas,
        value: qrData,
        size: 200,
        background: '#fff',
        foreground: '#4a4a8a',
        level: 'H'
    });
    // Animate QR section
    qrSection.classList.remove('hidden');
    setTimeout(() => {
        qrSection.classList.add('visible');
    }, 10);
    // Optionally, scroll to QR
    qrSection.scrollIntoView({ behavior: 'smooth' });
});

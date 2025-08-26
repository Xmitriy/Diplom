// Navigation
// Home товч болон лого дээр дарвал home section руу буцаана
function showSection(id){
    ['home','services','myBookings','faq','adminLogin','adminDashboard'].forEach(s=>{
        let el = document.getElementById(s);
        if(el) el.style.display = (s===id)?'block':'none';
    });
}

document.getElementById('homeNav').addEventListener('click', ()=>showSection('home'));
const logoHome = document.getElementById('logoHome');
if(logoHome) logoHome.addEventListener('click', ()=>showSection('home'));

// Login modal control
const userIconBtn = document.getElementById('userIconBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginSubmit = document.getElementById('loginSubmit');

userIconBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
});

loginSubmit.addEventListener('click', () => {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username === 'admin' && password === 'admin123') {
        alert('Админ нэвтэрлээ');
        loginModal.style.display = 'none';
        showSection('adminDashboard');
    } else if (username && password) {
        alert('Хэрэглэгчээр нэвтэрлээ');
        loginModal.style.display = 'none';
        showSection('home');
    } else {
        alert('Нэр болон нууц үгээ оруулна уу');
    }
});

// Book Service
let bookings=[];
document.querySelectorAll('.bookService').forEach(btn=>{
    btn.addEventListener('click', function(){
        let service=this.dataset.service;
        let today=new Date();
        bookings.push({service, date:today.toLocaleDateString()});

        let li=document.createElement('li');
        li.textContent=`${service} захиалсан (${today.toLocaleDateString()})`;
        document.getElementById('bookingList').appendChild(li);

        alert(`${service} захиалга амжилттай`);

        // Admin dashboard update
        document.getElementById('todayBookings').textContent = bookings.length;
        document.getElementById('weekBookings').textContent = bookings.length;
        document.getElementById('monthIncome').textContent = bookings.length * 20000 + '₮';
    });
});

// Banner button navigation
document.addEventListener('DOMContentLoaded', function() {
    // Home page товчлууд
    var servicesNav = document.getElementById('servicesNav');
    if(servicesNav) servicesNav.onclick = function(e) {
        e.preventDefault();
        window.location.href = 'Service.html';
    };
    var seeMoreBtn = document.getElementById('seeMoreBtn');
    if(seeMoreBtn) seeMoreBtn.onclick = function(e) {
        e.preventDefault();
        window.location.href = 'Direction.html';
    };
    // Бүх хуудасны лого дээр дарвал Home руу
    var logoHome = document.getElementById('logoHome');
    if(logoHome) logoHome.onclick = function(e) {
        e.preventDefault();
        window.location.href = 'Home.html';
    };
    var userIconBtn = document.getElementById('userIconBtn');
    if(userIconBtn) userIconBtn.onclick = function(e) {
        e.preventDefault();
        window.location.href = 'Login.html';
    };
});

const addressCard = document.getElementById('addressCard');
const closeAddressCard = document.getElementById('closeAddressCard');
if(closeAddressCard) closeAddressCard.addEventListener('click', ()=>{
    if(addressCard) addressCard.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if(e.target === addressCard) addressCard.style.display = 'none';
});

// SPA маягийн хуудсан шилжилт (React шиг)
function goToPage(page) {
    if (page === 'services') {
        fetch('Service.html')
            .then(res => res.text())
            .then(html => {
                document.body.innerHTML = html;
                window.history.pushState({}, '', 'Service.html');
            });
    } else if (page === 'direction') {
        fetch('Direction.html')
            .then(res => res.text())
            .then(html => {
                document.body.innerHTML = html;
                window.history.pushState({}, '', 'Direction.html');
            });
    }
}

// 10 Iconic Luxury Cars Data Structure
const luxuryCars = [
  {
    id: 1,
    name: "Ferrari SF90 Stradale",
    brand: "ferrari",
    price: "$524,000",
    speed: "340 km/h",
    power: "986 HP",
    engine: "V8 Hybrid",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
    desc: "The ultimate flagship hypercar from Maranello blending V8 turbo power with triple electric motors."
  },
  {
    id: 2,
    name: "Lamborghini Aventador SVJ",
    brand: "lamborghini",
    price: "$517,700",
    speed: "352 km/h",
    power: "770 HP",
    engine: "6.5L V12",
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=800&auto=format&fit=crop",
    desc: "A raw, naturally aspirated V12 monster equipped with active aerodynamics for track dominance."
  },
  {
    id: 3,
    name: "Mercedes-AMG GT Black Series",
    brand: "mercedes",
    price: "$325,000",
    speed: "325 km/h",
    power: "720 HP",
    engine: "4.0L V8 Biturbo",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    desc: "The pinnacle of AMG engineering featuring flat-plane crankshaft V8 power and Nürburgring DNA."
  },
  {
    id: 4,
    name: "BMW M4 CSL",
    brand: "bmw",
    price: "$140,000",
    speed: "307 km/h",
    power: "543 HP",
    engine: "3.0L Inline-6",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    desc: "Lightweight track-focused weapon delivering pure rear-wheel drive thrills and carbon fiber precision."
  },
  {
    id: 5,
    name: "Toyota GR Supra A90",
    brand: "supra",
    price: "$58,000",
    speed: "250 km/h",
    power: "382 HP",
    engine: "3.0L Turbo I6",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
    desc: "The legendary tuner icon reborn with perfect 50:50 weight balance and sharp dynamic handling."
  },
  {
    id: 6,
    name: "Bugatti Chiron Super Sport",
    brand: "others",
    price: "$3,800,000",
    speed: "440 km/h",
    power: "1578 HP",
    engine: "8.0L W16 Quad-Turbo",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop",
    desc: "The undisputed king of hypercars delivering unprecedented speed and supreme luxury."
  },
  {
    id: 7,
    name: "Porsche 911 GT3 RS",
    brand: "others",
    price: "$241,300",
    speed: "296 km/h",
    power: "518 HP",
    engine: "4.0L Flat-6",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    desc: "Uncompromising motorsport technology adapted directly for road-legal track performance."
  },
  {
    id: 8,
    name: "Aston Martin DBS Superleggera",
    brand: "others",
    price: "$316,000",
    speed: "340 km/h",
    power: "715 HP",
    engine: "5.2L Twin-Turbo V12",
    image: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=800&auto=format&fit=crop",
    desc: "British elegance combined with devastating twin-turbo V12 torque."
  },
  {
    id: 9,
    name: "Rolls-Royce Phantom VIII",
    brand: "others",
    price: "$460,000",
    speed: "250 km/h",
    power: "563 HP",
    engine: "6.75L V12",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    desc: "The ultimate symbol of bespoke luxury, quietness, and effortless magic-carpet ride quality."
  },
  {
    id: 10,
    name: "Audi R8 V10 Performance",
    brand: "others",
    price: "$210,000",
    speed: "331 km/h",
    power: "602 HP",
    engine: "5.2L Naturally Aspirated V12",
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800&auto=format&fit=crop",
    desc: "High-revving naturally aspirated supercar with legendary Quattro all-wheel drive stability."
  }
];

// DOM Elements
const carsGrid = document.getElementById('carsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const carModal = document.getElementById('carModal');
const modalBody = document.getElementById('modalBody');

// Render Cars Card Grid
function renderCars(cars) {
  carsGrid.innerHTML = '';
  if (cars.length === 0) {
    carsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.2rem; padding: 40px 0;">No luxury supercars found matching your search criteria.</p>`;
    return;
  }

  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-img-box">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        <span class="brand-badge">${car.brand.toUpperCase()}</span>
      </div>
      <div class="car-details">
        <h3>${car.name}</h3>
        <div class="car-price">${car.price}</div>
        <div class="car-specs">
          <div class="spec-item"><i class="fa-solid fa-gauge-high"></i> ${car.speed}</div>
          <div class="spec-item"><i class="fa-solid fa-bolt"></i> ${car.power}</div>
          <div class="spec-item"><i class="fa-solid fa-microchip"></i> ${car.engine}</div>
        </div>
        <button class="btn-card-action" onclick="openModal(${car.id})">
          <i class="fa-solid fa-circle-info"></i> View Specs
        </button>
      </div>
    `;
    carsGrid.appendChild(card);
  });
}

// Initial Render
renderCars(luxuryCars);

// Filter Cars
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    if (filterValue === 'all') {
      renderCars(luxuryCars);
    } else {
      const filtered = luxuryCars.filter(c => c.brand === filterValue);
      renderCars(filtered);
    }
  });
});

// Search Filter
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const searchedCars = luxuryCars.filter(car => 
    car.name.toLowerCase().includes(query) || 
    car.brand.toLowerCase().includes(query)
  );
  renderCars(searchedCars);
});

// Modal Popups
function openModal(id) {
  const car = luxuryCars.find(c => c.id === id);
  if (!car) return;

  modalBody.innerHTML = `
    <img src="${car.image}" style="width:100%; height:220px; object-fit:cover; border-radius:8px; margin-bottom:15px;" alt="${car.name}">
    <h2 style="font-family:'Orbitron'; color:var(--accent-gold); margin-bottom:10px;">${car.name}</h2>
    <p style="color:var(--text-muted); margin-bottom:15px; font-size:0.95rem;">${car.desc}</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px; background:rgba(255,255,255,0.05); padding:12px; border-radius:6px;">
      <div><strong>Top Speed:</strong> ${car.speed}</div>
      <div><strong>Horsepower:</strong> ${car.power}</div>
      <div><strong>Engine:</strong> ${car.engine}</div>
      <div><strong>Est. Price:</strong> ${car.price}</div>
    </div>
    <button class="btn-submit" onclick="selectCarForBooking('${car.name}')">
      <i class="fa-solid fa-calendar-check"></i> Book Test Drive For This Car
    </button>
  `;
  carModal.style.display = 'flex';
}

function closeModal() {
  carModal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === carModal) {
    closeModal();
  }
};

function selectCarForBooking(carName) {
  closeModal();
  document.getElementById('carSelect').value = carName;
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToShowroom() {
  document.getElementById('showroom').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission Alert
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('userName').value;
  const car = document.getElementById('carSelect').value;
  alert(`Thank you, ${name}! Your VIP booking request for ${car} has been sent. Our team will contact you shortly.`);
  document.getElementById('bookingForm').reset();
}
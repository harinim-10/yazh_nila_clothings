// ===== PRODUCTS DATA =====
// All images available: 1-11, 13-27, 30-42, WhatsApp 1 & 2
const products = [

  {
    id: 2,
    name: "Space Silk Saree with Aari Blouse – Mauve Glitter",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Glam",
    badgeType: "gold",
    image: 'images/2.jpeg',
    desc: "Mauve Space Silk saree with glitter Aari work blouse. Glamorous shimmer finish perfect for evening wear.",
    features: ["Glitter Aari work blouse", "Mauve shade", "Shimmer finish", "6.30 meter length", "Evening & party wear"]
  },
  {
    id: 3,
    name: "Embroidered Space Silk Saree – Maroon",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Trending",
    badgeType: "gold",
    image: "images/3.jpeg",
    desc: "Beautiful maroon Space Silk saree with golden floral embroidery. 5.50 meter saree with 0.90 meter blouse.",
    features: ["Golden floral embroidery", "5.50 meter saree", "0.90 meter blouse piece", "Crush texture finish", "Elegant & party-ready"]
  },
  {
    id: 4,
    name: "Space Silk Saree with Aari Blouse",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Best Seller",
    badgeType: "",
    image: "images/4.jpeg",
    desc: "Luxuriously soft Space Silk fabric with a beautiful natural sheen. Elegant drape that enhances your grace. Comes with hand-worked Aari blouse.",
    features: ["Soft & smooth fabric", "Natural sheen finish", "6.30 meter length", "80-point blouse included", "Aari work blouse"]
  },
  {
    id: 5,
    name: "Embroidered Space Silk Saree – Purple",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "",
    badgeType: "",
    image: "images/5.jpeg",
    desc: "Stunning purple Space Silk saree with golden floral embroidery. Rich crush texture, 5.50 saree + 0.90 meter blouse.",
    features: ["Golden floral embroidery", "5.50 meter saree", "0.90 meter blouse", "Crush texture", "Glamorous look"]
  },
  {
    id: 6,
    name: "Space Silk Saree – Teal Blue with Aari Blouse",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Hot",
    badgeType: "",
    image: "images/6.jpeg",
    desc: "Gorgeous teal blue Space Silk saree with Aari work blouse. Naturally shiny fabric with elegant drape.",
    features: ["Natural sheen", "Aari work blouse", "6.30 meter length", "80-point blouse", "Teal blue shade"]
  },
  
  {
    id: 8,
    name: "Kalamkari Print Kurti Set – Teal",
    category: "kurti",
    price: "₹899",
    shipping: "Free on 2+",
    badge: "New",
    badgeType: "",
    image: "images/8.jpeg",
    desc: "Vibrant teal Kalamkari kurti set with matching pants. Rich deity face print with V-neck design.",
    features: ["Premium Cambric Cotton", "Kalamkari print", "V-neck design", "Matching pants", "Sizes: M to XXL"]
  },
  
  
  {
    id: 11,
    name: "Camel Print Kurti Set – Teal (RK530)",
    category: "kurti",
    price: "₹899",
    shipping: "Free on 2+",
    badge: "Popular",
    badgeType: "gold",
    image: "images/11.jpeg",
    desc: "Unique camel block print teal kurti set (RK530). Rajasthani inspired checkered pattern with matching pants.",
    features: ["Rajasthani camel print", "Checkered design", "Branded Liyaasa fabric", "Matching pants", "Sizes: M to XXL"]
  },
  
 
  {
    id: 14,
    name: "Space Silk Saree – Golden Mustard with Aari Blouse",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "",
    badgeType: "",
    image: "images/15.jpeg",
    desc: "Elegant mustard Space Silk saree with hand-worked Aari blouse. Soft shimmer finish with natural sheen.",
    features: ["Natural sheen", "Aari work blouse", "6.30 meter length", "Soft shimmer finish", "Golden mustard shade"]
  },
  {
    id: 15,
    name: "Kanjivaram Silk Saree – Black & Gold",
    category: "silk",
    price: "₹1200",
    shipping: "+ Shipping",
    badge: "Premium",
    badgeType: "",
    image: "images/16.jpeg",
    desc: "Stunning Kanjivaram-style silk saree in black with heavy golden zari border and rich pallu.",
    features: ["Heavy zari border", "Rich golden pallu", "Classic black body", "Boota-Booti weave", "Timeless elegance"]
  },
  {
    id: 16,
    name: "Kalamkari Peacock Cotton Saree – Green",
    category: "cotton",
    price: "₹650",
    shipping: "+ Shipping",
    badge: "Office Wear",
    badgeType: "gold",
    image: "images/17.jpeg",
    desc: "Beautiful green kalamkari cotton saree with vibrant peacock pallu design. Comfortable for office and daily wear.",
    features: ["Peacock pallu design", "Kalamkari print", "Running blouse included", "Office wear comfort", "Digital print"]
  },
  {
    id: 17,
    name: "Embroidered Space Silk Saree – Olive Gold",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "",
    badgeType: "",
    image: "images/18.jpeg",
    desc: "Unique olive-gold Space Silk saree with Aari work blouse and exquisite floral embroidery. 5.50 saree + 0.90 blouse.",
    features: ["Olive gold shade", "Floral Aari work blouse", "5.50 meter saree", "0.90 meter blouse", "Crush texture"]
  },
  {
    id: 18,
    name: "Fancy Cotton Saree – Digital Pattu Print",
    category: "cotton",
    price: "₹650",
    shipping: "+ Shipping",
    badge: "Reseller",
    badgeType: "gold",
    image: "images/19.jpeg",
    desc: "One of the popular branded cotton sarees. Digital printed Pattu with running blouse. Regular office wear.",
    features: ["Digital printed Pattu", "Running blouse included", "Office wear comfort", "Never-seen tassel work", "Branded quality"]
  },
 

  {
    id: 26,
    name: "Digital Print Silk Saree – Olive Floral",
    category: "saree",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "",
    badgeType: "",
    image: "images/30.jpeg",
    desc: "Elegant olive silk saree with all-over white botanical floral print. Rich pallu with zari border.",
    features: ["Botanical floral print", "Zari border", "Running blouse", "Digital print", "Rich pallu"]
  },
  
  {
    id: 28,
    name: "Batik Print Silk Saree – Black & Red",
    category: "saree",
    price: "₹650",
    shipping: "+ Shipping",
    badge: "Unique",
    badgeType: "",
    image: "images/32.jpeg",
    desc: "Bold black and red batik print saree with vibrant tribal-inspired border and kalamkari pallu.",
    features: ["Batik print body", "Tribal border", "Kalamkari pallu", "Running blouse", "Bold design"]
  },
  {
    id: 29,
    name: "Floral Silk Saree – Chocolate Brown",
    category: "saree",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Popular",
    badgeType: "gold",
    image: "images/33.jpeg",
    desc: "Rich chocolate brown silk saree with large floral print. Striped pallu and designer blouse piece.",
    features: ["Large floral print", "Striped pallu", "Designer blouse piece", "Kantha stitch style border", "Luxurious drape"]
  },
  {
    id: 30,
    name: "Floral Silk Saree – Deep Purple",
    category: "saree",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "",
    badgeType: "",
    image: "images/34.jpeg",
    desc: "Stunning deep purple silk saree with large floral print and striped pallu. Perfect for festive wear.",
    features: ["Large floral print", "Striped pallu", "Striped blouse piece", "Rich purple shade", "Festive wear"]
  },
  {
    id: 31,
    name: "Kalamkari Peacock Saree – Purple",
    category: "cotton",
    price: "₹650",
    shipping: "+ Shipping",
    badge: "Office Wear",
    badgeType: "gold",
    image: "images/35.jpeg",
    desc: "Vibrant purple kalamkari saree with colorful peacock pallu design. Comfortable cotton fabric for daily wear.",
    features: ["Peacock pallu design", "Kalamkari print", "Teal zari border", "Running blouse", "Daily wear comfort"]
  },
  {
    id: 32,
    name: "Tie-Dye Silk Saree – Blue & Gold",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Trending",
    badgeType: "gold",
    image: "images/36.jpeg",
    desc: "Striking blue and gold tie-dye silk saree with ikat flame design. Printed blouse included.",
    features: ["Ikat flame design", "Blue & gold shades", "Printed running blouse", "Smooth texture", "Eye-catching design"]
  },
  
  
  {
    id: 35,
    name: "Space Silk Saree with Aari Blouse – Grey",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "",
    badgeType: "",
    image: "images/39.jpeg",
    desc: "Elegant grey Space Silk saree with intricate Aari embroidered blouse in golden floral pattern.",
    features: ["Aari work blouse", "Grey shade", "6.30 meter length", "Golden embroidery", "Natural sheen"]
  },
  {
    id: 36,
    name: "Space Silk Saree with Aari Blouse – Mauve Pink",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "Best Seller",
    badgeType: "",
    image: "images/40.jpeg",
    desc: "Beautiful mauve-pink Space Silk saree with heavily embroidered golden Aari work blouse.",
    features: ["Aari work blouse", "Mauve pink shade", "Gold embroidery", "Natural sheen", "Festive wear"]
  },
  
  {
    id: 38,
    name: "Kalamkari Kurti Set – Teal (Model Wear)",
    category: "kurti",
    price: "₹899",
    shipping: "Free on 2+",
    badge: "",
    badgeType: "",
    image: "images/42.jpeg",
    desc: "Kalamkari print kurti with matching pants. Stylish V-neck with tassel and 3/4 sleeves.",
    features: ["Kalamkari print", "V-neck with tassel", "3/4 sleeves", "Matching pants", "Sizes: M to XXL"]
  },
  {
    id: 39,
    name: "Exclusive Space Silk Saree – Special Collection",
    category: "silk",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "New Arrival",
    badgeType: "gold",
    image: "images/WhatsApp%20Image%202026-06-14%20at%207.28.02%20PM.jpeg",
    desc: "Exclusive new arrival from our special Space Silk collection. Luxuriously soft with natural sheen and elegant drape.",
    features: ["Exclusive design", "Space Silk fabric", "Natural sheen", "Aari work blouse", "6.30 meter length"]
  },
  {
    id: 40,
    name: "Designer Saree – Premium New Collection",
    category: "saree",
    price: "₹799",
    shipping: "+ Shipping",
    badge: "New Arrival",
    badgeType: "gold",
    image: "images/WhatsApp%20Image%202026-06-14%20at%207.28.03%20PM.jpeg",
    desc: "Premium new collection designer saree. First quality fabric with beautiful design and matching blouse.",
    features: ["Premium quality", "Designer pattern", "Matching blouse", "First quality fabric", "Ready stock available"]
  }
];

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('ynCart') || '[]');
let currentSlide = 0;
let slideTimer;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  buildHeroDots();
  startSlideTimer();
  updateCartUI();
  window.addEventListener('scroll', handleScroll);
});

// ===== HERO SLIDER =====
function buildHeroDots() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.getElementById('heroDots');
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero-dot' + (i === 0 ? ' active' : '');
    btn.onclick = () => goToSlide(i);
    dots.appendChild(btn);
  });
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(dir) {
  clearInterval(slideTimer);
  goToSlide(currentSlide + dir);
  startSlideTimer();
}

function startSlideTimer() {
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

// ===== SCROLL BEHAVIOR =====
function handleScroll() {
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 300) scrollTop.classList.add('visible');
  else scrollTop.classList.remove('visible');
}

// ===== MENU =====
function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

// ===== RENDER PRODUCTS =====
function renderProducts(category) {
  const grid = document.getElementById('productsGrid');
  const filtered = category === 'all' ? products : products.filter(p => p.category === category || (category === 'saree' && ['saree','silk','cotton'].includes(p.category)));
  
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#777;grid-column:1/-1;padding:40px">No products found in this category.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap" onclick="openModal(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
        <div class="product-actions">
          <button class="action-btn" title="Quick View" onclick="event.stopPropagation(); openModal(${p.id})">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" title="Add to Cart" onclick="event.stopPropagation(); addToCart(${p.id})">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc.substring(0, 75)}...</p>
        <div class="product-footer">
          <div class="product-price">
            ${p.price}
            <span class="shipping">${p.shipping}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== FILTER CATEGORY =====
function filterCategory(cat, btn) {
  renderProducts(cat);
  if (btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }
  if (cat !== 'all' && !btn) {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== CART =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
    showToast(`${product.name} quantity updated`);
  } else {
    cart.push({ ...product, qty: 1 });
    showToast(`${product.name} added to cart`);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('ynCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, c) => sum + (c.qty || 1), 0);
  document.getElementById('cartCount').textContent = count;
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('active');
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>';
    footer.style.display = 'none';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.price} ${item.qty > 1 ? `× ${item.qty}` : ''}</p>
        <small style="color:#999">${item.shipping}</small>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');
  footer.style.display = 'block';
  document.getElementById('cartTotal').textContent = `${cart.length} item(s)`;
}

function checkoutWhatsApp() {
  const lines = cart.map(c => `• ${c.name} (${c.price}) × ${c.qty || 1}`).join('\n');
  const msg = `Hello Yazh Nila Clothing 🌸\n\nI'd like to order:\n${lines}\n\nPlease confirm the total with shipping. I'll share my address and wait for payment QR.`;
  window.open(`https://wa.me/919677449250?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== PRODUCT MODAL =====
function openModal(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  const inner = document.getElementById('modalInner');
  inner.innerHTML = `
    <div class="modal-img">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="modal-details">
      <span class="badge">${p.category.toUpperCase()}</span>
      <h2>${p.name}</h2>
      <div class="m-price">${p.price} <small style="font-size:0.75rem;color:#999;font-weight:400">${p.shipping}</small></div>
      <p class="m-desc">${p.desc}</p>
      <ul class="m-features">
        ${p.features.map(f => `<li><i class="fas fa-star"></i> ${f}</li>`).join('')}
      </ul>
      <div class="modal-actions">
        <button class="btn-primary" onclick="addToCart(${p.id}); closeModal()">
          <i class="fas fa-shopping-bag"></i> Add to Cart
        </button>
        <button class="btn-outline" onclick="orderNowWhatsApp(${p.id})">
          <i class="fab fa-whatsapp"></i> Order Now
        </button>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function orderNowWhatsApp(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  const msg = `Hello Yazh Nila Clothing 🌸\n\nI'm interested in:\n*${p.name}*\nPrice: ${p.price} ${p.shipping}\n\nPlease share order details and payment QR code.`;
  window.open(`https://wa.me/919677449250?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== ORDER FORM =====
function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const product = document.getElementById('custProduct').value.trim();
  const size = document.getElementById('custSize').value;

  const msg = `Hello Yazh Nila Clothing 🌸\n\n*New Order Request*\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🏠 Address: ${address}\n\n🛍️ Product(s): ${product}${size && size !== 'Not Applicable' ? `\n📏 Size: ${size}` : ''}\n\nPlease confirm the total amount + shipping. I'll wait for your payment QR code here.`;
  window.open(`https://wa.me/919677449250?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('Redirecting to WhatsApp...');
  e.target.reset();
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav').classList.remove('open'));
});


// ─────────────────────────────────────────────
// WHATSAPP FLOAT WIDGET
// ─────────────────────────────────────────────
let waPopupOpen = false;

function toggleWaPopup() {
  waPopupOpen ? closeWaPopup() : openWaPopup();
}

function openWaPopup() {
  waPopupOpen = true;
  document.getElementById('waPopup').classList.add('open');
  const openIcon  = document.querySelector('.wa-float-btn .open-icon');
  const closeIcon = document.querySelector('.wa-float-btn .close-icon');
  if (openIcon)  openIcon.style.display  = 'none';
  if (closeIcon) closeIcon.style.display = 'flex';
  // hide the pulse ring once opened
  const pulse = document.querySelector('.wa-float-pulse');
  if (pulse) pulse.style.display = 'none';
}

function closeWaPopup() {
  waPopupOpen = false;
  document.getElementById('waPopup').classList.remove('open');
  const openIcon  = document.querySelector('.wa-float-btn .open-icon');
  const closeIcon = document.querySelector('.wa-float-btn .close-icon');
  if (openIcon)  openIcon.style.display  = 'flex';
  if (closeIcon) closeIcon.style.display = 'none';
}

function waChat(msg) {
  window.open('https://wa.me/919677449250?text=' + encodeURIComponent(msg), '_blank');
}

// Auto-open popup after 8 seconds on first visit
document.addEventListener('DOMContentLoaded', () => {
  const alreadySeen = sessionStorage.getItem('wa_popup_seen');
  if (!alreadySeen) {
    setTimeout(() => {
      openWaPopup();
      sessionStorage.setItem('wa_popup_seen', '1');
    }, 8000);
  }
});

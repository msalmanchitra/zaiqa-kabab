// 1. Navbar elements ko select karna
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    // 2. Mobile Menu Toggle (Hamburger to 'X' animation)
    hamburger.addEventListener('click', () => {
        // Menu kholna/band karna
        navLinks.classList.toggle('active');
        
        // Hamburger icon ko 'X' mein badalna
        hamburger.classList.toggle('toggle');

        // Links ko bari bari animate karwana (Fade in effect)
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // 3. Sticky Navbar & Color Change on Scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 80) {
            navbar.style.padding = "10px 10%";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
        } else {
            navbar.style.padding = "20px 10%";
            navbar.style.background = "#fff";
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        }
    });

    // 4. "Add to Cart" Button Interaction
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.parentElement.querySelector('h3').innerText;
            
            // Button ka text change karna for feedback
            button.innerText = "✓ Added to Tray";
            button.style.background = "#27ae60";
            button.style.color = "white";

            // 2 second baad wapis normal karna
            setTimeout(() => {
                button.innerText = "Add to Cart";
                button.style.background = "transparent";
                button.style.color = "var(--dark-color)";
            }, 2000);

            console.log(itemName + " has been added to cart!");
        });
    });

    // 5. Reveal Elements on Scroll (Modern Effect)
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.menu-card, .feature-card');
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    });

    // Initial state for Scroll Reveal (CSS mein opacity 0 honi chahiye thi, ye JS se handle ho raha hai)
    document.querySelectorAll('.menu-card, .feature-card').forEach(c => {
        c.style.opacity = "0";
        c.style.transform = "translateY(30px)";
        c.style.transition = "all 0.6s ease-out";
    });
    let count = 0;
const cartCountElement = document.getElementById('cart-count');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountElement.innerText = count;
        
        // Chota sa bounce animation count ke liye
        cartCountElement.parentElement.style.transform = "scale(1.1)";
        setTimeout(() => {
            cartCountElement.parentElement.style.transform = "scale(1)";
        }, 200);
    });
});
// Example for Contact Form
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const email = document.querySelector('#email').value;
        if(!email.includes('@')) {
            e.preventDefault();
            alert("Bhai, sahi email toh likho!");
        }
    });
}window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateX(-50px)";
    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateX(50px)";
    
    setTimeout(() => {
        heroContent.style.transition = "all 1s ease-out";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateX(0)";
        
        heroImage.style.transition = "all 1s ease-out";
        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateX(0)";
    }, 300);
});
// Menu Search Logic
const searchInput = document.querySelector('#search-menu'); // HTML mein input banana hoga
if(searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.menu-card');
        
        items.forEach(item => {
            const title = item.querySelector('h3').innerText.toLowerCase();
            if(title.indexOf(term) != -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}
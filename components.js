class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <img src="logo.png" alt="All American Construction Logo" class="logo-img">
                        <div class="logo-text">
                            <span class="logo-title">All American</span>
                            <span class="logo-subtitle">Construction LLC</span>
                        </div>
                    </a>
                    <button class="menu-toggle" id="mobile-menu" aria-label="Toggle Navigation">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    <ul class="nav-links">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="about.html" class="nav-link">About Us</a></li>
                        <li><a href="services.html" class="nav-link">Services</a></li>
                        <li><a href="gallery.html" class="nav-link">Gallery</a></li>
                        <li><a href="contact.html" class="nav-link btn-primary">Get a Quote</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // Highlight current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage && !link.classList.contains('btn-primary')) {
                link.classList.add('active');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = this.querySelector('#mobile-menu');
        const navLinks = this.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>All American Construction LLC</h3>
                        <p>We’re committed to building more than just structures; we build trust. With a focus on quality craftsmanship and customer satisfaction, we turn your vision into reality.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section contact-info-footer">
                        <h3>Contact Info</h3>
                        <p><strong>Location:</strong> Pender, NE, United States</p>
                        <p><strong>Phone:</strong> <a href="tel:4025188471">(402) 518-8471</a></p>
                        <p><strong>Email:</strong> <a href="mailto:AAConstuction2025@outlook.com">AAConstuction2025@outlook.com</a></p>
                        <div class="social-links">
                            <a href="https://www.facebook.com/people/All-American-Constuction-LLC/61565808188116/" target="_blank" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 All American Construction LLC. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-header', HeaderComponent);
customElements.define('app-footer', FooterComponent);

// Shared JS for animations
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

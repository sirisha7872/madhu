import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-page">
      <header class="header">
        <div class="container">
          <div class="logo">🌸 Blossom & Petals</div>
          <nav class="nav">
            <a href="#home">Home</a>
            <a href="#flowers">Flowers</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section class="hero" id="home">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Fresh Flowers Delivered to Your Door</h1>
            <p class="hero-subtitle">Hand-picked bouquets crafted with love for every occasion</p>
            <button class="cta-button">Shop Now</button>
          </div>
        </div>
      </section>

      <section class="features" id="flowers">
        <div class="container">
          <h2 class="section-title">Our Collections</h2>
          <div class="features-grid">
            <div class="feature-card" *ngFor="let collection of collections">
              <div class="feature-icon">{{ collection.icon }}</div>
              <h3>{{ collection.name }}</h3>
              <p>{{ collection.description }}</p>
              <span class="price">{{ collection.price }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>Why Choose Us</h2>
              <div class="feature-list">
                <div class="feature-item">
                  <span class="check">✓</span>
                  <div>
                    <h4>Fresh Daily</h4>
                    <p>All flowers sourced fresh every morning</p>
                  </div>
                </div>
                <div class="feature-item">
                  <span class="check">✓</span>
                  <div>
                    <h4>Same Day Delivery</h4>
                    <p>Order before 2 PM for same-day delivery</p>
                  </div>
                </div>
                <div class="feature-item">
                  <span class="check">✓</span>
                  <div>
                    <h4>Expert Florists</h4>
                    <p>Professional arrangements for any occasion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <h2 class="section-title">What Our Customers Say</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card" *ngFor="let testimonial of testimonials">
              <div class="stars">★★★★★</div>
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <p class="testimonial-author">- {{ testimonial.author }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container">
          <h2 class="section-title">Get In Touch</h2>
          <div class="contact-info">
            <div class="contact-item">
              <span class="icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p>123 Garden Street, Flower District</p>
              </div>
            </div>
            <div class="contact-item">
              <span class="icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div class="contact-item">
              <span class="icon">✉️</span>
              <div>
                <h4>Email Us</h4>
                <p>hello&#64;blossompetals.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <p>&copy; 2025 Blossom & Petals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .landing-page {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #2c3e50;
      line-height: 1.6;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header {
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 20px;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #e74c3c;
    }

    .nav {
      display: flex;
      gap: 2rem;
    }

    .nav a {
      text-decoration: none;
      color: #2c3e50;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav a:hover {
      color: #e74c3c;
    }

    .hero {
      background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 50%, #ff7675 100%);
      padding: 120px 20px;
      text-align: center;
    }

    .hero-content {
      max-width: 700px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: white;
      margin-bottom: 2.5rem;
    }

    .cta-button {
      background: white;
      color: #e74c3c;
      border: none;
      padding: 1rem 3rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }

    .features {
      padding: 80px 20px;
      background: #f8f9fa;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #2c3e50;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2.5rem;
      border-radius: 15px;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }

    .feature-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .feature-card p {
      color: #7f8c8d;
      margin-bottom: 1.5rem;
    }

    .price {
      font-size: 1.8rem;
      font-weight: 700;
      color: #e74c3c;
    }

    .about {
      padding: 80px 20px;
      background: white;
    }

    .about-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .about-text h2 {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
      text-align: center;
      color: #2c3e50;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .feature-item {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .check {
      width: 40px;
      height: 40px;
      background: #e74c3c;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .feature-item h4 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    .feature-item p {
      color: #7f8c8d;
    }

    .testimonials {
      padding: 80px 20px;
      background: #f8f9fa;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .stars {
      color: #f39c12;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .testimonial-text {
      font-style: italic;
      color: #555;
      margin-bottom: 1rem;
      line-height: 1.8;
    }

    .testimonial-author {
      font-weight: 600;
      color: #e74c3c;
    }

    .contact {
      padding: 80px 20px;
      background: white;
    }

    .contact-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .contact-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .icon {
      font-size: 2rem;
    }

    .contact-item h4 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    .contact-item p {
      color: #7f8c8d;
    }

    .footer {
      background: #2c3e50;
      color: white;
      padding: 2rem 20px;
      text-align: center;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .nav {
        gap: 1rem;
      }

      .features-grid,
      .testimonials-grid,
      .contact-info {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class App {
  collections = [
    {
      icon: '🌹',
      name: 'Romantic Roses',
      description: 'Classic red roses perfect for expressing love',
      price: '$49.99'
    },
    {
      icon: '🌻',
      name: 'Sunny Delight',
      description: 'Bright sunflowers to brighten any day',
      price: '$39.99'
    },
    {
      icon: '🌷',
      name: 'Spring Garden',
      description: 'Mixed tulips in vibrant spring colors',
      price: '$44.99'
    },
    {
      icon: '💐',
      name: 'Designer Bouquet',
      description: 'Premium mixed arrangement by our experts',
      price: '$69.99'
    },
    {
      icon: '🌺',
      name: 'Tropical Paradise',
      description: 'Exotic tropical flowers for a bold statement',
      price: '$54.99'
    },
    {
      icon: '🪻',
      name: 'Lavender Dreams',
      description: 'Calming lavender bouquets with fresh herbs',
      price: '$42.99'
    }
  ];

  testimonials = [
    {
      text: 'The flowers were absolutely stunning! Delivered right on time and stayed fresh for over a week.',
      author: 'Sarah Johnson'
    },
    {
      text: 'Best flower shop in town. The arrangements are always creative and beautifully presented.',
      author: 'Michael Chen'
    },
    {
      text: 'I order from Blossom & Petals for every special occasion. They never disappoint!',
      author: 'Emily Rodriguez'
    }
  ];
}

bootstrapApplication(App);

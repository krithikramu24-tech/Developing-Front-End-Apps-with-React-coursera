e-plantShopping — Paradise Nursery Shopping Application

e-plantShopping is the repository for Paradise Nursery, a React and Redux Toolkit e-commerce front-end application for browsing and purchasing houseplants online.

Overview

Paradise Nursery allows users to explore curated categories of houseplants, add plants to a dynamic shopping cart, adjust item quantities, remove items, and view real-time item counts and subtotals.

Features
Landing Page: Full-screen greenhouse background with company overview (AboutUs) and a Get Started button linking to the plant catalog.
Product Listing Page (ProductList): Displays houseplants grouped into categories (Air Purifying Plants, Aromatic Fragrant Plants, Insect Repellent Plants, Medicinal Plants, and Low Maintenance Plants), with thumbnails, descriptions, pricing, and stateful Add to Cart / Added to Cart buttons.
Navigation Bar: Persistent top bar with links to Home, Plants, and the Cart icon displaying the live total quantity of items.
Shopping Cart (CartItem & CartSlice): Redux-managed cart supporting quantity increment (+), decrement (-), item deletion (Delete), per-item subtotal, total cart amount, Continue Shopping, and Checkout alert.
Tech Stack
React 18
Redux Toolkit & React Redux
Vite
CSS3

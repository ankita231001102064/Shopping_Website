import { useEffect, useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 499,
    mrp: 799,
    rating: 4.5,
    reviews: 1832,
    stock: 12,
    brand: "Logitech",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    description:
      "Ergonomic wireless mouse with silent clicks, smooth tracking and long battery life.",
    features: ["2.4GHz Wireless", "Silent Click", "Long Battery", "Ergonomic Design"],
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 899,
    mrp: 1499,
    rating: 4.6,
    reviews: 927,
    stock: 8,
    brand: "Redragon",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description:
      "RGB mechanical keyboard with tactile switches and premium gaming-style build.",
    features: ["RGB Backlight", "Mechanical Switches", "USB Connection", "Anti-Ghosting"],
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Electronics",
    price: 1299,
    mrp: 1899,
    rating: 4.4,
    reviews: 642,
    stock: 15,
    brand: "Portronics",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=800&q=80",
    description:
      "Adjustable aluminium laptop stand designed for comfortable working and better posture.",
    features: ["Adjustable Height", "Aluminium", "Foldable", "Heat Dissipation"],
  },
  {
    id: 4,
    name: "USB-C Hub",
    category: "Electronics",
    price: 1499,
    mrp: 2199,
    rating: 4.3,
    reviews: 438,
    stock: 6,
    brand: "Anker",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
    description:
      "7-in-1 USB-C hub with HDMI, USB 3.0, SD card and high-speed data transfer.",
    features: ["7-in-1", "HDMI", "USB 3.0", "SD Card Reader"],
  },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Audio",
    price: 2499,
    mrp: 3999,
    rating: 4.7,
    reviews: 3214,
    stock: 20,
    brand: "JBL",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "Premium wireless headphones with deep bass, comfortable cushions and long playback.",
    features: ["Bluetooth 5.3", "Deep Bass", "40h Playback", "Fast Charging"],
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Wearables",
    price: 2999,
    mrp: 4999,
    rating: 4.5,
    reviews: 1765,
    stock: 11,
    brand: "Noise",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description:
      "Modern smartwatch with fitness tracking, notifications and stylish display.",
    features: ["AMOLED Display", "Heart Rate", "SpO2", "7 Day Battery"],
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 1799,
    mrp: 2799,
    rating: 4.6,
    reviews: 1148,
    stock: 9,
    brand: "Boat",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description:
      "Portable Bluetooth speaker with powerful sound and deep bass.",
    features: ["20W Output", "Bluetooth 5.0", "12h Playback", "Water Resistant"],
  },
  {
    id: 8,
    name: "LED Desk Lamp",
    category: "Home",
    price: 999,
    mrp: 1499,
    rating: 4.4,
    reviews: 576,
    stock: 18,
    brand: "Wipro",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description:
      "Minimal LED desk lamp with adjustable brightness and modern design.",
    features: ["LED Light", "Adjustable", "Touch Control", "Energy Saving"],
  },
  {
    id: 9,
    name: "Gaming Mouse",
    category: "Gaming",
    price: 799,
    mrp: 1299,
    rating: 4.5,
    reviews: 1298,
    stock: 13,
    brand: "HP",
    image:
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=800&q=80",
    description: "High precision gaming mouse with RGB lighting.",
    features: ["RGB", "7200 DPI", "6 Buttons", "Gaming Sensor"],
  },
  {
    id: 10,
    name: "Gaming Headset",
    category: "Gaming",
    price: 1599,
    mrp: 2499,
    rating: 4.4,
    reviews: 863,
    stock: 7,
    brand: "HyperX",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
    description: "Immersive gaming headset with microphone and surround sound.",
    features: ["Surround Sound", "Noise Mic", "RGB", "Comfort Cushions"],
  },
  {
    id: 11,
    name: "Power Bank 20000mAh",
    category: "Electronics",
    price: 1399,
    mrp: 2199,
    rating: 4.5,
    reviews: 2345,
    stock: 25,
    brand: "Mi",
    image:
      "https://images.unsplash.com/photo-1609592424208-5c52c0b9f2a6?auto=format&fit=crop&w=800&q=80",
    description: "High capacity power bank with fast charging support.",
    features: ["20000mAh", "Fast Charge", "Dual USB", "Type-C"],
  },
  {
    id: 12,
    name: "Smartphone Stand",
    category: "Home",
    price: 399,
    mrp: 699,
    rating: 4.3,
    reviews: 721,
    stock: 30,
    brand: "Portronics",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    description: "Compact adjustable smartphone stand for desk use.",
    features: ["Adjustable", "Foldable", "Lightweight", "Desk Friendly"],
  },
  {
    id: 13,
    name: "Smart LED Bulb",
    category: "Home",
    price: 599,
    mrp: 999,
    rating: 4.4,
    reviews: 954,
    stock: 22,
    brand: "Philips",
    image:
      "https://images.unsplash.com/photo-1507457379470-08b800bebc67?auto=format&fit=crop&w=800&q=80",
    description: "Wi-Fi enabled smart LED bulb with adjustable brightness.",
    features: ["Wi-Fi", "Voice Control", "16M Colours", "Energy Saving"],
  },
  {
    id: 14,
    name: "Portable SSD 500GB",
    category: "Electronics",
    price: 4299,
    mrp: 5999,
    rating: 4.7,
    reviews: 653,
    stock: 5,
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-fast portable SSD for storage and backups.",
    features: ["500GB", "USB-C", "1050MB/s", "Compact"],
  },
  {
    id: 15,
    name: "Webcam Full HD",
    category: "Electronics",
    price: 1899,
    mrp: 2999,
    rating: 4.3,
    reviews: 489,
    stock: 10,
    brand: "Logitech",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80",
    description: "Full HD webcam for meetings, classes and streaming.",
    features: ["1080p", "Auto Focus", "Built-in Mic", "USB"],
  },
  {
    id: 16,
    name: "Tablet Stand",
    category: "Home",
    price: 699,
    mrp: 1099,
    rating: 4.2,
    reviews: 341,
    stock: 17,
    brand: "Amazon Basics",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description: "Stable aluminium tablet holder for desk and bedside use.",
    features: ["Aluminium", "Stable Base", "Adjustable", "Foldable"],
  },
  {
    id: 17,
    name: "Fitness Band",
    category: "Wearables",
    price: 1199,
    mrp: 1999,
    rating: 4.3,
    reviews: 1324,
    stock: 14,
    brand: "Realme",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight fitness band with health and activity tracking.",
    features: ["Activity Tracking", "Heart Rate", "Sleep Tracking", "Water Resistant"],
  },
  {
    id: 18,
    name: "Mini Bluetooth Speaker",
    category: "Audio",
    price: 899,
    mrp: 1499,
    rating: 4.5,
    reviews: 876,
    stock: 19,
    brand: "Boat",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    description: "Small portable speaker with surprisingly powerful audio.",
    features: ["10W", "Portable", "Bluetooth", "8h Battery"],
  },
  {
    id: 19,
    name: "Gaming Keyboard",
    category: "Gaming",
    price: 1299,
    mrp: 1999,
    rating: 4.6,
    reviews: 1156,
    stock: 8,
    brand: "Cosmic Byte",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
    description: "RGB gaming keyboard with tactile mechanical-style keys.",
    features: ["RGB", "Gaming Mode", "Anti-Ghosting", "USB"],
  },
  {
    id: 20,
    name: "Noise Cancelling Earbuds",
    category: "Audio",
    price: 1999,
    mrp: 2999,
    rating: 4.6,
    reviews: 1897,
    stock: 16,
    brand: "OnePlus",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    description: "True wireless earbuds with active noise cancellation.",
    features: ["ANC", "Bluetooth 5.3", "Fast Pair", "30h Battery"],
  },
];

const categories = [
  "All",
  "Electronics",
  "Audio",
  "Wearables",
  "Gaming",
  "Home",
];

const coupons = {
  SAVE10: 10,
  SAVE15: 15,
  SHOP20: 20,
};

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minDiscount, setMinDiscount] = useState(0);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("shopora-cart") || "[]");
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("shopora-wishlist") || "[]");
  });

  const [recent, setRecent] = useState(() => {
    return JSON.parse(localStorage.getItem("shopora-recent") || "[]");
  });

  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    localStorage.setItem("shopora-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shopora-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("shopora-recent", JSON.stringify(recent));
  }, [recent]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  const discountPercent = (product) =>
    Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      const matchesDiscount = discountPercent(product) >= minDiscount;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesDiscount
      );
    });

    if (sort === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "discount") {
      list.sort(
        (a, b) =>
          discountPercent(b) - discountPercent(a)
      );
    }

    return list;
  }, [search, category, sort, maxPrice, minDiscount]);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = Math.round(
    (subtotal * couponDiscount) / 100
  );

  const taxableAmount = subtotal - discount;

  const gst = Math.round(taxableAmount * 0.18);

  const delivery = taxableAmount >= 999 || taxableAmount === 0 ? 0 : 49;

  const grandTotal = taxableAmount + gst + delivery;

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    showToast(`${product.name} added to cart`);
  };

  const updateQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(0, item.quantity + amount),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );

    showToast("Item removed from cart");
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
      setWishlist((current) =>
        current.filter((item) => item.id !== product.id)
      );
      showToast("Removed from wishlist");
    } else {
      setWishlist((current) => [...current, product]);
      showToast("Added to wishlist ❤️");
    }
  };

  const openProduct = (product) => {
    setSelectedProduct(product);

    setRecent((current) => {
      const filtered = current.filter(
        (item) => item.id !== product.id
      );

      return [product, ...filtered].slice(0, 5);
    });
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (coupons[code]) {
      setCouponDiscount(coupons[code]);
      showToast(`${coupons[code]}% coupon applied`);
    } else {
      setCouponDiscount(0);
      showToast("Invalid coupon code");
    }
  };

  return (
    <div className="app">
      {/* TOP OFFER BAR */}
      <div className="offer-bar">
        <span>⚡ Mega Sale is Live</span>
        <span>Free delivery on orders above ₹999</span>
        <span>Use SAVE15 for extra 15% OFF</span>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <div className="logo-icon">S</div>
          <div>
            <strong>Shopora</strong>
            <small>smart shopping</small>
          </div>
        </div>

        <div className="search-box">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")}>×</button>
          )}
        </div>

        <div className="nav-actions">
          <button
            className="nav-account"
            onClick={() => setAccountOpen(true)}
          >
            <span>👤</span>
            <div>
              <small>Hello, User</small>
              <strong>Account</strong>
            </div>
          </button>

          <button
            className="nav-icon"
            onClick={() => setWishlistOpen(true)}
          >
            ❤️
            {wishlist.length > 0 && (
              <b>{wishlist.length}</b>
            )}
          </button>

          <button
            className="cart-button"
            onClick={() => setCartOpen(true)}
          >
            🛒
            <span>Cart</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </button>
        </div>
      </header>

      {/* CATEGORY NAV */}
      <nav className="category-nav">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => {
            setMinDiscount(20);
            document
              .getElementById("products")
              ?.scrollIntoView();
          }}
        >
          🔥 Deals
        </button>

        <button
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView()
          }
        >
          Best Sellers
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">LIMITED TIME OFFER</span>

          <h1>
            Everything you need.
            <br />
            <span>Better prices.</span>
          </h1>

          <p>
            Discover electronics, audio, gaming accessories,
            wearables and everyday essentials.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView()
              }
            >
              Shop Now →
            </button>

            <button
              className="outline-btn"
              onClick={() => {
                setMinDiscount(20);
                document
                  .getElementById("products")
                  ?.scrollIntoView();
              }}
            >
              View Deals
            </button>
          </div>

          <div className="hero-points">
            <span>✓ Genuine Products</span>
            <span>✓ Easy Returns</span>
            <span>✓ Secure Payments</span>
          </div>
        </div>

        <div className="hero-product">
          <div className="sale-circle">UP TO<br />50% OFF</div>

          <img
            src={products[4].image}
            alt="Headphones"
          />

          <div className="hero-product-info">
            <strong>Wireless Headphones</strong>
            <span>
              ₹2,499 <del>₹3,999</del>
            </span>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section className="service-strip">
        <div>
          <span>🚚</span>
          <div>
            <strong>Free Delivery</strong>
            <small>On orders above ₹999</small>
          </div>
        </div>

        <div>
          <span>↩️</span>
          <div>
            <strong>7 Days Return</strong>
            <small>Easy return policy</small>
          </div>
        </div>

        <div>
          <span>🔒</span>
          <div>
            <strong>Secure Payment</strong>
            <small>100% secure checkout</small>
          </div>
        </div>

        <div>
          <span>✓</span>
          <div>
            <strong>Genuine Products</strong>
            <small>Quality guaranteed</small>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="section-heading">
          <div>
            <small>SHOP BY CATEGORY</small>
            <h2>What are you looking for?</h2>
          </div>
        </div>

        <div className="category-cards">
          {[
            ["Electronics", "💻", "10+ Products"],
            ["Audio", "🎧", "5+ Products"],
            ["Gaming", "🎮", "5+ Products"],
            ["Wearables", "⌚", "4+ Products"],
            ["Home", "🏠", "6+ Products"],
          ].map(([name, icon, count]) => (
            <button
              key={name}
              onClick={() => {
                setCategory(name);
                document
                  .getElementById("products")
                  ?.scrollIntoView();
              }}
              className="category-card"
            >
              <span>{icon}</span>
              <strong>{name}</strong>
              <small>{count}</small>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section product-section" id="products">
        <div className="section-heading product-heading">
          <div>
            <small>OUR COLLECTION</small>
            <h2>Popular Products</h2>
            <p>
              {filteredProducts.length} products found
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>

        <div className="shop-layout">
          {/* FILTER */}
          <aside className="filters">
            <div className="filter-title">
              <strong>Filters</strong>
              <button
                onClick={() => {
                  setCategory("All");
                  setMaxPrice(5000);
                  setMinDiscount(0);
                }}
              >
                Clear
              </button>
            </div>

            <div className="filter-block">
              <strong>Category</strong>

              {categories.map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    checked={category === item}
                    onChange={() => setCategory(item)}
                  />
                  {item}
                </label>
              ))}
            </div>

            <div className="filter-block">
              <strong>Maximum Price</strong>

              <input
                type="range"
                min="300"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
              />

              <div className="range-values">
                <span>₹300</span>
                <strong>₹{maxPrice}</strong>
              </div>
            </div>

            <div className="filter-block">
              <strong>Minimum Discount</strong>

              {[0, 10, 20, 30, 40].map((discount) => (
                <label key={discount}>
                  <input
                    type="radio"
                    checked={minDiscount === discount}
                    onChange={() =>
                      setMinDiscount(discount)
                    }
                  />
                  {discount === 0
                    ? "All Discounts"
                    : `${discount}% or more`}
                </label>
              ))}
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                discount={discountPercent(product)}
                isWishlisted={wishlist.some(
                  (item) => item.id === product.id
                )}
                onOpen={() => openProduct(product)}
                onCart={() => addToCart(product)}
                onWishlist={() =>
                  toggleWishlist(product)
                }
              />
            ))}

            {filteredProducts.length === 0 && (
              <div className="empty-products">
                <span>🔎</span>
                <h3>No products found</h3>
                <p>Try changing your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section className="deals-section">
        <div>
          <small>WEEKEND SPECIAL</small>
          <h2>Extra savings on selected products</h2>
          <p>
            Use <strong>SHOP20</strong> at checkout and get
            extra 20% off.
          </p>
          <button
            onClick={() => {
              setCoupon("SHOP20");
              setCouponDiscount(20);
              setCartOpen(true);
            }}
          >
            Claim Offer
          </button>
        </div>

        <div className="deal-number">
          20%
          <small>EXTRA OFF</small>
        </div>
      </section>

      {/* RECENTLY VIEWED */}
      {recent.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <div>
              <small>YOUR ACTIVITY</small>
              <h2>Recently Viewed</h2>
            </div>
          </div>

          <div className="recent-grid">
            {recent.map((product) => (
              <button
                className="recent-card"
                key={product.id}
                onClick={() => openProduct(product)}
              >
                <img src={product.image} alt={product.name} />
                <div>
                  <strong>{product.name}</strong>
                  <span>₹{product.price.toLocaleString()}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div>
            <div className="footer-logo">
              <div className="logo-icon">S</div>
              <strong>Shopora</strong>
            </div>

            <p>
              Your everyday shopping destination for
              quality products at better prices.
            </p>
          </div>

          <div>
            <h4>Shop</h4>
            <button onClick={() => setCategory("Electronics")}>
              Electronics
            </button>
            <button onClick={() => setCategory("Audio")}>
              Audio
            </button>
            <button onClick={() => setCategory("Gaming")}>
              Gaming
            </button>
            <button onClick={() => setCategory("Home")}>
              Home
            </button>
          </div>

          <div>
            <h4>Customer Care</h4>
            <button>Contact Us</button>
            <button>Returns</button>
            <button>Shipping</button>
            <button>FAQ</button>
          </div>

          <div>
            <h4>We Accept</h4>
            <div className="payments">
              <span>VISA</span>
              <span>UPI</span>
              <span>RuPay</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Shopora. All rights reserved.
        </div>
      </footer>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

              <span>
                {discountPercent(selectedProduct)}% OFF
              </span>
            </div>

            <div className="modal-details">
              <small className="brand">
                {selectedProduct.brand}
              </small>

              <h2>{selectedProduct.name}</h2>

              <div className="rating-row">
                <strong>
                  ⭐ {selectedProduct.rating}
                </strong>
                <span>
                  {selectedProduct.reviews.toLocaleString()}{" "}
                  ratings & reviews
                </span>
              </div>

              <div className="price-large">
                ₹{selectedProduct.price.toLocaleString()}
                <del>
                  ₹{selectedProduct.mrp.toLocaleString()}
                </del>
                <b>
                  {discountPercent(selectedProduct)}% off
                </b>
              </div>

              <p className="description">
                {selectedProduct.description}
              </p>

              <div className="stock">
                ✓ In Stock — Only {selectedProduct.stock} left
              </div>

              <div className="offer-box">
                <strong>🏷️ Available Offers</strong>
                <p>• Extra 10% off with bank cards</p>
                <p>• Free delivery on orders above ₹999</p>
                <p>• No-cost EMI available</p>
              </div>

              <h4>Key Features</h4>

              <div className="features">
                {selectedProduct.features.map((feature) => (
                  <span key={feature}>✓ {feature}</span>
                ))}
              </div>

              <div className="modal-actions">
                <button
                  className="wishlist-large"
                  onClick={() =>
                    toggleWishlist(selectedProduct)
                  }
                >
                  {wishlist.some(
                    (item) =>
                      item.id === selectedProduct.id
                  )
                    ? "❤️ Wishlisted"
                    : "♡ Wishlist"}
                </button>

                <button
                  className="primary-btn"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                    setCartOpen(true);
                  }}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header">
              <div>
                <small>YOUR SHOPPING BAG</small>
                <h2>Cart ({cartCount})</h2>
              </div>

              <button onClick={() => setCartOpen(false)}>
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛒</span>
                <h3>Your cart is empty</h3>
                <p>Add something you love!</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div className="cart-item-info">
                        <strong>{item.name}</strong>

                        <span>
                          ₹{item.price.toLocaleString()}
                        </span>

                        <div className="quantity">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                          >
                            −
                          </button>

                          <b>{item.quantity}</b>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                          >
                            +
                          </button>

                          <button
                            className="remove"
                            onClick={() =>
                              removeItem(item.id)
                            }
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="coupon-box">
                  <strong>Have a coupon?</strong>

                  <div>
                    <input
                      placeholder="Enter coupon"
                      value={coupon}
                      onChange={(e) =>
                        setCoupon(e.target.value)
                      }
                    />

                    <button onClick={applyCoupon}>
                      Apply
                    </button>
                  </div>

                  <small>
                    Try: SAVE10, SAVE15 or SHOP20
                  </small>
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>₹{subtotal.toLocaleString()}</strong>
                  </div>

                  <div>
                    <span>Discount</span>
                    <strong className="green">
                      - ₹{discount.toLocaleString()}
                    </strong>
                  </div>

                  <div>
                    <span>GST (18%)</span>
                    <strong>₹{gst.toLocaleString()}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>
                      {delivery === 0
                        ? "FREE"
                        : `₹${delivery}`}
                    </strong>
                  </div>

                  <hr />

                  <div className="total">
                    <span>Grand Total</span>
                    <strong>
                      ₹{grandTotal.toLocaleString()}
                    </strong>
                  </div>

                  <button
                    className="checkout"
                    onClick={() =>
                      showToast(
                        "Checkout demo completed successfully!"
                      )
                    }
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* ACCOUNT */}
      {accountOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setAccountOpen(false)}
        >
          <aside
            className="account-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="account-top">
              <button
                onClick={() => setAccountOpen(false)}
              >
                ×
              </button>

              <div className="profile-avatar">A</div>

              <h2>Hello, Shopper!</h2>
              <p>Welcome back to Shopora</p>
            </div>

            <div className="account-menu">
              <button>
                <span>👤</span>
                <div>
                  <strong>My Profile</strong>
                  <small>Personal information</small>
                </div>
                <b>›</b>
              </button>

              <button>
                <span>📦</span>
                <div>
                  <strong>My Orders</strong>
                  <small>Track your orders</small>
                </div>
                <b>›</b>
              </button>

              <button
                onClick={() => {
                  setAccountOpen(false);
                  setWishlistOpen(true);
                }}
              >
                <span>❤️</span>
                <div>
                  <strong>Wishlist</strong>
                  <small>{wishlist.length} saved items</small>
                </div>
                <b>›</b>
              </button>

              <button>
                <span>📍</span>
                <div>
                  <strong>Saved Addresses</strong>
                  <small>Manage delivery addresses</small>
                </div>
                <b>›</b>
              </button>

              <button>
                <span>🎟️</span>
                <div>
                  <strong>Coupons & Offers</strong>
                  <small>View available discounts</small>
                </div>
                <b>›</b>
              </button>

              <button>
                <span>⚙️</span>
                <div>
                  <strong>Settings</strong>
                  <small>Account preferences</small>
                </div>
                <b>›</b>
              </button>
            </div>

            <button
              className="logout"
              onClick={() =>
                showToast("You are already logged in")
              }
            >
              Logout
            </button>
          </aside>
        </div>
      )}

      {/* WISHLIST */}
      {wishlistOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setWishlistOpen(false)}
        >
          <aside
            className="wishlist-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header">
              <div>
                <small>SAVED FOR LATER</small>
                <h2>My Wishlist</h2>
              </div>

              <button
                onClick={() => setWishlistOpen(false)}
              >
                ×
              </button>
            </div>

            {wishlist.length === 0 ? (
              <div className="empty-cart">
                <span>♡</span>
                <h3>Your wishlist is empty</h3>
                <p>Save products you love here.</p>
              </div>
            ) : (
              <div className="wishlist-list">
                {wishlist.map((product) => (
                  <div
                    className="wishlist-item"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div>
                      <strong>{product.name}</strong>

                      <span>
                        ⭐ {product.rating} ·{" "}
                        {product.reviews} reviews
                      </span>

                      <b>
                        ₹{product.price.toLocaleString()}
                      </b>

                      <button
                        onClick={() => {
                          addToCart(product);
                          setWishlistOpen(false);
                          setCartOpen(true);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function ProductCard({
  product,
  discount,
  isWishlisted,
  onOpen,
  onCart,
  onWishlist,
}) {
  return (
    <article className="product-card">
      <div
        className="product-image"
        onClick={onOpen}
      >
        <img src={product.image} alt={product.name} />

        <span className="discount-badge">
          {discount}% OFF
        </span>

        <button
          className={`heart ${isWishlisted ? "liked" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onWishlist();
          }}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {product.stock <= 8 && (
          <small className="stock-badge">
            Only {product.stock} left
          </small>
        )}
      </div>

      <div className="product-info">
        <small>{product.brand}</small>

        <h3 onClick={onOpen}>{product.name}</h3>

        <div className="rating">
          <span>⭐ {product.rating}</span>
          <small>
            ({product.reviews.toLocaleString()})
          </small>
        </div>

        <div className="price">
          <strong>
            ₹{product.price.toLocaleString()}
          </strong>

          <del>
            ₹{product.mrp.toLocaleString()}
          </del>

          <span>{discount}% off</span>
        </div>

        <div className="card-delivery">
          🚚 Free delivery
        </div>

        <div className="card-actions">
          <button
            className="details-btn"
            onClick={onOpen}
          >
            View Details
          </button>

          <button
            className="add-btn"
            onClick={onCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default App;
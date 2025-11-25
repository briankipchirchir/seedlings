import React, { useState } from "react";
import { ShoppingCart, Heart, Leaf, ArrowRight, Check } from "lucide-react";

export default function EnhancedHomePage() {
  const [favorites, setFavorites] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [showNotif, setShowNotif] = useState(false);
  const [notifMsg, setNotifMsg] = useState("");

  const primaryGreen = "#1B5E20";
  const accentGreen = "#43A047";
  const lightGreen = "#E8F5E9";
  const darkText = "#0D1B0F";

  const products = [
    {
      id: 1,
      name: "Cherry Tomato",
      price: "$3.99",
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1592841494835-fff69d2d959a?w=500&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Fresh Basil",
      price: "$2.99",
      category: "Herbs",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd83eaf?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Bell Pepper",
      price: "$4.49",
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd83eaf?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Marigold",
      price: "$2.49",
      category: "Ornamental",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
    },
    {
      id: 5,
      name: "Fresh Mint",
      price: "$2.99",
      category: "Herbs",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd83eaf?w=500&h=500&fit=crop",
    },
    {
      id: 6,
      name: "Cucumber",
      price: "$3.99",
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&h=500&fit=crop",
    },
  ];

  const features = [
    { icon: "🌱", title: "100% Organic", desc: "Grown naturally without chemicals" },
    { icon: "🚚", title: "Fast Delivery", desc: "Ships within 24 hours" },
    { icon: "💚", title: "Expert Support", desc: "Gardening tips included" },
  ];

  const reasons = [
    { title: "Premium Quality", desc: "Laboratory-tested seedlings guaranteed healthy" },
    { title: "Eco-Friendly", desc: "Biodegradable pots and sustainable practices" },
    { title: "Nationwide", desc: "Trusted by gardeners coast to coast" },
    { title: "Money-Back", desc: "Satisfaction guarantee within 7 days" },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setNotifMsg(`${product.name} added to cart!`);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", background: "#FAFAF8", color: darkText }}>

      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${primaryGreen} 0%, ${accentGreen} 100%)`,
        padding: "120px 24px",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "900", lineHeight: "1.1", marginBottom: "20px", letterSpacing: "-1px" }}>
            Grow Your Garden Sustainably
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "32px", opacity: 0.95, fontWeight: "300" }}>
            Premium seedlings nurtured by experts • Delivered healthy to your door • 100% organic, zero compromise
          </p>
          <button style={{
            background: "#fff",
            color: primaryGreen,
            border: "none",
            padding: "16px 48px",
            fontSize: "1.05rem",
            fontWeight: "700",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => {
            e.target.transform = "translateY(-2px)";
            e.target.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
          }}>
            Explore Our Collection <ArrowRight size={20} style={{ marginLeft: "8px", display: "inline" }} />
          </button>
        </div>
        <div style={{
          position: "absolute",
          right: "-50px",
          top: "-50px",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
        }} />
      </section>

      {/* QUICK STATS */}
      <section style={{ background: "#fff", padding: "48px 24px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
          {[
            { num: "10K+", text: "Happy Customers" },
            { num: "500+", text: "Plant Varieties" },
            { num: "98%", text: "Satisfaction Rate" },
            { num: "24hrs", text: "Quick Dispatch" },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", color: primaryGreen, marginBottom: "8px" }}>{stat.num}</div>
              <div style={{ color: "#666", fontSize: "0.95rem", fontWeight: "600" }}>{stat.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section style={{ background: lightGreen, padding: "60px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {features.map((feature, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "2.2rem" }}>{feature.icon}</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: primaryGreen, marginBottom: "6px" }}>{feature.title}</h4>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5", margin: "0" }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS GALLERY */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "900", color: primaryGreen, marginBottom: "12px" }}>Premium Collection</h2>
            <p style={{ color: "#666", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>Handpicked seedlings ready to transform your garden into a thriving green space</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "28px" }}>
            {products.map((product) => (
              <div key={product.id} style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}>
                <div style={{ position: "relative", height: "240px", overflow: "hidden", background: "#f5f5f5" }}>
                  <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: primaryGreen, color: "#fff", padding: "6px 14px", borderRadius: "16px", fontSize: "0.75rem", fontWeight: "700" }}>
                    {product.category}
                  </div>
                  <button onClick={() => toggleFavorite(product.id)} style={{
                    position: "absolute", top: "12px", right: "12px", background: "#fff", border: "none", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  }}>
                    <Heart size={20} fill={favorites[product.id] ? "#e53935" : "none"} stroke={favorites[product.id] ? "#e53935" : primaryGreen} />
                  </button>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: primaryGreen, marginBottom: "16px" }}>{product.name}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: "800", color: primaryGreen }}>{product.price}</span>
                    <button onClick={() => addToCart(product)} style={{ background: primaryGreen, color: "#fff", border: "none", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#0D47A1";
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}>
                      <ShoppingCart size={22} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: lightGreen, padding: "100px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.8rem", fontWeight: "900", color: primaryGreen, marginBottom: "60px", textAlign: "center" }}>Why Lebu Seedlings?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {reasons.map((reason, i) => (
              <div key={i} style={{
                background: "#fff",
                padding: "32px",
                borderRadius: "12px",
                border: "2px solid transparent",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentGreen;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <Check size={24} color={accentGreen} />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: primaryGreen, margin: "0" }}>{reason.title}</h4>
                </div>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", margin: "0" }}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: `linear-gradient(135deg, ${primaryGreen} 0%, ${accentGreen} 100%)`, padding: "80px 24px", textAlign: "center", color: "#fff" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "16px" }}>Ready to Start Growing?</h2>
        <p style={{ fontSize: "1.05rem", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>Join thousands of gardeners who've transformed their spaces with GreenHouse Seedlings</p>
        <button style={{
          background: "#fff",
          color: primaryGreen,
          border: "none",
          padding: "16px 48px",
          fontSize: "1.05rem",
          fontWeight: "700",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}>
          Shop Now
        </button>
      </section>

      {/* NOTIFICATION */}
      {showNotif && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: accentGreen,
          color: "#fff",
          padding: "16px 24px",
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          animation: "slideIn 0.3s ease",
          zIndex: 1000,
        }}>
          ✓ {notifMsg}
        </div>
      )}
    </div>
  );
}
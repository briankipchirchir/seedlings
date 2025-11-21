import React, { useState } from "react";
import { ShoppingCart, Heart, Leaf } from "lucide-react";
import Kales from "../assets/Kales.jpeg";
import Kales2 from "../assets/kales2.jpeg";


export default function HomePage() {
  const [favorites, setFavorites] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [showNotif, setShowNotif] = useState(false);
  const [notifMsg, setNotifMsg] = useState("");

  const primaryGreen = "#2E7D32";
  const lightGreen = "#A5D6A7";

  const products = [
    {
      id: 1,
      name: "Cherry Tomato",
      price: "$3.99",
      category: "Vegetables",
      image: "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
    {
      id: 2,
      name: "Fresh Basil",
      price: "$2.99",
      category: "Herbs",
      image: "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
    {
      id: 3,
      name: "Bell Pepper",
      price: "$4.49",
      category: "Vegetables",
      image: "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
    {
      id: 4,
      name: "Marigold",
      price: "$2.49",
      category: "Ornamental",
      image: "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
    {
      id: 5,
      name: "Fresh Mint",
      price: "$2.99",
      category: "Herbs",
      image: "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
    {
      id: 6,
      name: "Cucumber",
      price: "$3.99",
      category: "Vegetables",
      image: "https://media.istockphoto.com/id/670157616/photo/symmetrical-overview-of-lots-of-small-chrysanthemum-cuttings-in-long-rows.jpg?s=612x612&w=0&k=20&c=x2OAKMZx_016N7JDdQY3UZSwXEVr8zXnB2Y1D5dSX2w=",
    },
  ];

  const features = [
    {
      icon: "🌱",
      title: "Organic Seedlings",
      desc: "Grown naturally without chemicals to ensure healthy and sustainable growth.",
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Practices",
      desc: "Biodegradable pots and responsible soil management for a healthier planet.",
    },
    {
      icon: "💚",
      title: "Expert Care",
      desc: "Seedlings nurtured under optimal greenhouse conditions by experienced growers.",
    },
  ];

  const reasons = [
    {
      title: "Locally Grown & Pesticide-Free",
      desc: "Healthy plants that are safe for your home and environment.",
    },
    {
      title: "Affordable & Delivered",
      desc: "Competitive prices and doorstep delivery for convenience.",
    },
    {
      title: "Wide Variety",
      desc: "Vegetables, herbs and ornamentals to suit any garden.",
    },
    {
      title: "Trusted Nationwide",
      desc: "Gardeners across the country rely on our consistent quality.",
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setNotifMsg(`${product.name} added to cart!`);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 3000);
  };

  const ReasonCard = ({ title, desc }) => (
    <div
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(8px)",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        border: "1px solid rgba(255,255,255,0.3)",
        transition: "all 0.28s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${primaryGreen}, ${lightGreen})`,
          color: "#fff",
          fontSize: "28px",
          marginBottom: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        🌱
      </div>
      <h4
        style={{
          fontWeight: "800",
          color: primaryGreen,
          fontSize: "1rem",
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h4>
      <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5", margin: "0" }}>
        {desc}
      </p>
    </div>
  );

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#F8F7F2" }}>
     

   <section
  style={{
    padding: "100px 24px",
    background: "linear-gradient(to bottom, #F8F7F2, #FFFFFF)"
  }}
>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "32px",
        alignItems: "stretch"
      }}
    >
      {/* Left Content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            color: primaryGreen,
            lineHeight: "1.1",
            letterSpacing: "-0.5px",
            margin: "0 0 16px 0"
          }}
        >
          Grow your garden <br /> the natural way 🌱
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "#666",
            lineHeight: "1.7",
            marginBottom: "28px"
          }}
        >
          Premium, eco-friendly seedlings nurtured by experts — 
          ready to transform your garden into a thriving green haven.
        </p>

        <button
          style={{
            background: primaryGreen,
            color: "#fff",
            border: "none",
            padding: "14px 36px",
            fontSize: "1rem",
            fontWeight: "700",
            borderRadius: "40px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "fit-content",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#256428";
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.18)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = primaryGreen;
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
          }}
        >
          Shop Seedlings
        </button>
      </div>

      {/* Middle Image */}
      <div
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 18px 60px rgba(0,0,0,0.12)",
          transition: "transform 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 25px 80px rgba(0,0,0,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 18px 60px rgba(0,0,0,0.12)";
        }}
      >
        <img
          src={Kales}
          alt="greenhouse seedlings"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            minHeight: "340px",
            transition: "transform 0.3s ease"
          }}
        />
      </div>

      {/* Right Image */}
      <div
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 18px 60px rgba(0,0,0,0.12)",
          transition: "transform 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 25px 80px rgba(0,0,0,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 18px 60px rgba(0,0,0,0.12)";
        }}
      >
        <img
          src={Kales2}
          alt="organic vegetables"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            minHeight: "340px",
            transition: "transform 0.3s ease"
          }}
        />
      </div>
    </div>
  </div>
</section>


      {/* HIGHLIGHT STRIP */}
      <section style={{ padding: "0 24px", maxWidth: "1400px", margin: "32px auto" }}>
        <div
          style={{
            background: primaryGreen,
            color: "#fff",
            padding: "16px 24px",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "0.95rem",
          }}
        >
          🌱 Premium Quality • 🚚 Nationwide Delivery • 🌿 Sustainable Farming • 💧 Healthy Growth Guaranteed
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: "60px 24px", maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Text */}
          <div>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                color: primaryGreen,
                margin: "0 0 16px 0",
              }}
            >
              Why our seedlings stand out
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              We combine sustainability, science-backed growing methods, and hands-on care to deliver seedlings that arrive healthy and ready to thrive.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              Organic practices, gentle handling, and consistent quality control mean you get robust, transplant-ready seedlings every time.
            </p>
          </div>

          {/* Right Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(8px)",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  transition: "all 0.28s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${primaryGreen}, ${lightGreen})`,
                    color: "#fff",
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  {feature.icon}
                </div>
                <h4 style={{ fontWeight: "700", color: primaryGreen, margin: "0 0 8px 0" }}>
                  {feature.title}
                </h4>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5", margin: "0" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* GALLERY SECTION */}
<section
  style={{
    padding: "80px 24px",
    background: "linear-gradient(180deg, #f1f8f4 0%, #ffffff 100%)",
  }}
>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    {/* Heading */}
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "800",
        color: primaryGreen,
        textAlign: "center",
        margin: "0 0 8px 0",
        lineHeight: 1.2,
        letterSpacing: "0.5px",
        borderBottom: "3px solid rgba(46,125,50,0.2)",
        paddingBottom: "8px",
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Our Premium Collection
    </h2>

    <p
      style={{
        maxWidth: "600px",
        margin: "16px auto 48px",
        color: "rgba(0,0,0,0.65)",
        fontSize: "1rem",
        lineHeight: "1.6",
        textAlign: "center",
      }}
    >
      Browse our carefully selected seedlings — all grown sustainably and ready to thrive in your garden
    </p>

    {/* Products Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
          }}
        >
          {/* Image Container */}
          <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />

            {/* Category Badge */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "rgba(46,125,50,0.9)",
                color: "#fff",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "uppercase",
                backdropFilter: "blur(4px)",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              }}
            >
              {product.category}
            </div>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(product.id)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(255,255,255,0.9)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Heart
                size={20}
                fill={favorites[product.id] ? "#e53935" : "none"}
                stroke={favorites[product.id] ? "#e53935" : primaryGreen}
              />
            </button>
          </div>

          {/* Product Details */}
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              minHeight: "150px",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: primaryGreen,
                marginBottom: "12px",
              }}
            >
              {product.name}
            </h3>

            <div style={{ flex: 1 }} />

            {/* Price and Add to Cart */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "16px",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  color: primaryGreen,
                }}
              >
                {product.price}
              </span>

              <button
                onClick={() => addToCart(product)}
                style={{
                  background: primaryGreen,
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#256428";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = primaryGreen;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <ShoppingCart size={22} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* WHY CHOOSE US SECTION */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(180deg, rgba(230,245,234,0.6) 0%, transparent 100%)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Text */}
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  color: primaryGreen,
                  margin: "0 0 16px 0",
                }}
              >
                Why choose GreenHouse Seedlings
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                Gardeners nationwide choose us for reliable quality, value and sustainability. We make it simple to get started and succeed with plants.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#666",
                }}
              >
                Quick delivery, friendly support, and a selection that fits every climate and skill level.
              </p>
            </div>

            {/* Right Reasons Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {reasons.map((reason, i) => (
                <ReasonCard key={i} title={reason.title} desc={reason.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "800",
            color: primaryGreen,
            margin: "0 0 16px 0",
          }}
        >
          Ready to grow your garden?
        </h2>
        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 32px",
            color: "#666",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          Browse our catalog of healthy, sustainable seedlings — or contact us for bulk orders and custom recommendations.
        </p>
        <button
          style={{
            background: primaryGreen,
            color: "#fff",
            border: "none",
            padding: "16px 40px",
            fontSize: "1rem",
            fontWeight: "700",
            borderRadius: "40px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#256428";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = primaryGreen;
            e.target.style.transform = "scale(1)";
          }}
        >
          Shop All Seedlings
        </button>
      </section>

    
          </div>
)};
export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <section style={{
        background: "var(--jetset-blue)",
        color: "var(--jetset-white)",
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Jetset Competitions
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Win your dream holiday. Luxury travel prizes. Life-changing experiences.
        </p>
        <a href="#competition" style={{
          background: "var(--jetset-gold)",
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: "bold",
          display: "inline-block"
        }}>
          Enter Now
        </a>
      </section>
    </main>
  );
}


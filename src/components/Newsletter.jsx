function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>

      <p>Subscribe for coding tips and contest updates.</p>

      <input
        className="newsletter-input"
        type="email"
        placeholder="Enter your email"
      />

      <button>Subscribe</button>
    </section>
  );
}

export default Newsletter;
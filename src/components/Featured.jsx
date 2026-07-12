function Featured() {
  return (
    <section className="featured">
      <h2>Featured Challenges</h2>

      <div className="featured-grid">

        <div className="challenge-card">
          <h3>Two Sum</h3>
          <p>Solve the classic array problem.</p>
          <button>Easy</button>
        </div>

        <div className="challenge-card">
          <h3>Binary Tree Traversal</h3>
          <p>Practice tree traversal algorithms.</p>
          <button>Medium</button>
        </div>

        <div className="challenge-card">
          <h3>Graph Shortest Path</h3>
          <p>Find the shortest path using graphs.</p>
          <button>Hard</button>
        </div>

      </div>
    </section>
  );
}

export default Featured;
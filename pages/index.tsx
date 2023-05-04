import HilbertThreeRenderer from "../components/hilbertThreeRenderer";

function HomePage() {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <HilbertThreeRenderer
        initN={3}
        initP={2}
        initPipeThickness={0.2}
        initGeometryType={"square"}
      />
    </div>
  );
}

export default HomePage;

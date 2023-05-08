import HilbertThreeRenderer from "../components/HilbertThreeRenderer";

function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center bg-black max-w-screen">
      <p className="text-white text-center">Hi, I'm Ben</p>
      <HilbertThreeRenderer
        initN={3}
        initP={2}
        initPipeThickness={0.2}
        initGeometryType={"square"}
        isControlEnabled={false}
      />
    </div>
  );
}

export default HomePage;

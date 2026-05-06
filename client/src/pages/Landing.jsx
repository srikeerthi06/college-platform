import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>

      <div className="relative z-10">

        {/* HERO */}
        <div className="text-center px-6 pt-28">

          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            College Finder
          </h1>

          <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A smart platform to explore colleges, compare institutions,
            analyze placements and predict the best colleges based on your rank.
          </p>

          {/* Enter App */}
          <button
            onClick={() => navigate("/")}
            className="mt-12 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl"
          >
            🚀 Enter App
          </button>

        </div>

        {/* FEATURES */}
       <div className="max-w-6xl mx-auto px-6 mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition">

            <div className="text-5xl mb-5">🔍</div>

            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Smart Search
            </h2>

            <p className="text-gray-400">
              Search and filter colleges with fast and interactive UI.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition">

            <div className="text-5xl mb-5">⚖️</div>

            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Compare Colleges
            </h2>

            <p className="text-gray-400">
              Compare fees, ratings and placements side-by-side easily.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition">

            <div className="text-5xl mb-5">🧠</div>

            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Predictor Tool
            </h2>

            <p className="text-gray-400">
              Predict suitable colleges based on your exam rank.
            </p>

          </div>
          {/* Card 4 */}
<div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition">

  <div className="text-5xl mb-5">🏫</div>

  <h2 className="text-2xl font-bold text-green-400 mb-4">
    College Details
  </h2>

  <p className="text-gray-400">
    Explore detailed college information including courses, placements and reviews.
  </p>

</div>

        </div>

      </div>
    </div>
  );
}

export default Landing;

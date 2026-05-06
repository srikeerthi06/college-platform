import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Home() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
  fetch("https://college-backend-q4n4.onrender.com/colleges")
    .then((res) => res.json())
    .then((data) => {
  console.log("API DATA:", data);
  alert(JSON.stringify(data));
  setColleges(data);
})
    .catch((err) => console.error(err));
}, []);

  // 🔥 Compare logic
  const handleCompare = (college) => {
    if (selected.find((c) => c.id === college.id)) {
      setSelected(selected.filter((c) => c.id !== college.id));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, college]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* 🔥 HERO SECTION */}
      <div className="relative overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>

        <div className="relative z-10 text-center py-20 px-6">

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🎓 College Finder
          </h1>

          <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
            Discover, compare and predict the best colleges for your future.
          </p>

          {/* 🔮 Predictor Button */}
          <button
            onClick={() => navigate("/predictor")}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition duration-300 shadow-lg"
          >
            🔮 Open Predictor
          </button>

        </div>
      </div>

      {/* 🔍 SEARCH + SORT */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-4">

            {/* Search */}
            <input
              type="text"
              placeholder="🔍 Search colleges..."
              className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Sort */}
            <select
              className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 text-white focus:outline-none"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="fees">Fees Low → High</option>
              <option value="rating">Rating High → Low</option>
              <option value="placement">Placement High → Low</option>
            </select>

          </div>
        </div>
      </div>

      {/* 📊 COMPARE SECTION */}
      {selected.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h2 className="text-2xl font-bold mb-6">
              📊 Compare Colleges
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              {selected.map((c) => (
                <div
                  key={c.id}
                  className="bg-black/30 border border-white/10 rounded-2xl p-5"
                >
                  <h3 className="text-xl font-bold text-blue-400">
                    {c.name}
                  </h3>

                  <div className="mt-4 space-y-2 text-gray-300">
                    <p>📍 {c.location}</p>
                    <p>💰 ₹{c.fees}</p>
                    <p>⭐ {c.rating}</p>
                    <p>📊 {c.placement}%</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* 🎓 COLLEGE CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {colleges
          .filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === "fees") return a.fees - b.fees;
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "placement") return b.placement - a.placement;
            return 0;
          })
          .map((c) => (
            <div
              key={c.id}
              onClick={() => navigate(`/college/${c.id}`)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 hover:border-blue-500 transition duration-300 cursor-pointer"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Compare Checkbox */}
              <input
                type="checkbox"
                className="absolute top-5 right-5 w-5 h-5"
                onClick={(e) => e.stopPropagation()}
                onChange={() => handleCompare(c)}
              />

              <div className="relative z-10">

                <h2 className="text-2xl font-bold text-blue-400">
                  {c.name}
                </h2>

                <p className="text-gray-400 mt-2">
                  📍 {c.location}
                </p>

                <div className="mt-6 space-y-3 text-gray-300">

                  <div className="flex justify-between">
                    <span>Fees</span>
                    <span>₹{c.fees}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Rating</span>
                    <span>{c.rating}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Placement</span>
                    <span>{c.placement}%</span>
                  </div>

                </div>

                {/* View Details */}
                <button className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">
                  View Details
                </button>

              </div>

            </div>
          ))}

      </div>

    </div>
  );
}

export default Home;

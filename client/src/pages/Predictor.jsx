import { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Predictor() {
  const navigate = useNavigate();
  const [rank, setRank] = useState("");
  const [colleges, setColleges] = useState([]);
  const [results, setResults] = useState([]);

  // Fetch colleges
  useEffect(() => {
    API.get("/colleges")
      .then((res) => {
        setColleges(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Predictor logic
  const handlePredict = () => {
    const r = Number(rank);

    let filtered = [];

    if (r <= 1000) {
      filtered = colleges.filter((c) => c.rating >= 4.7);
    } else if (r <= 5000) {
      filtered = colleges.filter((c) => c.rating >= 4.4);
    } else {
      filtered = colleges;
    }

    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
    <button
  onClick={() => navigate("/")}
  className="mb-6 px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
>
  ⬅ Back Home
</button>

      <h1 className="text-4xl font-bold text-center mb-8">
        🧠 College Predictor
      </h1>

      {/* Input */}
      <div className="flex justify-center gap-4 mb-10">
        <input
          type="number"
          placeholder="Enter JEE Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="p-3 rounded text-black w-72"
        />

        <button
          onClick={handlePredict}
          className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600"
        >
          Predict
        </button>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {results.map((c) => (
          <div
            key={c.id}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold text-blue-400">
              {c.name}
            </h2>

            <p className="mt-2">📍 {c.location}</p>
            <p>💰 ₹{c.fees}</p>
            <p>⭐ {c.rating}</p>
            <p>📊 {c.placement}%</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Predictor;

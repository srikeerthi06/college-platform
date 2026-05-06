import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //now added
import API from "../services/api";

function CollegeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();//now
  const [college, setCollege] = useState(null);

  useEffect(() => {
    API.get("/colleges")
      .then((res) => {
        const found = res.data.find((c) => String(c.id) === String(id));
        setCollege(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  // ✅ Safe parsing (handles both array & string)
  const courses = Array.isArray(college.courses)
    ? college.courses
    : JSON.parse(college.courses || "[]");

  const reviews = Array.isArray(college.reviews)
    ? college.reviews
    : JSON.parse(college.reviews || "[]");
 
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
     {/* ⬅ Back Button */}
    <button
      onClick={() => navigate("/")}
      className="mb-6 px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
    >
      ⬅ Back Home
    </button>

      <div className="max-w-4xl mx-auto">

        {/* 🔥 Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          {college.name}
        </h1>

        {/* 📌 Overview */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-md">
          <h2 className="text-xl font-semibold mb-3">📌 Overview</h2>
          <p>📍 Location: {college.location}</p>
          <p>💰 Fees: ₹{college.fees}</p>
          <p>⭐ Rating: {college.rating}</p>
          <p>📊 Placement: {college.placement}%</p>
        </div>

        {/* 🎓 Courses */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-md">
          <h2 className="text-xl font-semibold mb-3">🎓 Courses Offered</h2>
          <ul className="list-disc pl-6 space-y-1">
            {courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>

        {/* 📊 Placements */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6 shadow-md">
          <h2 className="text-xl font-semibold mb-3">📊 Placements</h2>
          <p>Placement Rate: {college.placement}%</p>
        </div>

        {/* 💬 Reviews */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-3">💬 Student Reviews</h2>
          <div className="space-y-2">
            {reviews.map((review, i) => (
              <p key={i}>⭐ {review}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CollegeDetail;

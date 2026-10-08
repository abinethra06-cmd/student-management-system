import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StudentProfile from "./StudentProfile";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <Header />

      <h2>Student Practice Tracker</h2>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name="Anu"
          department="CSE"
          year="3rd Year"
          practiceCount={practiceCount}
          setPracticeCount={setPracticeCount}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
import { useEffect } from "react";

function StudentProfile({
  name,
  department,
  year,
  practiceCount,
  setPracticeCount
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div>
      <h3>Student Profile</h3>

      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>

      <h3>Practice Sessions: {practiceCount}</h3>

      <button onClick={() => setPracticeCount(practiceCount + 1)}>
        Complete Practice
      </button>

      <button onClick={() => setPracticeCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default StudentProfile;
import React, { useState } from "react";

export default function CalorieTracker() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");

  const [total, setTotal] = useState(null);
  const [remaining, setRemaining] = useState(null);

  const handleCalculate = () => {
    // Validation
    if (
      !name ||
      !goal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks
    ) {
      alert("Please fill out all fields!");
      return;
    }

    if (
      goal <= 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0
    ) {
      alert("Please enter only positive values!");
      return;
    }

    // Calculations
    const totalCalories =
      Number(breakfast) + Number(lunch) + Number(dinner) + Number(snacks);
    const remainingCalories = Number(goal) - totalCalories;

    setTotal(totalCalories);
    setRemaining(remainingCalories);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🍎 Calorie Tracker App</h2>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Daily Calorie Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Breakfast Calories"
          value={breakfast}
          onChange={(e) => setBreakfast(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Lunch Calories"
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Dinner Calories"
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Snacks Calories"
          value={snacks}
          onChange={(e) => setSnacks(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleCalculate} style={styles.button}>
          Calculate Calories
        </button>
      </div>

      {total !== null && remaining !== null && (
        <div style={styles.resultBox}>
          <h3>Result Summary</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Daily Goal:</b> {goal} kcal</p>
          <p><b>Total Consumed:</b> {total} kcal</p>
          <p
            style={{
              color: remaining < 0 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {remaining < 0
              ? `You exceeded your daily calorie goal by ${Math.abs(remaining)} kcal!`
              : `You are within your daily goal! Remaining: ${remaining} kcal`}
          </p>
        </div>
      )}
    </div>
  );
}

// Inline styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  resultBox: {
    marginTop: "30px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "300px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
  },
};

import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getSession, getLogs, getPoints, getBadges } from "../utils/storage";
import { Chart } from "chart.js/auto";

export default function Insights() {
  const nav = useNavigate();
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const [level, setLevel] = useState("Couch Potato 🥔");
  const [progress, setProgress] = useState(0);
  const sleepChartRef = useRef(null);
  const focusChartRef = useRef(null);

  useEffect(() => {
    if (!getSession()) {
      nav("/");
      return;
    }
    
    updateGamification();
    displayInsights();
  }, []);

  function updateGamification() {
    const pts = getPoints();
    const bdgs = getBadges();
    setPoints(pts);
    setBadges(bdgs);
    
    const lvl = pts < 50 
      ? "Couch Potato 🥔" 
      : pts < 200 
        ? "Rising Star ⭐" 
        : "Superhuman 💪";
    setLevel(lvl);
    setProgress(pts % 100);
  }

  function displayInsights() {
    const sleepLogs = getLogs("sleep");
    const focusLogs = getLogs("focus");

    // Sleep Insights & Chart
    setTimeout(() => {
      const sleepCanvas = document.getElementById("sleepChart");
      const sleepInsightsDiv = document.getElementById("sleepInsights");
      
      if (sleepCanvas && sleepInsightsDiv) {
        if (sleepLogs.length > 0) {
          const avgDuration = sleepLogs.reduce((sum, log) => sum + log.duration, 0) / sleepLogs.length;
          const avgQuality = sleepLogs.reduce((sum, log) => sum + log.quality, 0) / sleepLogs.length;
          
          sleepInsightsDiv.innerHTML = `<p>Avg Sleep: ${avgDuration.toFixed(2)} hrs | Quality: ${avgQuality.toFixed(1)}/10</p>`;
          
          // Destroy existing chart if any
          if (sleepChartRef.current) {
            sleepChartRef.current.destroy();
          }
          
          const sleepData = sleepLogs.map(log => log.duration);
          sleepChartRef.current = new Chart(sleepCanvas, {
            type: "line",
            data: {
              labels: sleepLogs.map((_, i) => `Day ${i + 1}`),
              datasets: [{
                label: "Sleep Hours",
                data: sleepData,
                borderColor: "#0277bd",
                backgroundColor: "rgba(2, 119, 189, 0.1)",
                tension: 0.4
              }]
            },
            options: {
              scales: {
                y: { beginAtZero: true }
              },
              responsive: true,
              maintainAspectRatio: true
            }
          });
        } else {
          sleepInsightsDiv.innerHTML = '<p>No sleeps yet—dream big!</p>';
        }
      }
    }, 100);

    // Focus Insights & Chart
    setTimeout(() => {
      const focusCanvas = document.getElementById("focusChart");
      const focusInsightsDiv = document.getElementById("focusInsights");
      
      if (focusCanvas && focusInsightsDiv) {
        if (focusLogs.length > 0) {
          const totalHours = focusLogs.reduce((sum, log) => sum + log.duration, 0);
          const avgProductivity = focusLogs.reduce((sum, log) => sum + log.productivity, 0) / focusLogs.length;
          
          focusInsightsDiv.innerHTML = `<p>Total Hours: ${totalHours.toFixed(2)} | Avg Productivity: ${avgProductivity.toFixed(1)}/10</p>`;
          
          // Destroy existing chart if any
          if (focusChartRef.current) {
            focusChartRef.current.destroy();
          }
          
          const focusData = focusLogs.map(log => log.productivity);
          focusChartRef.current = new Chart(focusCanvas, {
            type: "bar",
            data: {
              labels: focusLogs.map((_, i) => `Session ${i + 1}`),
              datasets: [{
                label: "Productivity",
                data: focusData,
                backgroundColor: "#4caf50",
                borderColor: "#388e3c",
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: { 
                  beginAtZero: true, 
                  max: 10 
                }
              },
              responsive: true,
              maintainAspectRatio: true
            }
          });
        } else {
          focusInsightsDiv.innerHTML = '<p>No focus logs—time to zone in!</p>';
        }
      }
    }, 100);

    // Suggestions
    setTimeout(() => {
      const suggestionsDiv = document.getElementById("suggestions");
      if (suggestionsDiv) {
        let suggestions = '<h2>Zen Tips & Laughs 😂</h2>';
        
        if (sleepLogs.length > 0) {
          const avgDuration = sleepLogs.reduce((sum, log) => sum + log.duration, 0) / sleepLogs.length;
          if (avgDuration < 7) {
            suggestions += '<p>Get 7+ hours: Even Einstein napped! Try counting sheep... or llamas for fun. 🦙</p>';
          }
        }
        
        if (focusLogs.length > 0) {
          const avgProductivity = focusLogs.reduce((sum, log) => sum + log.productivity, 0) / focusLogs.length;
          if (avgProductivity < 7) {
            suggestions += '<p>Boost focus: Ditch distractions—unless it\'s a funny cat video break. 🐱</p>';
          }
          if (focusLogs.some(log => log.environment.toLowerCase().includes("noise"))) {
            suggestions += '<p>Noisy? Earplugs or white noise: Pretend you\'re in a zen bubble. 🫧</p>';
          }
        }
        
        if (suggestions === '<h2>Zen Tips & Laughs 😂</h2>') {
          suggestions += '<p>Log more for custom giggles and tips!</p>';
        }
        
        suggestionsDiv.innerHTML = suggestions;
      }
    }, 100);
  }

  function logout() {
    localStorage.removeItem("session");
    nav("/");
  }

  return (
    <div className="container fade-in">
      <h1>Your Zen Insights 🧠</h1>
      <button onClick={logout}>Logout</button>
      
      <div id="gamification">
        <p>
          Zen Points: <span id="points">{points}</span> | Level: <span id="level">{level}</span>
        </p>
        <progress id="progress" value={progress} max="100"></progress>
        <div id="badges">
          {badges.length > 0 ? (
            <>
              <h3>Badges 🎖️</h3>
              {badges.map((badge, i) => (
                <span key={i} className="chip">{badge}</span>
              ))}
            </>
          ) : (
            <p>Earn your first badge by logging!</p>
          )}
        </div>
      </div>

      <h2>Sleep Insights 😴</h2>
      <canvas id="sleepChart" width="400" height="200"></canvas>
      <div id="sleepInsights"></div>

      <h2>Focus Insights 🔥</h2>
      <canvas id="focusChart" width="400" height="200"></canvas>
      <div id="focusInsights"></div>

      <div id="suggestions"></div>

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}
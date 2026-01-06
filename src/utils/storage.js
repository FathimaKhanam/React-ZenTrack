// ===== Storage =====
export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
export function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
export function getSession() {
  return localStorage.getItem("session");
}
export function setSession(email) {
  localStorage.setItem("session", email);
}
export function clearSession() {
  localStorage.removeItem("session");
}
export function getLogs(type) {
  const user = getSession();
  return JSON.parse(localStorage.getItem(`${user}_${type}_logs`)) || [];
}
export function setLogs(type, logs) {
  const user = getSession();
  localStorage.setItem(`${user}_${type}_logs`, JSON.stringify(logs));
}
export function getPoints() {
  const user = getSession();
  return parseInt(localStorage.getItem(`${user}_points`)) || 0;
}
export function setPoints(p) {
  const user = getSession();
  localStorage.setItem(`${user}_points`, p);
}
export function getBadges() {
  const user = getSession();
  return JSON.parse(localStorage.getItem(`${user}_badges`)) || [];
}
export function setBadges(b) {
  const user = getSession();
  localStorage.setItem(`${user}_badges`, JSON.stringify(b));
}

// ===== LOGIC (merged here) =====

export function checkBadges(type, duration, score) {
  const badges = getBadges();

  if (type === "sleep" && duration >= 8 && score >= 8 && !badges.includes("Sleep Ninja 🥷")) {
    badges.push("Sleep Ninja 🥷");
    alert("Badge Unlocked: Sleep Ninja!");
  }

  if (type === "focus" && duration >= 2 && score >= 9 && !badges.includes("Focus Wizard 🧙")) {
    badges.push("Focus Wizard 🧙");
    alert("Badge Unlocked: Focus Wizard!");
  }

  setBadges(badges);
}

export function addPoints(amount) {
  let p = getPoints();
  p += amount;
  setPoints(p);
}

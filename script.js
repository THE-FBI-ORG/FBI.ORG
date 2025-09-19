document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const result = await response.json();
  const resultEl = document.getElementById("result");

  if (result.success) {
    resultEl.textContent = "✅ Login successful!";
    resultEl.style.color = "green";
    // redirect after login
    window.location.href = "/dashboard.html"; 
  } else {
    resultEl.textContent = "❌ Wrong password!";
    resultEl.style.color = "red";
  }
});

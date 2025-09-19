document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;

  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  const data = await response.json();

  if (data.success) {
    // ✅ Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("result").innerText = "❌ Wrong password!";
    document.getElementById("result").style.color = "red";
  }
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const { password } = req.body;

    if (password === process.env.ADMIN_PASSWORD) {
      res.status(200).json({ message: "✅ Access granted. Welcome, Admin." });
    } else {
      res.status(401).json({ message: "❌ Invalid password" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

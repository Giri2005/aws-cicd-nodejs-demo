const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CI/CD Demo Login</title>
  <style>
    body { font-family: Arial, sans-serif; background:#f3f6fb; margin:0; min-height:100vh; display:grid; place-items:center; }
    .card { background:white; width:min(360px, calc(100% - 48px)); padding:30px; border-radius:14px; box-shadow:0 10px 35px #15294b18; }
    h1 { margin-top:0; color:#17365d; }
    p { color:#526174; line-height:1.5; }
    label { display:block; margin:14px 0 6px; color:#27364b; }
    input { box-sizing:border-box; width:100%; padding:11px; border:1px solid #cbd5e1; border-radius:7px; }
    button { margin-top:18px; width:100%; padding:12px; border:0; border-radius:7px; background:#1769aa; color:white; font-weight:bold; cursor:pointer; }
    .tag { display:inline-block; background:#e5f3ff; color:#145b91; padding:6px 9px; border-radius:20px; font-size:12px; }
    footer { margin-top:20px; font-size:12px; color:#758195; }
  </style>
</head>
<body>
  <main class="card">
    <span class="tag">AWS CI/CD Demo Project</span>
    <h1>Welcome to My CI/CD Project</h1>
    <p>This Node.js login page is deployed automatically using GitHub, AWS CodePipeline, CodeBuild and Elastic Beanstalk.</p>
    <form method="POST" action="/login">
      <label for="username">Username</label>
      <input id="username" name="username" placeholder="Enter username" required>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" placeholder="Enter password" required>
      <button type="submit">Sign In</button>
    </form>
    <footer>Demo interface only — do not enter real credentials.</footer>
  </main>
</body>
</html>`);
});

app.post("/login", (req, res) => {
  const username = String(req.body.username || "").replace(/[<>&"]/g, "");
  res.send(`<!doctype html><html><head><meta charset="utf-8"><title>Demo Result</title></head>
  <body style="font-family:Arial,sans-serif;max-width:600px;margin:60px auto;padding:20px">
  <h1>Demo form submitted</h1><p>Hello, ${username || "user"}.</p>
  <p>This is only a demonstration page; no real authentication is configured.</p>
  <a href="/">Back to login page</a></body></html>`);
});

app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Demo app listening on port ${PORT}`);
});

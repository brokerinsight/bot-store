module.exports = (req, res) => {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return res.status(500).json({ error: "GitHub token not configured" });
  }
  res.status(200).json({ token: githubToken });
};

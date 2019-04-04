module.exports = {
  apps: [{
    name: "pm2-test",
    script: "./app.js",
    kill_timeout: 160000,
  }]
}

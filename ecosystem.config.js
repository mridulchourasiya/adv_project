export const apps = [
  {
    name: "qstash-dev",
    script: "cmd",
    args: "/c npx @upstash/qstash-cli dev",
    watch: false,
    autorestart: true,

    env: {
      NODE_ENV: "production",
      QSTASH_URL: "https://qstash.upstash.io",
    },
  },
  {
    name: "my-backend-app",
    script: "./app.js", // Replace with your main file
    watch: false,
    autorestart: true,
    env: {
      PORT: 5500, // Your app port
      NODE_ENV: "development",
      QSTASH_URL: "http://127.0.0.1:8080", // Local QStash URL for development
      QSTASH_TOKEN:
        "eyJVc2VySUQiOiJkZWZhdWx0VXNlciIsIlBhc3N3b3JkIjoiZGVmYXVsdFBhc3N3b3JkIn0=",
    },
  },
];

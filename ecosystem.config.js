module.exports = {
  apps: [
    {
      name: "Chef-Choice",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 5003,
      },
      watch: false,
      autorestart: true,
      max_memory_restart: "500M",
    },
  ],
};

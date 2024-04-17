import { defineConfig, loadEnv } from 'vite';

// The configuration function should return the configuration object
export default ({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    // You can use the loaded environment variables in your config
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3001', // Example usage
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
      hmr: {
        clientPort: 443,
      },
    },
  });
};

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { codecovVitePlugin } from "@codecov/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    codecovVitePlugin({
      // Ensure this is set to true for bundle analysis
      dryRun: true,
      enableBundleAnalysis: true,
      bundleName: "ba-test-app-bundle",
      apiUrl: "http://localhost:8000",
      uploadToken: "230d537c-d1ed-426f-afe8-61f62f73d015",
    }),
  ],
  
});

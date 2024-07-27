import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
    globals: true,
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'dist/', 'coverage/', 'vite.config.js'],
      include: ['src/'],
    }
  },
});

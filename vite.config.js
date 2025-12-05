import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // ⬇️ IMPORTANT: change this to your actual repo name
    base: "/danielproject/",
});

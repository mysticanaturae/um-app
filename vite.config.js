import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        portal: "portal.html",
        dashboard: "dashboard.html",
        member: "member.html",
        account: "account.html",
        login: "login.html"
      }
    }
  }
});
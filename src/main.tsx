import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializePerformanceOptimizations } from "./utils/performance";

// Register Service Worker for PWA capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "[PWA] Service Worker registered successfully:",
          registration.scope
        );

        // Handle updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // New version available - could show update prompt
                console.log("[PWA] New version available");
              }
            });
          }
        });
      })
      .catch((error) => {
        console.log("[PWA] Service Worker registration failed:", error);
      });
  });
}

// Handle PWA install prompt
let deferredPrompt: any;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Update UI to notify the user they can install the PWA
  console.log("[PWA] Install prompt available");
});

// Handle app installed
window.addEventListener("appinstalled", () => {
  console.log("[PWA] App installed successfully");
  deferredPrompt = null;
});

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Initialize performance optimizations after app is rendered
initializePerformanceOptimizations();

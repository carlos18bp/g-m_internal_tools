import './style.css'; // Import global CSS styles
import axios from 'axios'; // Import Axios for HTTP requests
import App from './App.vue'; // Import the main App component
import router from './router'; // Import the router configuration
import { createApp } from 'vue'; // Import createApp from Vue
import { createPinia } from 'pinia'; // Import createPinia for state management
import { useAuthStore } from '@/stores/auth'; // Import the authentication store
import vue3GoogleLogin from 'vue3-google-login'; // Import the Google Login plugin
import { registerSW } from 'virtual:pwa-register'; // Import th registerSm Plugin for PWA app

const initializeApp = () => {
  const app = createApp(App); // Create a new Vue application instance

  app.use(router); // Use the router instance in the app
  app.use(createPinia()); // Use Pinia for state management in the app

  const authStore = useAuthStore(); // Get the authentication store instance

  // Set the default authorization header for Axios if a token is present
  if (authStore.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.token}`;
  }

  // Use the Google Login plugin with the specified client ID
  app.use(vue3GoogleLogin, {
    clientId: '621763410900-g175cq3vdrscb9v6tvr9f2qfr17aem02.apps.googleusercontent.com'
  });

  app.mount('#app'); // Mount the Vue app to the DOM element with id 'app'

  const updateSW = registerSW({
    onNeedRefresh() {
      // Call to updateSW(true) aplied the new version
      updateSW(true);
    },
    onOfflineReady() {
      console.log('Application ready for offline use');
    },
  });
};

// Initialize and configure the app
initializeApp();

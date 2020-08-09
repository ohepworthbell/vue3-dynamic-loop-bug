import {createApp} from 'vue';
import App from './App.vue';
import {store} from './store/state';

// Create
let app = createApp(App);

// Add store
app.use(store);

// Mount
app.mount('#app');

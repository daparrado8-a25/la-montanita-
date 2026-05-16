import { createRoot } from 'react-dom/client';
import 'leaflet/dist/leaflet.css';
import './styles/main.css';
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(<App />);

/* @refresh reload */
import { render } from 'solid-js/web';

import  './components/Table'; // Ensure the component is imported
import  './components/Row.tsx'; // Ensure the component is imported

import './index.css';
import App from './App.tsx'; 



const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root!);
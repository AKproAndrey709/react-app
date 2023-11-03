import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { getUser, getUsers } from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		{/* 		<React.StrictMode>
 */}			<App function={{ key_getUser: getUser, key_getUsers: getUsers }} />
		{/* 		</React.StrictMode>
 */}	</BrowserRouter>
);

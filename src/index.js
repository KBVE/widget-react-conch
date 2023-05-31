import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//document.body.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);


const widgetRoots = document.querySelectorAll('.widget_react_conch');


widgetRoots.forEach(Div => {
  ReactDOM.createRoot(Div).render(
  <React.StrictMode>
        <App kbve_dom_element={Div} key={Div} />
  </React.StrictMode>
  );
});



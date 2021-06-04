import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./storeContext";


let rerenderEntireTree = () => {
//не работает в этом случае
    ReactDOM.render(
        /*<React.StrictMode>
                    <ProviderLink store={store}>
                        <App/>
                    </ProviderLink>
                </React.StrictMode>,*/


        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {

    rerenderEntireTree();
});

reportWebVitals();

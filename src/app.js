import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

store.dispatch(addExpense({description: "water bill", amount: 4500, createdAt: Date.now()}));
store.dispatch(addExpense({description: "gas bill", createdAt: Date.now()}));
store.dispatch(addExpense({description: "rent", amount: 10950, createdAt: Date.now()}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
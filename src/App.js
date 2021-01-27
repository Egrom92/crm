import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Table from './Table/Table';
import NewOrder from './NewOrder/NewOrder';
import EditOrder from './EditOrder/EditOrder';
import {Route, NavLink} from 'react-router-dom';
import HttpClient from './HttpClient'

const LIMIT = 2;

const hc = new HttpClient({
    protocol: "https",
    host: "school.constcode.ru",
    port: "3500",
    url: "/posts",
    query: {
        key: "0001fjaiushedfaipu",
        _limit: LIMIT
    }
})

const orderTableHeaders = [
    {
        label: '',
        field: 'ID'
    },
    {
        label: 'ИФО',
        field: 'client'
    },
    {
        label: 'Заказ',
        field: 'name'
    },
    {
        label: 'Сумма',
        field: 'price'
    },
    {
        label: 'Статус',
        field: 'status'
    },
    {
        label: 'Действия',
        field: 'action'
    },
    {
        label: 'Дата / Время',
        field: 'dateTime'
    }
];

const modes = [
    {
        name: 'Все заказыa',
        className: 'btn-outline-info'
    },
    {
        name: 'Новые',
        value: 'new',
        className: 'btn-outline-primary'
    },
    {
        name: 'На исполнение',
        className: 'btn-outline-warning'
    },
    {
        name: 'Возврат',
        className: 'btn-outline-danger'
    },
    {
        name: 'Заархивированные',
        className: 'btn-outline-dark'
    },
]

const products = [
    {
        name: 'Бумага для принтера',
        value: 'Paper for printer',
        price: 510
    },
    {
        name: 'Фотоальбом',
        value: 'Photo album',
        price: 1400
    },
    {
        name: 'Краски для принетра',
        value: 'Printer paints',
        price: 2100
    },
    {
        name: 'Полимерная ванна',
        value: 'Polymer bath',
        price: 785
    },
    {
        name: 'Фотоальбом',
        value: 'Photo album',
        price: 1400
    }
]

function App() {

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        hc.getAndCount("/posts", { _page: page }).then(({ count, rows }) => {
            setOrders(rows);
            setCount(count);
        });
    }, [page]);

    const addNewOrder = async (values) => {

        await hc.post('/posts', values);
        const orderList = await hc.get("/posts", { _page: page })
        setOrders(orderList)
    };

    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/edit">Edit</NavLink>
                    </li>
                </ul>
            </nav>
            <Route path='/' exact render={() => <h1>Home Page</h1>} />
            <Route path='/about' exact render={() => <h1>About Page</h1>} />
            <div className="container-fluid">
                <div className="row">

                    <Nav
                        hc={hc}
                        modes={modes}
                        setOrders={setOrders}
                    />
                    <Table
                        hc={hc}
                        setOrders={setOrders}
                        orders={orders}
                        orderTableHeaders={orderTableHeaders}
                        pageSelect={setPage}
                        page={page}
                        pages={Math.ceil(count / LIMIT)}
                    />
                    <Route path='/edit' exact component={EditOrder} />
                </div>
            </div>
            <Route path='/addOrder' exact component={NewOrder} />

            {/*<NewOrder*/}
            {/*    hc={hc}*/}
            {/*    products={products}*/}
            {/*    addNewOrder={addNewOrder}*/}
            {/*/>*/}
        </div>
    );
}

export default App;

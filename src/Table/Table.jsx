import React from 'react'
import OrderFilter from './OrderFilter/OrderFilter'
import Orders from './Orders/Orders';
import {NavLink} from 'react-router-dom';
import Pagination from './Pagination/Pagination';


export default function Table(props) {
    const {
        hc,
        setOrders,
        orderTableHeaders,
        orders,
        pageSelect,
        page,
        pages
    } = props;

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 d-flex flex-column">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    Заказы
                </h1>
                <NavLink to='/addOrder' className='btn btn-outline-success'>
                    Добавить заказ
                </NavLink>
            </div>

            <OrderFilter
                setOrders={setOrders}
            />

            <Orders
                orders={orders}
                orderTableHeaders={orderTableHeaders}
            />

            <Pagination
                pageSelect={pageSelect}
                page={page}
                pages={pages}
            />
        </main>
    )
}
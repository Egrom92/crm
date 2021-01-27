import React from 'react'

export default function OrderFilter(props) {
    const {setOrders, hc} = props

    const userSort = async (title, direction) => {
        const userList = await hc.get("/users", {
            _sort: title,
            _order: direction
        });

        setOrders(userList);
    };

    return (
        <div className="form-row p-2">
            <div className="form-group col">
                <label>ФИО:</label>
                <input className="form-control" type="text" placeholder="ФИО"/>
            </div>
            <div className="form-group col">
                <label>Заказ:</label>
                <select className="form-control">
                    <option defaultValue></option>
                    <option></option>
                </select>
            </div>
            <div className="form-group col">
                <label>Статус:</label>
                <select className="form-control">
                    <option defaultValue>Все</option>
                    <option>Новые</option>
                    <option>На исполнение</option>
                    <option>Возврат</option>
                    <option>Заархивированные</option>
                </select>
            </div>
            <div className="form-group col">
                <label>Сумма:</label>
                <input className="form-control mb-2" type="number" placeholder="От"/>
                <input className="form-control" type="number" placeholder="До"/>
            </div>
            <div className="form-group col">
                <label>Дата:</label>
                <input className="form-control mb-2" type="date"/>
                <input className="form-control" type="date"/>
            </div>
        </div>
    )
}
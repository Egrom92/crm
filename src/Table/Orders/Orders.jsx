import React from 'react'

const statusClass = {
    new: 'badge-primary',
    process: 'badge-warning',
    back: 'badge-danger',
    archived: 'badge-dark',
};

export default function Orders(props) {
    const {orderTableHeaders, orders} = props;
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    {orderTableHeaders.map((header, i) => (
                        <th key={i}>{header.label || header.field}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((order, i) => (
                        <tr key={i}>
                            {
                                orderTableHeaders.map((header, i ) => {
                                    const field = header.field.toLowerCase();
                                    const data = order[field];
                                    if (field === 'action') {
                                        return <td  key={i}><button className="btn btn-outline-primary btn-sm">Редактировать</button></td>
                                    }
                                    if (field === 'status') {
                                        return (
                                            <td key={i}>
                                                <div className={`badge ${statusClass[data]}`}>
                                                    {data}
                                                </div>
                                            </td>
                                        )
                                    }
                                    return <td key={i}>{data}</td>
                                })
                            }
                        </tr>
                    ))
                }






                {/*<tr>*/}
                {/*    <td>1</td>*/}
                {/*    <td>Максим Анатольевич</td>*/}
                {/*    <td>Фотоальбом</td>*/}
                {/*    <td>1400,00</td>*/}
                {/*    <td>*/}
                {/*        <div className="badge badge-primary">new</div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*        <button className="btn btn-outline-primary btn-sm">Редактировать</button>*/}
                {/*    </td>*/}
                {/*    <td>12.02.2019 14:30</td>*/}
                {/*</tr>*/}

                </tbody>
            </table>
        </div>
    )
}

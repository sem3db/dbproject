import React from 'react'

export default function ReportScreen(props) {
    return (
        <div className="">
            <h1>Reports</h1>
            <div className="report Button">
                <button
                type="button"
                className=""
                onClick={() =>
                    props.history.push(`/reports/report1`)
                }
                >
                Report 1 - Quarterly sales report
                </button><br/><br/>
                <button
                type="button"
                className=""
                onClick={() =>
                    props.history.push(`/reports/report2`)
                }
                >
                Report 2 - Products with most number of sales
                </button><br/><br/>
                <button
                type="button"
                className=""
                onClick={() =>
                    props.history.push(`/reports/report3`)
                }
                >
                Report 3 - Product category with most orders
                </button><br/><br/>
                <button
                type="button"
                className=""
                onClick={() =>
                    props.history.push(`/productlist`)
                }
                >
                Report 4 - most interest time period to a product
                </button><br/><br/>
                <button
                type="button"
                className=""
                onClick={() =>
                    props.history.push(`/reports/report5`)
                }
                >
                Report 5 - Order report
                </button><br/><br/>
            </div>
        </div>
    )
}

import React from 'react'

export default function ReportScreen(props) {
    return (
        <div className="admin">
            <h1>Reports</h1>
            <div>
                <button
                type="button"
                className="small"
                onClick={() =>
                    props.history.push(`/reports/report1`)
                }
                >
                Report 1
                </button>
                <button
                type="button"
                className="small"
                onClick={() =>
                    props.history.push(`/reports/report2`)
                }
                >
                Report 2
                </button>
                <button
                type="button"
                className="small"
                onClick={() =>
                    props.history.push(`/reports/report3`)
                }
                >
                Report 3
                </button>
                <button
                type="button"
                className="small"
                onClick={() =>
                    props.history.push(`/reports/report5`)
                }
                >
                Report 5
                </button>
            </div>
        </div>
    )
}

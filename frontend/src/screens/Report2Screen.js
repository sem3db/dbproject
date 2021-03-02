// - Products with most number of sales in a given period
import React, { useEffect, useState } from 'react'

export default function Report2Screen(props) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [submitted, setSubmitted] = useState('');
    // const [categories, setCategories] = useState('');
    // const [l, setL] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    useEffect(() => {
        if (submitted) {
        //   dispatch(listCategories());
        }
    }, [submitted, props.history]);

    return (
        <>
        <div className="">
            <h1>Report2 - Products with most number of sales</h1>
            <form className="form" onSubmit={submitHandler}>
            <div>
                <label htmlFor="from">From</label>
                <input
                id="from"
                type="date"
                placeholder="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
                ></input>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input
                id="to"
                type="date"
                placeholder="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                ></input>
            </div>
            <div>
                <label></label>
                <button className="primary" type="submit">
                Show
                </button>
            </div>
            </form>
            {submitted &&
            <div>
                <p>
                    TABLE
                </p>
            </div>
            }
        </div>
        </>
        );
}
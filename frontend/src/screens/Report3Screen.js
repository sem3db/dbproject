// - Product category with most orders
import React, { useEffect, useState } from 'react'

export default function Report3Screen(props) {
    const [submitted, setSubmitted] = useState('');

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
            <h1>Report3 - Product category with most orders</h1>
            <form className="form" onSubmit={submitHandler}>
            <div>
                <label></label>
                <button className="primary" type="submit">
                Show
                </button>
            </div>
            </form>
            {submitted &&
            <div>
                <h1>
                Product
                </h1>
            </div>
            }
        </div>
        </>
        );
}
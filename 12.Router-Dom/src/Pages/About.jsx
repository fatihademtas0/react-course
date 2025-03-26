import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <div>
                <h1>About</h1>
                <hr />
            </div>

            <div>
                <Link className='link' to='employee'>
                    About Employee
                </Link>
                <Link className='link' to='company'>
                    About Company
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default About;

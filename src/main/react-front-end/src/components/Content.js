import React from 'react';

function Content(props) {

console.log('content')

    return (
        <div id="main" className="main">
            <div className="pagetitle">
                <h1>Tabs</h1>
            </div>
            <section className='section dashboard'>
                <div className='row'>
                    {props.children}
                </div>
            </section>
        </div>
    );
}

export default Content;
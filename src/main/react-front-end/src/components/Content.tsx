import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{

}>

const Content = (prop :Props) => {

    console.log('content')

    return (
        <div id="main" className="main">
            <div className="pagetitle">
                <h1>Tabs</h1>
            </div>
            <section className='section dashboard'>
                <div className='row'>
                    {prop.children}
                </div>
            </section>
        </div>
    );
}

export default Content;
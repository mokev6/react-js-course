import React from 'react';

type Props = {
    idx: number
    removeFunction: (id: number) => void
}

function PrecedentCondition({ idx, removeFunction } : Props) {
    return (
        <div className='row g-3'>
            <div className="form-floating col-md-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="col-md-3">
                <button onClick={() => removeFunction(idx)}><i className="ri-delete-bin-6-fill"></i></button>
            </div>
        </div>        

    );
}

export default PrecedentCondition;
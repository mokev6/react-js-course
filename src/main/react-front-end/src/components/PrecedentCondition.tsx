import React from 'react';
import { PrecedentConditionType } from '../model/PrecedentConditionType';

type Props = {
    idx: number
    currentPc: PrecedentConditionType
    removeFunction: (id: number) => void
    updatePc: (idx: number, pc: PrecedentConditionType) => void
}

function PrecedentCondition({ idx, currentPc, removeFunction, updatePc } : Props) {

    const changePcEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const precedentConditionEmailUpdated : PrecedentConditionType = {... currentPc, name: event.target.value}
        updatePc(idx, precedentConditionEmailUpdated)
    }

    return (
        <div className='row g-3'>
            <div className="form-floating col-md-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={changePcEmailHandler} value={currentPc.name}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="col-md-3">
                <button onClick={() => removeFunction(idx)}><i className="ri-delete-bin-6-fill"></i></button>
            </div>
        </div>        

    );
}

export default PrecedentCondition;
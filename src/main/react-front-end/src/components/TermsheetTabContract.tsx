import { useSelector, useDispatch } from 'react-redux';
import { termsheetAction, RootState, AppDispatch } from '../store/index'
import PrecedentCondition from './PrecedentCondition';

function TermsheetTabContract() {

    const dispatch = useDispatch<AppDispatch>();
    const termsheet = useSelector((state:RootState) => state.termsheet);

    const addPrecedentConditionHandler = () => {
        dispatch(termsheetAction.addPrecedentcondition());
    }

    const removePrecedentConditionHandler = (id: number) => {
        dispatch(termsheetAction.removePrecedentCondition(id));
     }

    return (
        <>
            Contract
            <div className="row g-3">
                <button className="btn btn-outline-primary btn-sm" type='button' onClick={addPrecedentConditionHandler}>
                    <i className="ri-add-circle-fill"></i>
                </button>

                {
                    termsheet.precedentConditions.map((value, idx) => <PrecedentCondition key={idx} idx={idx} removeFunction={removePrecedentConditionHandler} />)
                }
            </div>
        </>
    );
}

export default TermsheetTabContract;
import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const scoreReducer = (score, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { value: score.value + 1 }
            case 'DECREMENT':
                return { value: score.value !== 0 ? score.value - 1 : score.value }
            default:
                return score;
        }
    }
    let [score, dispatchScore] = useReducer(scoreReducer, JSON.parse(localStorage.getItem('rps')) || {
        value: 0
    });

    useEffect(() => {
        localStorage.setItem('rps', JSON.stringify(score));
    }, [score])

    return (
        <DataContext.Provider value={
            { score, dispatchScore }
        }>
            {children}
        </DataContext.Provider>
    );
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default DataContext
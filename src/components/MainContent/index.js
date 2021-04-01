import React from 'react';
import Card from '../Card';
import Dropdown from '../Dropdown';
import { data } from '../../assets/data.json';
import './Main.scss';
import { connect } from 'react-redux';
import { setTypeView } from '../../redux/actions';

export function MainContent({ setView, typeView }) {

    const options = [
        { value: 'list', text: 'List' },
        { value: 'grid', text: 'Grid' },
    ]

    const onSelectChange = value => {
        setView(value);
    }

    return (
        <main role="main">
            <div className="main__rulings">
                <div className="rulings__header">
                    <div className="rulings__header-left">
                        <h2 className="rulings__header-title">Previous Rulings</h2>
                    </div>
                    <div className="rulings__header-right">
                        <Dropdown {...{ options, onSelectChange }} defaultValue={typeView} />
                    </div>
                </div>
                <div className="rulings__cards-container">
                    <ul className="rulings__cards" data-type-view={typeView} >
                        {data.map((item, index) => (
                            <li key={index} className="rulings__card">
                                <Card isGrid={typeView === "grid"} {...item} index={index} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main >
    )
}
const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    setView: (type) => dispatch(setTypeView(type)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent)
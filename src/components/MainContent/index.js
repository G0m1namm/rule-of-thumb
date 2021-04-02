import React from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';

import { setTypeView, updateVotes } from '../../redux/actions';
import Dropdown from '../Dropdown';

import './Main.scss';

//Lazy importing
const Card = loadable(() => import('../Card'));

export function MainContent({ setView, typeView, onVote, cardsData }) {

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
                        {cardsData.map((item, index) => (
                            <li key={index} className="rulings__card">
                                <Card key={`card-${index}`} onVote={onVote} isGrid={typeView === "grid"} {...item} index={index} />
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
    onVote: (id, option) => dispatch(updateVotes(id, option))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent)
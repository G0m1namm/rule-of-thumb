import React from 'react';
import Card from '../Card';
import Dropdown from '../Dropdown';
import { data } from '../../assets/data.json';
import './Main.scss';

export default function MainContent() {
    const options = [
        { value: 'list', text: 'List' },
        { value: 'grid', text: 'Grid' },
    ]

    return (
        <main role="main">
            <div className="main__rulings">
                <div className="rulings__header">
                    <div className="rulings__header-left">
                        <h2 className="rulings__header-title">Previous Rulings</h2>
                    </div>
                    <div className="rulings__header-right">
                        <Dropdown {...{ options }} defaultValue="List" />
                    </div>
                </div>
                <div className="rulings__cards-container">
                    <ul className="rulings__cards">
                        {data.map((item, index) => (
                            <li className="rulings__card">
                                <Card key={index} isGrid {...item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

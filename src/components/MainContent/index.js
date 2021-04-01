import React from 'react';
import Card from '../Card';
import Dropdown from '../Dropdown';
import { data } from '../../assets/data.json';
import './Main.scss';

export default function MainContent() {
    const defaultView = "grid";
    const [typeView, setTypeView] = React.useState(defaultView);

    const options = [
        { value: 'list', text: 'List' },
        { value: 'grid', text: 'Grid' },
    ]

    const onSelectChange = value => {
        setTypeView(value);
    }

    return (
        <main role="main">
            <div className="main__rulings">
                <div className="rulings__header">
                    <div className="rulings__header-left">
                        <h2 className="rulings__header-title">Previous Rulings</h2>
                    </div>
                    <div className="rulings__header-right">
                        <Dropdown {...{ options, onSelectChange }} defaultValue={defaultView} />
                    </div>
                </div>
                <div className="rulings__cards-container">
                    <ul className="rulings__cards" data-type-view={typeView} >
                        {data.map((item, index) => (
                            <li key={index} className="rulings__card">
                                <Card isGrid={typeView === "grid"} {...item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main >
    )
}

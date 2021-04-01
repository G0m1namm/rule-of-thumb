import React from 'react';
import './Dropdown.scss';

export default function Dropdown({ options, onSelectChange, defaultValue }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const defaultView = options.find(item => item.value === defaultValue)?.text;
    const [optionSelected, setOptionSelected] = React.useState(defaultView);

    const toggle = () => setIsOpen(!isOpen);

    const handleOnSelect = option => {
        setOptionSelected(option.text);
        setIsOpen(false);
        if (onSelectChange) onSelectChange(option.value);
    }
    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={toggle}>{optionSelected}</div>
            {isOpen && <ul className="dropdown__list-container">
                {options.map((item, index) => (
                    <li className="dropdown__list-item" onClick={() => handleOnSelect(item)} key={`item-${index}`}>{item.text}</li>
                ))}
            </ul>}
        </div>
    )
}

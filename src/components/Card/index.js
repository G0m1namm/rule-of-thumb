import React from 'react';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';
import ProgressBar from '../ProgressBar';

import moment from 'moment';

import './Card.scss';

const requestImageFile = require.context('../../assets/img/minified', true, /.jpg$/);

const areEqual = (prevProps, nextProps) => {
    const prevObj = Object.keys(prevProps);
    const nextObj = Object.keys(nextProps);

    if (prevObj.length !== nextObj.length) return false;

    for (const prop in nextObj) {
        if (prevProps[prop] !== nextProps[prop]) return false;
    }

    return true;
}

export const Card = React.memo(({ isGrid = true, id, name, description, lastUpdated, category, picture, votes, index, onVote }) => {
    const positiveVotes = (votes.positive / (votes.positive + votes.negative) * 100).toFixed(1);
    const negativeVotes = (votes.negative / (votes.positive + votes.negative) * 100).toFixed(1);
    const thumb = positiveVotes > negativeVotes ? "up" : "down";
    const thumbImage = positiveVotes > negativeVotes ? ThumbsUpIcon : ThumbsDownIcon;
    const eyebrowInfo = `${moment(lastUpdated).fromNow()} in ${category}`;

    const [selectedOption, setSelectedOption] = React.useState(null);
    const [isVoting, setIsVoting] = React.useState(true);

    const handleChange = e => {
        (e.target.checked) ? setSelectedOption(e.target.value) : setSelectedOption(null);
    }

    const handleVote = () => {
        if (typeof onVote === "function") onVote(id, selectedOption);
        setIsVoting(false);
        setSelectedOption(null);
    }

    return (
        <div className="card" data-grid={isGrid}>
            <img className="card__thumbnail" src={requestImageFile(`./${picture}`).default} alt={`${name}`} loading="lazy" />
            <div className="card__container">
                <div className="card__content">
                    <span className="card__indicator" data-thumb={thumb}>
                        <img src={thumbImage} alt="thumbs up" />
                    </span>
                    <div className="card__content-inner">
                        <div className="content-inner">
                            <h3 className="content-inner__title">{name}</h3>
                            <p className="content-inner__desc">{description}</p>
                        </div>
                        <div className="content-inner__actions">
                            <p className="actions__eyebrow">{isVoting ? eyebrowInfo : 'Thank you for your vote!'}</p>
                            <div className="actions__buttons-grid">
                                {isVoting ? (
                                    <>
                                        <label
                                            htmlFor={`thumbsUp-${index}`}
                                            className="actions__button-thumbs-up"
                                            data-checked={selectedOption === 'positive'}
                                        >
                                            <input
                                                name={`up-${index}`}
                                                type="checkbox"
                                                id={`thumbsUp-${index}`}
                                                value="positive"
                                                checked={selectedOption === 'positive'}
                                                onChange={handleChange}
                                            />
                                            <img src={ThumbsUpIcon} alt="thumbs up" />
                                        </label>
                                        <label
                                            htmlFor={`thumbsDown-${index}`}
                                            className="actions__button-thumbs-down"
                                            data-checked={selectedOption === 'negative'}
                                        >
                                            <input
                                                name={`down-${index}`}
                                                type="checkbox"
                                                id={`thumbsDown-${index}`}
                                                value="negative"
                                                checked={selectedOption === 'negative'}
                                                onChange={handleChange}
                                            />
                                            <img src={ThumbsDownIcon} alt="thumbs down" />
                                        </label>
                                        <button className="actions__button-cta" onClick={handleVote} disabled={!selectedOption}>Vote Now</button>
                                    </>
                                ) : <button className="actions__button-cta" onClick={() => setIsVoting(true)}>Vote Again</button>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__gauge-bar" data-progres="80">
                    <ProgressBar positive={positiveVotes} negative={negativeVotes} />
                </div>
            </div>
        </div>
    )
}, areEqual)


export default Card;
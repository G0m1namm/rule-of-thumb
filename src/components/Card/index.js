import React from 'react';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';
import ProgressBar from '../ProgressBar';

import moment from 'moment';

import './Card.scss';

const requestImageFile = require.context('../../assets/img/', true, /.png$/);

export default function Card({ isGrid = true, name, description, lastUpdated, category, picture, votes, index }) {
    const positiveVotes = (votes.positive / (votes.positive + votes.negative) * 100).toFixed(1);
    const negativeVotes = (votes.negative / (votes.positive + votes.negative) * 100).toFixed(1);
    const thumb = positiveVotes > negativeVotes ? "up" : "down";
    const thumbImage = positiveVotes > negativeVotes ? ThumbsUpIcon : ThumbsDownIcon;
    const eyebrowInfo = `${moment(lastUpdated).fromNow()} in ${category}`;
    return (
        <div className="card" data-grid={isGrid}>
            <img className="card__thumbnail" src={requestImageFile(`./${picture}`).default} alt="" />
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
                            <p className="actions__eyebrow">{eyebrowInfo}</p>
                            <div className="actions__buttons-grid">
                                <label htmlFor={`thumbsUp-${index}`} className="actions__button-thumbs-up">
                                    <input name={`vote-${index}`} type="radio" id={`thumbsUp-${index}`} />
                                    <img src={ThumbsUpIcon} alt="thumbs up" />
                                </label>
                                <label htmlFor={`thumbsDown-${index}`} className="actions__button-thumbs-down">
                                    <input name={`vote-${index}`} type="radio" id={`thumbsDown-${index}`} />
                                    <img src={ThumbsDownIcon} alt="thumbs down" />
                                </label>
                                <button className="actions__button-cta">Vote Now</button>
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
}

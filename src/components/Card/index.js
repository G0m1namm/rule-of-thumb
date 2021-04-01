import React from 'react';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';
import './Card.scss';
import ProgressBar from '../ProgressBar';

const requestImageFile = require.context('../../assets/img/', true, /.png$/);

export default function Card({ isGrid = true, name, description, lastUpdated, category, picture, votes }) {
    const positiveVotes = (votes.positive / (votes.positive + votes.negative) * 100).toFixed(1);
    const negativeVotes = (votes.negative / (votes.positive + votes.negative) * 100).toFixed(1);
    const thumb = positiveVotes > negativeVotes ? "up" : "down";
    const thumbImage = positiveVotes > negativeVotes ? ThumbsUpIcon : ThumbsDownIcon;

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
                            <p className="actions__eyebrow">{lastUpdated} in {category}</p>
                            <div className="actions__buttons-grid">
                                <button className="actions__button-thumbs-up">
                                    <img src={ThumbsUpIcon} alt="thumbs up" />
                                </button>
                                <button className="actions__button-thumbs-down">
                                    <img src={ThumbsDownIcon} alt="thumbs down" />
                                </button>
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

import React from 'react';
import { data } from '../../assets/data.json';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';
import './Card.scss';
import ProgressBar from '../ProgressBar';

const requestImageFile = require.context('../../assets/img/', true, /.png$/);

export default function Card({ isGrid = true }) {
    return (
        <div className="card" data-grid={isGrid}>
            <img className="card__thumbnail" src={requestImageFile(`./${data[0].picture}`).default} alt="" />
            <div className="card__container">
                <div className="card__content">
                    <span className="card__indicator" data-thumb="up">
                        <img src={ThumbsUpIcon} alt="thumbs up" />
                    </span>
                    <div className="card__content-inner">
                        <h3 className="content-inner__title">{data[0].name}</h3>
                        <p className="content-inner__desc">{data[0].description}</p>
                        <div className="content-inner__actions">
                            <p className="actions__eyebrow">{data[0].lastUpdated}</p>
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
                    <ProgressBar />
                </div>
            </div>
        </div>
    )
}

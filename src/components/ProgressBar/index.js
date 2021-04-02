import React from 'react';
import { Line } from 'rc-progress';

import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';

import './ProgressBar.scss';

export default function ProgressBar({ positive = 0, negative = 0 }) {
    return (
        <div className="progress-bar">
            <Line percent={positive} strokeLinecap="square" className="progress-bar__bar bar--positive" prefixCls="progress-bar__bar" />
            <Line percent={negative} strokeLinecap="square" className="progress-bar__bar bar--negative" prefixCls="progress-bar__bar" />
            <div className="progress-bar__info">
                <div className="progress-bar__info-left">
                    <img src={ThumbsUpIcon} alt="thumbs up" />
                    <span className="info-left__percentage">{positive}%</span>
                </div>
                <div className="progress-bar__info-right">
                    <span className="info-right__percentage">{negative}%</span>
                    <img src={ThumbsDownIcon} alt="thumbs down" />
                </div>
            </div>
        </div>
    )
}

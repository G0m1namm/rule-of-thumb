import React from 'react';
import { Line } from 'rc-progress';
import ThumbsUpIcon from '../../assets/img/thumbs-up.svg';
import ThumbsDownIcon from '../../assets/img/thumbs-down.svg';
import './ProgressBar.scss';

export default function ProgressBar() {
    return (
        <div className="progress-bar">
            <Line percent="10" strokeLinecap="square" className="progress-bar__bar bar--positive" prefixCls="progress-bar__bar" />
            <Line percent="90" strokeLinecap="square" className="progress-bar__bar bar--negative" prefixCls="progress-bar__bar" />
            <div className="progress-bar__info">
                <div className="progress-bar__info-left">
                    <img src={ThumbsUpIcon} alt="thumbs up" />
                    <span className="info-left__percentage">25.5%</span>
                </div>
                <div className="progress-bar__info-right">
                    <span className="info-right__percentage">74.5%</span>
                    <img src={ThumbsDownIcon} alt="thumbs down" />
                </div>
            </div>
        </div>
    )
}

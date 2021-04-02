import React from 'react';
import PeopleImage from '../../assets/img/minified/bg-people.jpg';
import PeopleBigImage from '../../assets/img/minified/bg-people.@2x.jpg';

export default function BottonContentBanner() {
    return (
        <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
            <img
                srcSet={`${PeopleImage} 750w, ${PeopleBigImage} 1440w`}
                sizes="(min-width: 750px) 1440px, 100vw"
                className="banner__background"
                src={PeopleImage}
                alt="crowd of people"
                role="none" />
            <div className="banner__left">
                <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
            </div>
            <div className="banner__right">
                <button className="banner__cta">
                    Submit a name
                </button>
            </div>
        </aside>
    )
}

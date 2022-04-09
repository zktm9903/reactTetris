import React, { FC } from 'react';
import { BackPresenter } from '../Presenters/MainPresenter';
import PlayContainer from './PlayContainer';

const MainContainer: FC = () => {
    return (
        <BackPresenter>
            <PlayContainer />
        </BackPresenter>
    )

}

export default MainContainer;
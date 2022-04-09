import React, { FC } from 'react';
import { PlayGroundPresenter } from "../Presenters/MainPresenter"
import { GreenBlock } from '../Presenters/BlockPresenter';



const PlayContainer: FC = () => {
    window.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (e.key === 'ArrowUp')
            console.log('up');
        else if (e.key === 'ArrowDown')
            console.log('down');
        else if (e.key === 'ArrowLeft')
            console.log('left');
        else if (e.key === 'ArrowRight')
            console.log('right');
        else if (e.key === ' ')
            console.log('space');
    });

    const arr: number[] = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    return (
        <PlayGroundPresenter>
            {arr.map(() => <GreenBlock />)}
        </PlayGroundPresenter>
    )
}

export default PlayContainer;
import React from 'react';
import ButtonSvg from '../../icons/button.svg';
import CandyCaneSvg from '../../icons/button.svg';
import CircleSvg from '../../icons/button.svg';
import CrossSvg from '../../icons/button.svg';
import PencilsSvg from '../../icons/button.svg';
import SmileySvg from '../../icons/button.svg';
import SwordsSvg from '../../icons/button.svg';
import WheelSvg from '../../icons/button.svg';

const IconGenerator = props => {
    return (
        <React.Fragment>
            {props.icon === "button" && <ButtonSvg colour = {props.colour}/>}
            {props.icon === "candyCane" && <CandyCaneSvg colour = {props.colour}/>}
            {props.icon === "circle" && <CircleSvg colour = {props.colour}/>}
            {props.icon === "cross" && <CrossSvg colour = {props.colour}/>}
            {props.icon === "pencils" && <PencilsSvg colour = {props.colour}/>}
            {props.icon === "smiley" && <SmileySvg colour = {props.colour}/>}
            {props.icon === "swords" && <SwordsSvg colour = {props.colour}/>}
            {props.icon === "wheel" && <WheelSvg colour = {props.colour}/>}
        </React.Fragment>
    )
}

export default IconGenerator
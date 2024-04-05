import { Component } from 'react';
import Car from './Car';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import { FiveComponent } from './FirstComponent';
import LearningJavaScript from './LearningJavaScript';

export default class LearningComponent extends Component {
    render () {
        return(
            <>
                <Car></Car>
                <FirstComponent></FirstComponent>
                <SecondComponent/>
                <ThirdComponent/>
                <FourthComponent/>
                <FiveComponent/>
                <LearningJavaScript/>
            </>
        )
    }
}
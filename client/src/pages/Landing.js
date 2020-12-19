import React from 'react';
import Header from '../components/Nav/Header';
import SalesDashText from '../components/TitleText/SalesDashText';
import LoginButton from '../components/Buttons/LoginButton';

export default function Landing() {

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
            <SalesDashText>
            </SalesDashText>
            <LoginButton />
            </div>
        </>
    );
}
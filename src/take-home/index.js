import Dependents from './dependents';
import FederalTax from './federal-tax';
import FilingStatus from './filing-status';
import React from 'react';
import Salary from './salary';
import SocialSecurity from './social-security';
import TakeHomeBiWeekly from './take-home-bi-weekly';
import TakeHomeMonthly from './take-home-monthly';
import TakeHomeWeekly from './take-home-weekly';
import TakeHomeYearly from './take-home-yearly';
import TaxableIncome from './taxable-income';
import styles from '../styles/take-home.css';

const TakeHome = () =>
    <section className={styles.takeHome}>
        <Salary/>
        <FilingStatus/>
        <Dependents/>
        <TaxableIncome/>
        <FederalTax/>
        <SocialSecurity/>
        <TakeHomeYearly/>
        <TakeHomeMonthly/>
        <TakeHomeBiWeekly/>
        <TakeHomeWeekly/>
    </section>;

export default TakeHome;

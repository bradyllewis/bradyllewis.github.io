import React from 'react';
import './AccountBalance.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if (props.showBalance) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            {content}
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>
        </Section>
    );
}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
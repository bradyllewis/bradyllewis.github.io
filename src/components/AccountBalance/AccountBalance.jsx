import React, { Component } from 'react';
import './AccountBalance.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Balance: ${this.props.amount}
            </Section>
        );
    }
}



AccountBalance.propTypes = {
    amount: PropTypes.string.isRequired
}
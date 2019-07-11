import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson, { mountToJson } from 'enzyme-to-json';
import styled from 'styled-components'
import 'jest-styled-components'

import App from '../client/components/App';
import Login from '../client/components/Login';
import Dashboard from '../client/components/Dashboard';
import Keyvalue from '../client/components/Keyvalue';
import Nav from '../client/components/Nav';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
    //---------LOGIN TESTS---------//
    describe('Login Tests', () => {
        let wrapper;
        const props = {
            isLoggedIn: false,
            toggleLoggedIn: jest.fn(),
            getUserSchemaArr: jest.fn(),
            redirectToDashboard: jest.fn(),
        };
        beforeAll(() => {
            wrapper = shallow(<Login props={props} />);
        });

        it('Renders a div with a form with a heading and 2 inputs', () => {
            expect(wrapper.type()).toEqual('div');
            const form = mountToJson(wrapper.find('form'));
            expect([form].length).toBe(1);
            const heading = mountToJson(wrapper.find('h1'));
            expect([heading].length).toBe(1);
            expect(heading.text()).toEqual('Log in to Schema Armadillo');
            const inputs = mountToJson(wrapper.find('input'));
            expect(inputs.length).toBe(2);

        })
    })
})
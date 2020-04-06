import React from 'react';

import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-export-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import navigationItem from './NavigationItem/NavigationItem';

configure({adapter:new Adapter()});

describe('Navigation Items',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=shallow(<NavigationItems />);
    });
    it('should render two nav items if not auth',()=>{

        // wrapper=shallow(<NavigationItems isAuthenticated />)
        wrapper.setProps({isAuthticated:true});
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render two nav items if not auth',()=>{

        
        expect(wrapper.contains(<NavigationItem link='/logout'>logout</NavigationItem>)).toEqual(true);
    });
});
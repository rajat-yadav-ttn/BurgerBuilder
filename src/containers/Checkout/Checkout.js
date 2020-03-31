import React ,{Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'

export default class Checkout extends Component{
    state={
        ingredients:null,
        price:0,
    }

    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        let price=0;
        for(let param of query.entries()){
            // console.log(param[0]+ ' => param[0]');
            // console.log(param[1]+ ' => param[1]');
            if(param[0]==='price'){
                price=param[1];
            }else{
                ingredients[param[0]]=+param[1];
            }
            // console.log(ingredients);
        }
        this.setState({ingredients:ingredients,totalPrice:price});
    }

    checkoutCancelledHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinuedHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}    
                />
                {/* <Route path={this.props.match.path + '/contact-data'} component={ContactData}/> */}
                <Route path={this.props.match.path + '/contact-data'} 
                    render={(props)=>(<ContactData
                                    ingredients={this.state.ingredients}   
                                    price={this.state.totalPrice} 
                                    {...props}
                                />)}/>
                
            </div>
            
        );
    }
}
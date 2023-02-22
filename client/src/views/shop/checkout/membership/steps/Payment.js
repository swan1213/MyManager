import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

// ** Icon Imports
import { PlusCircle } from 'react-feather'
import { BsCreditCard, BsCash } from 'react-icons/bs'

// ** Components
import CardPayment from '../CardPayment'
import CashPayment from '../CashPayment'

// ** Reactstrap Imports
import {
    Form,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Payment = (props) => {
    const {dispatch, getMembership, checkoutMemberships, contact}=props;
    const [active, setActive] = useState('1');
    const [total, setTotal]=useState(0);
    const [amount, setAmount]=useState(0);
    const [memberships, setMemberships]=useState([]);
    const store = useSelector((state) => state.shop);
    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)
        }
    };
    const location=useLocation();
    const last_path=location.pathname.split('/').slice(-1)[0];
    useEffect(()=>{
        if(last_path!='membership'){
            dispatch(getMembership(last_path)).then(res=>{
                if(res.payload.data){
                    setAmount(1);
                    setTotal(res.payload.data.total_price);
                    setMemberships([last_path]);
                }
            })
        }
        else{
            let sum = 0;
            let num=0;
            store.cart.membership_list.forEach((item)=>{
              sum=sum+item.total_price;
              setMemberships(memberships => [...memberships, item._id]);
              num=num+1;
            });
            setTotal(sum); 
            setAmount(num);
        }
    }, [])

    return (
        <Form
            className="list-view product-checkout"
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <div className="payment-type">
                <Card>
                    <CardHeader className="flex-column align-items-start">
                        <CardTitle tag="h4">Payment options</CardTitle>
                        <CardText className="text-muted mt-25">
                            Be sure to click on correct payment option
                        </CardText>
                    </CardHeader>
                    <CardBody>
                        <Nav className="justify-content-center" tabs>
                            <NavItem>
                                <NavLink
                                    active={active === '1'}
                                    onClick={() => {
                                        toggle('1')
                                    }}
                                >
                                    <BsCreditCard size={18} />
                                    <span className="align-middle">
                                        ATM Card
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={active === '2'}
                                    onClick={() => {
                                        toggle('2')
                                    }}
                                >
                                    <BsCash size={18} />
                                    <span className="align-middle">
                                        Cash Payment
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent className="py-50" activeTab={active}>
                            <TabPane tabId="1">
                                <CardPayment total={total}contact={contact} memberships={memberships} dispatch={dispatch} checkoutMemberships={checkoutMemberships}/>
                            </TabPane>
                            <TabPane tabId="2">
                                <CashPayment/>
                            </TabPane>
                        </TabContent>

                        <hr className="my-2" />
                        <div className="gift-card mb-25">
                            <CardText>
                                <PlusCircle className="me-50" size={21} />
                                <span className="align-middle">
                                    Add Gift Card
                                </span>
                            </CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="amount-payable checkout-options">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Price Details</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <ul className="list-unstyled price-details">
                            <li className="price-detail">
                                <div className="details-title">
                                    Price of {amount} items
                                </div>
                                <div className="detail-amt">
                                    <strong>${total}</strong>
                                </div>
                            </li>
                            <li className="price-detail">
                                <div className="details-title">
                                    Delivery Charges
                                </div>
                                <div className="detail-amt discount-amt text-success">
                                    Free
                                </div>
                            </li>
                        </ul>
                        <hr />
                        <ul className="list-unstyled price-details">
                            <li className="price-detail">
                                <div className="details-title">
                                    Amount Payable
                                </div>
                                <div className="detail-amt fw-bolder">
                                    ${total}
                                </div>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </Form>
    )
}

export default Payment

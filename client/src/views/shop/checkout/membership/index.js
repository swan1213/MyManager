// ** React Imports
import { Fragment, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Steps
import Cart from './steps/Cart'
import Contact from './steps/Contact'
import Payment from './steps/Payment'

// ** Third Party Components
import { ShoppingCart, CreditCard } from 'react-feather'
import { RiContactsBookLine } from 'react-icons/ri'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import {
    getCartItems,
    deleteCartItem,
    deleteWishlistItem,
    addToWishlist,
    getMembership,
    checkoutMemberships,
} from '../../store'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const MembershipCheckout = () => {
    // ** Ref & State
    const ref = useRef(null)
    const [stepper, setStepper] = useState(null);
    const [contact, setContact]=useState('');

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector((state) => state.shop);

    // ** Get Cart Items on mount
    const location=useLocation();
    const last_path=location.pathname.split('/').slice(-1);
    useEffect(() => {
        dispatch(getCartItems())
    }, [])

    let steps;
    if(last_path!='membership'){
        steps = [
            {
                id: 'Contact',
                title: 'Contact',
                subtitle: 'Enter Contact Details',
                icon: <RiContactsBookLine size={18} />,
                content: <Contact contact={contact} setContact={setContact} stepper={stepper} />
            },
            {
                id: 'payment',
                title: 'Payment',
                subtitle: 'Select Payment Method',
                icon: <CreditCard size={18} />,
                content: <Payment contact={contact}  dispatch={dispatch} getMembership={getMembership} checkoutMemberships={checkoutMemberships} stepper={stepper} />
            }
        ];
    }
    else{
        steps = [
            {
                id: 'cart',
                title: 'Cart',
                subtitle: 'Your Cart Items',
                icon: <ShoppingCart size={18} />,
                content: (
                    <Cart
                        stepper={stepper}
                        dispatch={dispatch}
                        memberships={store.cart.membership_list}
                        getCartItems={getCartItems}
                        addToWishlist={addToWishlist}
                        deleteCartItem={deleteCartItem}
                        deleteWishlistItem={deleteWishlistItem}
                    />
                )
            },
            {
                id: 'Contact',
                title: 'Contact',
                subtitle: 'Enter Contact Details',
                icon: <RiContactsBookLine size={18} />,
                content: <Contact contact={contact} setContact={setContact} dispatch={dispatch} stepper={stepper} />
            },
            {
                id: 'payment',
                title: 'Payment',
                subtitle: 'Select Payment Method',
                icon: <CreditCard size={18} />,
                content: <Payment contact={contact} dispatch={dispatch} checkoutMemberships={checkoutMemberships} stepper={stepper} />
            }
        ]
    }

    return (
        <Fragment>
            <BreadCrumbs
                breadCrumbTitle="Checkout"
                breadCrumbParent="eCommerce"
                breadCrumbActive="Membership Checkout"
            />

            <Wizard
                ref={ref}
                steps={steps}
                className="checkout-tab-steps"
                instance={(el) => setStepper(el)}
                options={{
                    linear: false
                }}
            />
        </Fragment>
    )
}

export default MembershipCheckout

// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { X, Heart, Star, Edit } from 'react-feather'

// ** Reactstrap Imports
import {
    Card,
    CardBody,
    CardText,
    Button,
    Badge,
    InputGroup,
    Input,
    InputGroupText
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import logo from '../../../../../assets/images/elements/iphone-x.png'

const Cart = (props) => {
    // ** Props
    const {
        memberships,
        stepper,
        deleteCartItem,
        dispatch,
        addToWishlist,
        deleteWishlistItem,
        getCartItems
    } = props

    // ** Function to convert Date
    const formatDate = (
        value,
        formatting = { month: 'short', day: 'numeric', year: 'numeric' }
    ) => {
        if (!value) return value
        return new Intl.DateTimeFormat('en-US', formatting).format(
            new Date(value)
        )
    }

    // ** Funciton Function to toggle wishlist item
    const handleWishlistClick = (id, val) => {
        if (val) {
            dispatch(deleteWishlistItem(id))
        } else {
            dispatch(addToWishlist(id))
        }
        dispatch(getCartItems())
    }

    // ** Render cart items
    const renderCart = () => {
        return memberships && memberships.map((item) => {
            return (
                <Card key={item.name} className="ecommerce-card">
                    <div className="item-img">
                        <Link to={`/ecommerce/product-detail/${item.slug}`}>
                            <img
                                className="img-fluid"
                                src={logo}
                                style={{ width: 120, height: 120 }}
                                alt={item.name}
                            />
                        </Link>
                    </div>
                    <CardBody>
                        <div className="item-name">
                            <h6 className="mb-0">
                                <Link
                                    to={`/ecommerce/membership-detail/${item._id}`}
                                >
                                     {item.membership_name}
                                </Link>
                            </h6>  
                        </div>
                        <span className="item-company">
                                Type:
                                <span className="text-primary mb-1">
                                    {item.payment_type}
                                 </span>
                        </span>
                        <span className="item-company">
                                Description:
                                <span className="text-primary mb-1">
                                    {item.description}
                                 </span>

                            <span className="text-success">
                               In Stock
                            </span>
                        </span>   
                    </CardBody>
                    <div className="item-options text-center">
                        <div className="item-wrapper">
                            <div className="item-cost">
                                <h4 className="item-price">${item.total_price}</h4>
                            </div>
                        </div>
                        <Button
                            className="mt-1 remove-wishlist"
                            color="light"
                            onClick={() => {}}
                        >
                            <Edit size={14} className="me-25" />
                            <span>Edit</span>
                        </Button>
                        <Button
                            className="remove-wishlist"
                            color="light"
                            onClick={() => {
                                dispatch(deleteCartItem(item.id))
                            }}
                        >
                            <X size={14} className="me-25" />
                            <span>Remove</span>
                        </Button>
                        <Button
                            className="btn-cart"
                            color="primary"
                            onClick={() =>
                                handleWishlistClick(item.id, item.isInWishlist)
                            }
                        >
                            <Heart
                                size={14}
                                className={classnames('me-25', {
                                    'fill-current': item.isInWishlist
                                })}
                            />
                            <span className="text-truncate">Wishlist</span>
                        </Button>
                    </div>
                </Card>
            )
        })
    }

    return (
        <div className="list-view product-checkout">
            <div className="checkout-items">
                 {memberships.length ? renderCart() : <h4>Your cart is empty</h4>}
            </div>
            <div className="checkout-options">
                <Card>
                    <CardBody>
                        <label className="section-label mb-1">Options</label>
                        <InputGroup className="input-group-merge coupons">
                            <Input placeholder="Coupons" />
                            <InputGroupText className="text-primary ms-0">
                                Apply
                            </InputGroupText>
                        </InputGroup>
                        <hr />
                        <div className="price-details">
                            <h6 className="price-title">Price Details</h6>
                            <ul className="list-unstyled">
                                <li className="price-detail">
                                    <div className="detail-title">
                                        Total MRP
                                    </div>
                                    <div className="detail-amt">$598</div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">
                                        Bag Discount
                                    </div>
                                    <div className="detail-amt discount-amt text-success">
                                        -25$
                                    </div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">
                                        Estimated Tax
                                    </div>
                                    <div className="detail-amt">$1.3</div>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">
                                        EMI Eligibility
                                    </div>
                                    <a
                                        href="/"
                                        className="detail-amt text-primary"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Details
                                    </a>
                                </li>
                                <li className="price-detail">
                                    <div className="detail-title">
                                        Delivery Charges
                                    </div>
                                    <div className="detail-amt discount-amt text-success">
                                        Free
                                    </div>
                                </li>
                            </ul>
                            <hr />
                            <ul className="list-unstyled">
                                <li className="price-detail">
                                    <div className="detail-title detail-total">
                                        Total
                                    </div>
                                    <div className="detail-amt fw-bolder">
                                        $574
                                    </div>
                                </li>
                            </ul>
                            <Button
                                block
                                color="primary"
                                disabled={!memberships.length}
                                onClick={() => stepper.next()}
                                classnames="btn-next place-order"
                            >
                                Place Order
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Cart

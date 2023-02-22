// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Shop Components
import Sidebar from './Sidebar'
import AddSidebar from './AddSidebar'
import Products from './products/Products'
import Memberships from './memberships/Memberships'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProducts, getMembership, getMemberships, addMembershipToWishlist, getMembershipWishlistItems ,deleteMembershipWishlist, getCartItems, addToWishlist, deleteCartItem, deleteWishlistItem } from '../store'

// ** Styles
import '@styles/react/apps/app-ecommerce.scss'
import { storeColumns } from '../../contacts/client/view/tabs/storeColumns'

const Shop = () => {
  // ** States
  const [activeView, setActiveView] = useState('grid')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [type, setType] = useState("membership")

  // ** Vars
  const dispatch = useDispatch()
  // const store = useSelector(state => state.ecommerce)
  const store= useSelector(state => state.shop);
  const toggleHandler=()=>{
    setSidebarOpen(false);
  }
  // ** Get products
  useEffect(()=>{
    if(type==='membership'){
       if(!store.memberships || !store.memberships.length){
        dispatch(
          getMemberships({
            q: '',
            sortBy: 'featured',
            perPage: 9,
            page: 0
          })
        )
       }
    }
    else{
      dispatch(
        getProducts({
          q: '',
          sortBy: 'featured',
          perPage: 9,
          page: 1
        })
      )
    }
  }, [type, dispatch]);

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Shop' breadCrumbParent='eCommerce' breadCrumbActive='Shop' />
      {type==='membership'?(<Memberships
        store={store}
        dispatch={dispatch}
        type={type}
        addToCart={addToCart}
        activeView={activeView}
        getMembership={getMembership}
        getMemberships={getMemberships}
        getMembershipWishlistItems={getMembershipWishlistItems}
        sidebarOpen={sidebarOpen}
        getCartItems={getCartItems}
        setActiveView={setActiveView}
        addMembershipToWishlist={addMembershipToWishlist}
        setSidebarOpen={setSidebarOpen}
        deleteCartItem={deleteCartItem}
        deleteMembershipWishlist={deleteMembershipWishlist}
      />):
      <Products
      store={store}
      dispatch={dispatch}
      type={type}
      addToCart={addToCart}
      activeView={activeView}
      getProducts={getProducts}
      sidebarOpen={sidebarOpen}
      getCartItems={getCartItems}
      setActiveView={setActiveView}
      addToWishlist={addToWishlist}
      setSidebarOpen={setSidebarOpen}
      deleteCartItem={deleteCartItem}
      deleteWishlistItem={deleteWishlistItem}
    />}
      <Sidebar sidebarOpen={sidebarOpen} type={type} setType={setType}/>
      <AddSidebar dispatch={dispatch} sidebarOpen={sidebarOpen} toggleHandler={toggleHandler} type={type} setType={setType}/>
    </Fragment>
  )
}
export default Shop

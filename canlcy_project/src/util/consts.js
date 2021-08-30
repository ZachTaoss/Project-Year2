import { About, Cart, Products,Home,Error, } from '../Pages';

export const Links = [
    {
        id:1, 
        url:'/',
        text: 'Home',
        page:<Home />
    },
    {
        id:2, 
        url:'/about',
        text: 'About',
        page: <About />
    },
    {
        id:3, 
        url:'/products',
        text: 'Products',
        page: <Products />
    },
    {
        id:4, 
        url:'/cart',
        text: 'Cart',
        page: <Cart />
    },
    {
        id:5,
        url:"*",
        text: 'Error',
        page: <Error />
    }

]


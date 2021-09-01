import { Contact,Home,Error, } from '../Pages';

export const Links = [
    {
        id:1, 
        url:'/',
        text: 'Home',
        page:<Home />
    },
    {
        id:2, 
        url:'/contact',
        text: 'Contact',
        page: <Contact />
    },
    {
        id:3,
        url:"*",
        text: 'Error',
        page: <Error />
    }

]


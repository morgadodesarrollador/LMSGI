import { ProductosPage, AboutPage, UsersPage} from '../01-lazyload/pages';

interface IRoute {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string
}
export const Rutas: IRoute[] = [
    { 
        to: '/productos',
        path: 'productos',
        Component: ProductosPage,
        name: 'Productos'
    },
    {
        to: '/about',
        path: 'about',
        Component: AboutPage,
        name: 'About'
    },
    {
        to: '/users',
        path: 'users',
        Component: UsersPage,
        name: 'Usuarios'
    }
]
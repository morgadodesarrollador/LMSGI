import { CloudPage } from './pages/Cloud';



interface Route {
    path: string;
    Component: () => JSX.Element;
    name: string;
    children?: Route[]
}


export const routes: Route[] = [
    { 
        path: 'cloud',
        Component: CloudPage,
        name: 'cloud'
    }
]
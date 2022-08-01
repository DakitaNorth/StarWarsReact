import HomePage from '@containers/homePage/homePage';
import PeoplePage from '@containers/peoplePage/peoplePage';

const routesConfig = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/people",
        element: <PeoplePage />
    }
];

export default routesConfig;
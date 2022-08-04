import HomePage from '@containers/homePage/homePage';
import PeoplePage from '@containers/peoplePage/peoplePage';
import PersonPage from '@containers/personPage/personPage';
import NotFoundPage from '@containers/notFoundPage/notFoundPage';

const routesConfig = [
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/not-found",
        element: <NotFoundPage />
    },
    {
        path: "/people",
        element: <PeoplePage />
    }
    ,
    {
        path: "/people/:id",
        element: <PersonPage />
    }
];

export default routesConfig;
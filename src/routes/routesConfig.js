import HomePage from '@containers/homePage/homePage';
import PeoplePage from '@containers/peoplePage/peoplePage';
import NotFoundPage from '@containers/notFoundPage/notFoundPage';

const routesConfig = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/not-found",
        element: <NotFoundPage />
    },
    {
        path: "/people",
        element: <PeoplePage />
    }
];

export default routesConfig;
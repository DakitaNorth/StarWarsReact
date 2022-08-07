import HomePage from '@containers/homePage/homePage';
import PeoplePage from '@containers/peoplePage/peoplePage';
import PersonPage from '@containers/personPage/personPage';
import SearchPage from '@containers/searchPage/searchPage';
import FavoritePage from '@containers/favoritePage/favoritePage';
import ErrorMessage from '@components/errorMessage/errorMessage';
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
        path: "/fail",
        element: <ErrorMessage />
    },
    {
        path: "/people",
        element: <PeoplePage />
    },
    {
        path: "/people/:id",
        element: <PersonPage />
    },
    {
        path: "/favorites",
        element: <FavoritePage />
    },
    {
        path: "/search",
        element: <SearchPage />
    }
];

export default routesConfig;
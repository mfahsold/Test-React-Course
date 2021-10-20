import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
import CreateGenres from "./genres/CreateGenres";
import EditGenres from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateTheatre from "./movietheaters/CreateTheatre";
import EditTheatre from "./movietheaters/EditTheatre";
import IndexTheatres from "./movietheaters/IndexTheatres";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenres},
    {path: '/genres/edit/:id(\\d+)', component: EditGenres},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/theatres', component: IndexTheatres, exact: true},
    {path: '/theatres/create', component: CreateTheatre},
    {path: '/theatres/edit/:id(\\d+)', component: EditTheatre},

    {path: '/movies', component: FilterMovies, exact: true},
    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage, exact: true}
]

export default routes;
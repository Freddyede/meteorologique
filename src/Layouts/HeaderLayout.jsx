import NavbarComponent from "../components/NavbarComponent.jsx";

function HeaderLayout({setCitiesState, citiesState}) {
    return (
        <header>
            <NavbarComponent setCitiesState={setCitiesState} citiesState={citiesState} />
        </header>
    )
}

export default HeaderLayout;
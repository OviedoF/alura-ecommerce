import ArticlesMainSection from "./ArticlesMainSection";
import CategorysGrid from "./CategorysGrid";
import MainPage from "./mainPage";

function HomePage() {
    return ( 
        <>
            <MainPage />
            <CategorysGrid />
            <ArticlesMainSection />
        </>
     );
}

export default HomePage;
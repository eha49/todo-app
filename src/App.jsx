import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import AppThemeProvider from "./AppThemeProvider/AppThemeProvider";

function App() {
  return (
    <>
      <AppThemeProvider>
        <Banner />
        <Main />
        <GlobalStyles />
      </AppThemeProvider>
    </>
  );
}

export default App;

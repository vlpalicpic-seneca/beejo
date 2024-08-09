import './App.css';
import { ChakraProvider, extendTheme, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import List from './pages/List';
import Search from './pages/Search';
import DetailPage from './pages/DetailPage';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';



const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F3F1E8', // Set background color for the entire site
        color: '#372F2F', // Set text color for the entire site
      },
    },
  },
});


const App = () => {

  const { isOpen: isRegisterOpen, onOpen: onOpenRegister, onClose: onCloseRegister } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    console.log(isLoggedIn);
    setIsLoggedIn(!(isLoggedIn));
    console.log("is now " + isLoggedIn );
  }
  // const [heroes, setHeroes] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/heroes')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setHeroes(data))
  //     .catch(error => console.error('Error fetching heroes:', error));
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header onOpenLogin={onOpenLogin} onOpenRegister={onOpenRegister} toggleLoggedIn={toggleLoggedIn} isLoggedIn={isLoggedIn}/>
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<List section='movies' />} />
            <Route path="/series" element={<List section='series' />} />
            <Route path="/movies/:id" element={<DetailPage section='movies' />} />
            <Route path="/series/:id" element={<DetailPage section='series' />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register" />
            <Route path="/login" />
            
          </Routes>
        </div>
        {/* <RegisterModal isOpen={isRegisterOpen} onClose={onCloseRegister} /> */}
        <Login isOpen={isLoginOpen} onClose={onCloseLogin} toggleLoggedIn={toggleLoggedIn}/>
        <Register isOpen={isRegisterOpen} onClose={onCloseRegister} />
        {/* <Content heroes={heroes} /> */}

        <Footer />
      </Router>
    </ChakraProvider>

  );
};

export default App;

{/* <Router>
  <Header />
  <div style={{ paddingTop: '80px' }}>
    <Routes>
      <Route path="/" />
      <Route path="/movies" />
      <Route path="/tvShows" />
      <Route path="/movies/:id" />
      <Route path="/tvShows/:id" />
      <Route path="/register" />
      <Route path="/login" />
    </Routes>
  </div>
  <RegisterModal isOpen={isRegisterOpen} onClose={onCloseRegister} />
  <LoginModal isOpen={isLoginOpen} onClose={onCloseLogin} />
</Router> */}

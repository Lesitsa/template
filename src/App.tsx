import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Recommendation from './Recommendation';
import Search from './comp/Search';
import ListenAudio from './Audio';
import TypeA from './TypeA';
import HelperType from './HelperType';
import LeftMenu from './comp/leftMenu';
import LeftCentralMenu from './comp/LeftCentralMenu';
import HeaderCentral from './comp/HeaderCentral';
import Footer from './comp/Footer';
export const ContextToken = React.createContext<string>("");
export const ListenTrack = React.createContext<TypeA>({} as TypeA);


function App() {
  let client_id = "57860e06132c4c6eb541907fd42fe31c";
  let client_secret = "915c9ec9afa046a5a07b3a3b0e317d47";

  const [token, setToken] = useState('');
  const [recommend, setRecommend] = useState([]);
  const [alb, setAlb] = useState([]);
  const [linkTR, setLinkTR] = useState<HelperType>({} as HelperType);
  //  Попробовала заменить - не получилось :(
  // let linkTR = {} as HelperType;
  // const setLinkTR = (props: HelperType) => {
  //   linkTR = props;
  // }
  const dat = useMemo(() => ({ linkTR, setLinkTR }), [linkTR]);


  useEffect(() => {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
      body: 'grant_type=client_credentials'
    }).then((result) => {
      if (!result.ok) {
        //Возвращение Promise с указанием ошибки 
        return Promise.reject(result.status);
      }
      else {
        //Возвращение положительного результата с преобразованием в JSON формат
        return result.json()
      }
    }).then((data) => {
      setToken(data.access_token);
      fetch('https://api.spotify.com/v1/browse/categories', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data.access_token
        }
      }).then((result) => {
        if (!result.ok) {
          //Возвращение Promise с указанием ошибки 
          return Promise.reject(result.status);
        }
        else {
          //Возвращение положительного результата с преобразованием в JSON формат
          return result.json()
        }
      }).then((data) => {
        setRecommend(data.categories.items);
        //Обработка исключений
      }).catch(function (error) {
        console.log("Ошибка " + error);
      });
      //Обработка исключений
    }).catch(function (error) {
      console.log("Ошибка " + error);
    });
  }, [client_id, client_secret])


  return (
    <div className="App">
      <Router>
        <ListenTrack.Provider value={dat}>
          <ContextToken.Provider value={token}>
            <header className="header">

              {/* Левое меню */}
              <nav className="nav__for__left__menu">
                <LeftMenu></LeftMenu>

                {/* Левое центральное меню */}
                <LeftCentralMenu></LeftCentralMenu>
              </nav>
            </header>

            <main className="main">
              {/* Шапка (регистрация и вход) */}
              <HeaderCentral></HeaderCentral>

              <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/recommendation:tracks' element={<Recommendation listData={recommend} />}></Route>
              </Routes>
              <ListenAudio></ListenAudio>
            </main>

            <Footer></Footer>
            
          </ContextToken.Provider>
        </ListenTrack.Provider>
      </Router>
    </div>
  );
}

export default App;

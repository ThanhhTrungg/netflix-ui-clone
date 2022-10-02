import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, logoutUser } from "~/redux/actions/getUserInfo";

function App() {
    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // Logged in
                dispatch(
                    loginUser({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
                console.log(userAuth);
            } else {
                // Logged out
                dispatch(logoutUser());
                console.log(userAuth);
            }
        });

        return unsubscribe;
    }, [dispatch]);
    return (
        <Router>
            <div className="App">
                {(user === null || user === undefined) && !user ? (
                    <Login />
                ) : (
                    <>
                        <Header />
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                return <Route key={index} path={route.path} element={<Page />} />;
                            })}
                        </Routes>
                        <Footer />
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;

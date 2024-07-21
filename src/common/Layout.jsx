import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) =>{
    return(
        <Fragment>
            <Header />
            <div>{children}</div>
            <Footer />
        </Fragment>
    )
}

export default Layout;
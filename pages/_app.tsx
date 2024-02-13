import "../styles/globals.scss";
import Layout from "../components/Layout";
import React from "react";



const MyApp: React.FC<{Component: any, pageProps: any}> = (props) => (
    <Layout>
        <props.Component {...props.pageProps}/>
    </Layout>
    
)

export default MyApp;
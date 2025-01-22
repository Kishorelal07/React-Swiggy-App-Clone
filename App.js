import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import BodyTry from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { Outlet } from "react-router";
import Home from "./src/components/Home";
import RestaurantMenu from "./src/RestaurantMenu";
import ResturantCard from "./src/components/RestaurantCard";
/*
        <div id="parent">
        
            <div id="child">
                <h1>This is H1 I'm here</h1>
                <h2>This is H2 I'm here</h2>
            <div>

            <div id="child2">
                <h1>This is H1 I'm here</h1>
                <h2>This is H2 I'm here</h2>
            <div>

        </div>
        

*/


// const parent = React.createElement("div",{id:"parent"}, [
//     React.createElement(("div"),{id:"child"},[
//         React.createElement(("h1"),{},"This is h1 I'm here by the way"),
//         React.createElement(("h1"),{},"This is h2 I'm here by the way")]
//     ),React.createElement(("div"),{id:"child"},[
//         React.createElement(("h3"),{},"This is h3 I'm here by the way"),
//         React.createElement(("h4"),{},"This is h4 I'm here by the way")]
//     )]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


//const heading = React.createElement("h1",{id:"heading"},"Hello World!!");


//React Element
//const HeadingReactElement = () => <div> <h1>Hi, this is the React Element</h1></div>;


const AppLayout = () => {
    return(
        <div className="App">
            <Header/>
            <Outlet/>     
        </div>
    )   
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children :[
        {
            path : "/",
            element : <BodyTry/>,
        },
        {
            path : "/about",
            element : <About/>,
        },
        {
            path : "/contact",
            element : <Contact/>,
        },
        {
            path : "/home",
            element : <BodyTry/>
        } ,
        {
            path : "/restaurants/:resId",
            element : <RestaurantMenu/>
        }
    ],
        errorElement : <Error/>,
    }    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>); 


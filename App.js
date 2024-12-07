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


const parent = React.createElement("div",{id:"parent"}, [
    React.createElement(("div"),{id:"child"},[
        React.createElement(("h1"),{},"This is h1 I'm here by the way"),
        React.createElement(("h1"),{},"This is h2 I'm here by the way")]
    ),React.createElement(("div"),{id:"child"},[
        React.createElement(("h3"),{},"This is h3 I'm here by the way"),
        React.createElement(("h4"),{},"This is h4 I'm here by the way")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
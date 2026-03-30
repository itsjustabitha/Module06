import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer' // up the top
import City from './components/City'
import Pet from './components/Pet'
import Greeting from './components/Greeting' // Exercise 01 Side 31











function App() {
  const [count, setCount] = useState(0)

  const invalidJSX = <><p>paragraph 1</p><p>paragraph 2</p>;</>

    return (
    <>


    
{/* // Exercise 01 Side 31 */}
<Greeting name="Alice"/> 


<Pet name="buddy" type="buddy"/>

{/* state and country are not specified, will use defaults */}
{/* <City name="Sydney" /> */}

{/* country is not specified, will use default */}
{/* <City name="Melbourne" state="VIC" /> */}

{/* all values are specified, won't use defaults */}
{/* <City name="Chicago" state="Illinois" country="USA" /> */}

{/* <City name="Newcastle">
<div>Newcastle is a harbour city in the Australian state of New South
Wales.</div>
<div><strong>Population:</strong> 322,278 (2016)</div>
</City> */}


    </>
  )
}

export default App



// PREVIOUS EXAMPLES - I COMMENTED THEM OUT SO I DON'T GET CONFUSED.
// function Welcome(props) { // custom Welcome component
// return (
// <div className="Welcome">
// {/* if the 'name' prop exists, render it on the screen */}
// <h3>Welcome {props.name}!</h3>
// {/* if this component has children, render them here */}
// {props.children}
// </div>
// )
// }

// componentBox class styles a component into a box
// Welcome class identifies this component
// function Welcome(props) {
// return (
// <div className="componentBox">
// <h3>Welcome {props.name}!</h3>
// </div>
// )
// }


// Add this in App.jsx ABOVE the App component
// function ExampleComponent() {
// return (
// <div className="ExampleComponent componentBox">
// <h1>My Example Component</h1>
// <h3 style={{color: 'blue', textTransform: 'uppercase'}}>Welcome!</h3> {/* style object directly in JSX */}
// <p>My first React component!</p>
// </div>
// )
// }


//  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
//   const spideyJSX = (<div>
// <h3>{spiderman.name}</h3>
// <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
// </div>);



// // single parent <div> element
// const spideyJSX = (<div>
// <h3>{spiderman.name}</h3>

// <blockquote>{spiderman.catchPhrase}</blockquote>
// <cite>{spiderman.alterEgo}</cite>
// </div>);

// // single parent fragment element
// const spideyJSXFragment = (<>
// <h3>{spiderman.name}</h3>

// <blockquote>{spiderman.catchPhrase}</blockquote>
// <cite>{spiderman.alterEgo}</cite>
// </>);

// const divStyle = { background: 'lightblue', padding: '1em', fontWeight: 'bold' };

//   return (
//     <>

 {/* Renders the component with no props */}
{/* <PropsDisplayer /> */}

{/* Renders the component with a single prop 'myProp' */}
{/* <PropsDisplayer myProp="first prop"/> */}

{/* Renders the component with multiple props - add your own! */}
{/* <PropsDisplayer prop1="first" prop2="second" prop3={3}/> */}

{/* String prop value uses quotes, numeric prop value uses curly braces */}
{/* <PropsDisplayer name="Harry Styles" age={29}/> */}

{/* Array prop value - uses curly braces */}
{/* <PropsDisplayer pets={["cat", "dog", "goldfish"]}/> */}

{/* Variable prop values - uses curly braces */}
{/* <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/> */}



  {/* <Welcome name="students">
<p>Children of Welcome</p>
</Welcome>
    <ExampleComponent/>

<div style={divStyle}>This is a styled div.</div> style object as a variable - neater and re-usable */}

{/* {spideyJSX}
  {spideyJSXFragment}

   
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    {/* </>
  )
}

export default App */}

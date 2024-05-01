import logo from './logo.svg';
import './App.css';
import MyButton from './myButton';
import Header from './Header';
import Welcome from './Welcome';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return  (
//     <div className="App">
//       <Header/>
//       <MyButton/>
//     </div>
//   );
// }

  function App() {

    let time = 5;

    if (time < 10) {
      console.log('lebih kecil dari 10');
    } else if (time < 20) {
      console.log('lebih kecil dari 20');
    } else {
      console.log('yang lain');
    }

    let fruitType = "Bananas";

    switch (fruitType) {
      case "Oranges":
        console.log('Buah Jeruk');
        break;
      case 'Apples':
        console.log('Buah Apple');
        break;
      case 'Bananas':
        console.log('Buah Pisang');
        break;
      default:
        console.log('Sorry, kita tidak kenal ${fruitType}');
    }

    const myHonda = {
      type: 'SUV',
      color: 'red',
      wheels: 4
    };

    console.log(myHonda.type)

    return (
      
      <div className="App">
        <p>{myHonda.color}</p>
          <Welcome/>
      </div>
    );
  }

export default App;

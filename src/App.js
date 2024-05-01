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

    // If Else Statement
    let time = 5;

    if (time < 10) {
      console.log('lebih kecil dari 10');
    } else if (time < 20) {
      console.log('lebih kecil dari 20');
    } else {
      console.log('yang lain');
    }

    // Switch Case Statement
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

    // Object

    const myHonda = {
      type: 'SUV',
      color: 'red',
      wheels: 4
    };

    console.log(myHonda.type)

    // Loop-For
    for (let step = 0; step < 5; step++) {
      console.log('Step :', step)
    }

    //  Loop-For In (Object)
    const mycar = {brand: 'honda', type: 'SUV', year: 2022}

    for (let key in mycar) {
      console.log(key , ':' , mycar[key])
    }

    // Loop-For in (Array)
    const mynumber = [88, 34, 19, 16, 55]

    for (let key in mynumber) {
      console.log(key, ':' , mynumber[key])
    }

    // Function

    function square(number) {
      return number * number;
    }

    let mySquare = square(12);
    console.log(mySquare)

    // Function dalam parameter

    function luasBangunan(panjang,lebar) {
      return 2 * (panjang + lebar)
    }

    let hasil = luasBangunan(3,5)
    console.log(hasil)

    // Double Quote, Single Quote, Backticks

    const total = 12500;
    console.log("Total Payment : " , total)
    console.log(`Total Payment : ${total}`)

    //Assignment no 1 & no 2

    let cityName = "Denpasar";
    let number1 = 200;
    let number2 = 800;

    console.log(cityName)
    console.log(number1 + number2)

    // Assignment no 3
    function clone3(param) {
      console.log(`${param} ${param} ${param}`)
    }

    let myClone = clone3('Doni')
    console.log(myClone)

    // Assisgment no 4
    const cartItem = {
      itemID: 1,
      itemName: "Shoe Nike",
      itemPrice: "$56",
      itemQuantity: 2,
      cartID: 201
    }

    function display() {
      return (
        <div>
          <p>Item Name : {cartItem.itemName}</p>
          <p>Item Quantity : {cartItem.itemQuantity}</p>
        </div>
      )
    }



    

    // Assigment no 5
    console.log("This is Bootcamp")
    console.log('Fullstact Web Developer')
    console.log(`by "Koding Akademi"`)

    // Assigment no 6
    const fruits = ["Jambu", "Mangga", "Durian", "Anggur"]

    for (let key in fruits) {
        console.log(key)
    }

    console.log(fruits.length)

    fruits[2] = "Salak"

    for (let key in fruits) {
        console.log(fruits[key])
    }

    console.log(fruits)

    fruits.push('Rambutan')
    for (let key in fruits) {
        console.log(fruits[key])
    }
    console.log(fruits)

    // Assisgment no 7
    function cek(param1, param2) {
      let total = param1 + param2
      if (total >= 100) {
        return true
      } else {
        return false
      }    
    }
    let myCek = cek(50,50)
    console.log(myCek)

    // Assisgment no 8
    const student = {
      name : 'Wayan Suksme',
      age: 30,
      hobbies: ['baca', 'ngoding', 'tidur']
    }

    for (const key in student) {
      console.log(`${key} :  ${student[key]}`)
    }
   

    return (  
      <div className="App">
        <p>{myHonda.color}</p>
          <Welcome/>
          {display()}
      </div>
    );
  }

export default App;

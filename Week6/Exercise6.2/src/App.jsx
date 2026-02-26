import './App.css'

function App() {
  const myName = "Sam";
  const myAge = 35;
  //This is a ternerary
  const isLegal = myAge > 20 ? "able to buy alcohol." : "unable to buy alcohol.";
  const myHeight = 63;

  return (
    <>
      <div>
        <h1>Hi, everyone!</h1>
        <p>My name is {myName} and I'm {isLegal}</p>
        {/*This is a conditional*/}
        {myHeight > 54 && (<p>I can also ride all of the rides at amusement parks.</p>)}
        {/*This is another ternerary*/}
        <p>While I do consider myself short, I am {myHeight > 54 ? "tall enough to ride roller coasters." : "tall enough to ride some roller coasters."}</p>
      </div>
    </>
  )
}

export default App
import ClassEvent from './componentes/ClassEvent';
import Counter from './componentes/Counter';
import FunctionEvent from './componentes/FunctionEvent';
import  Hello  from './componentes/Hello';
import Message from './componentes/Message';
import  Profile  from './componentes/Profile';
import Resume from './componentes/Resume';
function App() {

// const[waiting,setWaiting]=useState(true);

  return (
    <div className="App">
      <FunctionEvent/>
      <ClassEvent/>
      <Counter/> 
      {/* Counter - an example of component with states  */}
      {/* <Counter/> 
      <Resume name="Ron" lastname="Ocheri"/> 
      <Profile name="Ron" lastname="Ocheri"/> */}


      {/* Profile, Message - an example of component with props */}
     {/* <Hello/>
     <Profile name="Ron" lastname="Ocheri">
       <h5>This is a child of Ron</h5>
      </Profile>
     <Profile name="Sean"/>
     <Message content="Bla"></Message> */}
    </div>
  );
}

export default App;

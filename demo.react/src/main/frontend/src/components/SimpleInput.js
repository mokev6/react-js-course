import {useRef, useState, useEffect} from 'react';


const SimpleInput = (props) => {

  const [sname, setSname] = useState('');
  const ssname = useRef('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [dataFromServer, setDataFromServer] = useState([]);
  
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch('/people/get');

      const json = await response.json();

      setDataFromServer([... json]);
    } 
    getDatas();
  }, []);

  let touched = email.trim() !== '';

  const onSubmitHandler = async event => {
    event.preventDefault();
        
    if (email.trim() === '' || !email.includes('@')) {
        setIsEmailValid(false);
        return;
    }
    
    setIsEmailValid(true);

    const dataToSend = {name : sname, email};

    const response = await fetch("/people/save", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    setDataFromServer([...json])
  };

  console.log("ici");

  const changement = event => {
    console.log('onChange');
    setSname(event.target.value);
  };


  const emailOnchangeHandler =  event => {
    setEmail(event.target.value);
    
    if (event.target.value.includes('@')) {
        setIsEmailValid(true);
    } else {
        setIsEmailValid(false);
    }
  };

 

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={changement} value={sname}/>
        <label htmlFor='email'>Your email</label>
        <input type='text' id='email' value={email} onChange={emailOnchangeHandler}/>
        {touched && !isEmailValid && <p>Wrong email</p>}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
      <div>
        {dataFromServer.map(data => <p key={data.id}>{data.name} {data.email}</p>)}
      </div>
    </form>
  );
};

export default SimpleInput;

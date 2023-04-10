import { useState } from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';
import data from './data';


function App() {
  const [input, setInput] = useState("");

  const filteredData = data.filter     ((user) => {
   const name = `${user.title} ${user.firstName} ${user.lastName}`;
 return name.toLowerCase().includes (input.toLowerCase());
   });

const profile = filteredData.map      ((user) =>{
   return <UserProfile key={user.id} {...user} />;
 });

   return(
    <>
      <input type="text" placeholder="Search by name..." onChange={(e) => setInput(e.target.value)} />

     <section className="profile-item">
      {profile}</section>
    </>
   );
}
export default App;
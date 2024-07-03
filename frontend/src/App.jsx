import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import City from './components/City'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import { apiGanerator } from './helper/apiGanerator';
import UpdateUser from './components/UpdateUser';

const App = () => {


  const [updateUserId, setUpdateUserId] = useState(null);

  

 


  // console.log(updateUserData);


  return (

    <main >

      <ToastContainer
        position="top-center"
        className='mt-10'
      />

      <div className='mt-10 mx-8'>

        <City />


        {updateUserId ? (
          // <UpdateUser setUpdateUserId={setUpdateUserId} updateUserData={updateUserData} updateUserId={updateUserId} />
          <UpdateUser setUpdateUserId={setUpdateUserId} updateUserId={updateUserId} />

        ) : (
          <UserForm />

        )}


        <UserList setUpdateUserId={setUpdateUserId} />

      </div>




    </main>



  )
}

export default App
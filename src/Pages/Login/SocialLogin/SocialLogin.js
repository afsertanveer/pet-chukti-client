import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
   const handleGoogleSignIn =  () =>{
    googleSignIn()
    .then(result=>{
      const user = result.user;
      toast.success('Successfully logging in using Google');
      navigate('/');
    })
   }
    return (
      <div className="text-center">
        <p>
          <small>Social login</small>
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-ghost">
          <FaGoogle className='mr-1'></FaGoogle>
          Google
        </button>
      </div>
    );
};

export default SocialLogin;
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
   const handleGoogleSignIn =  () =>{
    googleSignIn()
    .then(result=>{
      const user = result.user;
      const currentUser = {
        email: user?.email,
      };
      toast.success('Successfully logging in using Google');
      fetch("https://pet-chukti-server.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
          navigate(from, { replace: true });
        });
    })
    .catch(err=>console.log(err))
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
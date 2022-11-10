import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../Assets/others/loginBanner.jpg';
import { AuthContext } from '../../../Context/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import useTitle from './../../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const {signInUser,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
            const user = result.user;
            toast.success('Succesfully Logged in');

            const currentUser={
              email:user?.email
            }
            //get jwt token
            fetch("https://pet-chukti-server.vercel.app/jwt",{
              method:"POST",
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              localStorage.setItem('token',data.token);
              navigate(from, { replace: true });
            })



        })
        .catch(err=>console.log(err))
    }
    if(loading){
        return (
          <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        );
    }
    return (
      <div className="hero mt-24 min-h-screen ">
        <div className="hero-content grid gap-16 md:grid-cols-2  lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img} className="h-full" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  py-20">
            <form onSubmit={handleLogIn} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center">
              New to PetChukti?
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
            <div>
                <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
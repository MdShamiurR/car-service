import { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const {signInUser}=useContext(AuthContext)
  
    const handleLogin =(event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password = form.password.value;
        console.log('login email:',email,'login password:',password);
        signInUser(email,password)
        .then(result=>{
          const existUser = result.user;
          console.log('login user',existUser)
        })
        .catch(error=>{
          console.log(error)
        })
        
        
    }
    return (
       <div className="hero mt-16 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body pt-60 border-1 h-fit border-[#D0D0D0]">
        <div className="-translate-y-40 ">
            <h1 className="text-4xl text-center font-bold text-[#444]">Login</h1>
           <form onSubmit={handleLogin}>
             <div className="form-control">
                <label className="label">
                <span className="label-text text-[#444] font-bold">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text text-[#444] font-bold">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
             </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary font-[#FFF] bg-[#FF3811] border-white" type="submit" value="Sign In" />
            </div>
           </form>
        <label className="label place-content-center mt-5">
            <a href="#" className="label-text-alt link link-hover font-bold ">Or Sign In with</a>
          </label>
          <p className="text-center text-[#737373] my-3">New user? <Link className="text-[#FF3811] font-bold" to={'/signup'}>Sign up</Link></p>
        </div>
        
      </div>
    </div>
    <div className="mr-10">
      <img src={loginImg} className=" max-w-sm rounded-lg " />
    </div>
   
  </div>
</div>
    );
};

export default Login;
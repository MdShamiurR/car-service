import { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
  const {createUser}=useContext(AuthContext) ;
  
    const handleSignUp =event=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const email=  form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then((result)=>{
          const user =result.user;
          console.log(user);
        })
        .catch((error)=>{
          // const errorCode =error.code;
          // const errorMessage=error.message;
          // console.log('errorCode:',errorCode,'errorMessage:',errorMessage)
          console.log(error)
        })
        
    }
    return (
       <div className="hero mt-16 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body pt-60 border-1 h-fit border-[#D0D0D0]">
        <div className="-translate-y-40 ">
            <h1 className="text-4xl text-center font-bold text-[#444]">Sign Up</h1>
           <form onSubmit={handleSignUp}>
             <div className="form-control">
                <label className="label">
                <span className="label-text text-[#444] font-bold">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
            </div>
             <div className="form-control">
                <label className="label">
                <span className="label-text text-[#444] font-bold">Email</span>
                </label>
                <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text text-[#444] font-bold">Confirm Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
             </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary font-[#FFF] bg-[#FF3811] border-white" type="submit" value="Sign Up" />
            </div>
           </form>
        {/* <label className="label place-content-center mt-5">
            <a href="#" className="label-text-alt link link-hover font-bold ">Or Sign Up with</a>
          </label> */}
          <p className="text-center text-[#737373] my-3">Already have an account? <Link className="text-[#FF3811] font-bold" to={'/login'}>Login</Link></p>
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

export default SignUp;
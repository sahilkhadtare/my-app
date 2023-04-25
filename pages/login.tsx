import LoginComponent from "../components/Login";

const Login = () => {
  return (
    <div className="bg-white h-[100vh] w-full flex align-items justify-center">
      <div className="w-1/3 p-10 h-fit my-auto bg-[#D3D3D3] shadow-lg">
        <img
          className="h-16 mb-2 mx-auto"
          src="https://poc-objectedge.frontend.site/images/logo/default-alternate.png"
        />
        <h1 className="text-[30px] text-center font-bold">Log In</h1>
        <LoginComponent />
      </div>
    </div>
  );
};
export default Login;

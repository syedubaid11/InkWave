import { useAuth0  } from "@auth0/auth0-react";

export const Signup = () => {
  const { user,loginWithRedirect,logout} = useAuth0();
  console.log(user)
  return (
    <>
    <button className="border-2"onClick={() => loginWithRedirect()}>Log In</button>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>;
    </>

    )
};


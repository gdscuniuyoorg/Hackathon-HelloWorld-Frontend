import LandingPageBenefits from "./components/LandingPageBenefits";
import LandingPageHeader from "./components/LandingPageHeader";
import LandingPageSectionOne from "./components/LandingPageSectionOne";
import NavigateAttendance from "./components/NavigateAttendance";
import LandingPageMaps from "./components/LandingPageMaps";
import LandingPageFooter from "./components/LandingPageFooter";
import { useState } from "react";
import Login from "./main/Login";
import SignUp from "./main/SignUp";
export default function LandingPage() {
  const [login, setLogin] = useState(false);
  function handleLogin() {
    setLogin(true);
  }
  const [signUp, setSignUp] = useState(false);
  function handleSignUp() {
    setSignUp(true);
  }
  return (
    <>
      {!login && !signUp && (
        <>
          <LandingPageHeader SignUp={handleSignUp} />
          <LandingPageSectionOne Login={handleLogin} SignUp={handleSignUp} />
          <LandingPageBenefits SignUp={handleSignUp} />
          <NavigateAttendance />
          <LandingPageMaps />
          <LandingPageFooter />
        </>
      )}
      {login && <Login />}
      {signUp && <SignUp />}
    </>
  );
}

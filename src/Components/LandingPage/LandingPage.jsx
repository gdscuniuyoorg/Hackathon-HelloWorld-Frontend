<<<<<<< HEAD
import LandingPageBenefits from "./components/LandingPageBenefits";
import LandingPageHeader from "./components/LandingPageHeader";
import LandingPageSectionOne from "./components/LandingPageSectionOne";
import NavigateAttendance from "./components/NavigateAttendance";
import LandingPageMaps from "./components/LandingPageMaps";
import LandingPageFooter from "./components/LandingPageFooter";
import { useState } from "react";
import GetStarted from "./main/GetStarted";
export default function LandingPage() {
  const [getStarted, setGetStarted] = useState(false);
  function handleGetStarted() {
    setGetStarted(true);
  }

  return (
    <>
      {!getStarted && (
        <>
          <LandingPageHeader GetStarted={handleGetStarted} />
          <LandingPageSectionOne GetStarted={handleGetStarted} />
          <LandingPageBenefits GetStarted={handleGetStarted} />
          <NavigateAttendance />
          <LandingPageMaps />
          <LandingPageFooter />
        </>
      )}
      {getStarted && <GetStarted />}
    </>
  );
}
=======
import LandingPageBenefits from "./components/LandingPageBenefits";
import LandingPageHeader from "./components/LandingPageHeader";
import LandingPageSectionOne from "./components/LandingPageSectionOne";
import NavigateAttendance from "./components/NavigateAttendance";
import LandingPageMaps from "./components/LandingPageMaps";
import LandingPageFooter from "./components/LandingPageFooter";
import { useState } from "react";
import GetStarted from "./main/GetStarted";
export default function LandingPage() {
  const [getStarted, setGetStarted] = useState(false);
  function handleGetStarted() {
    setGetStarted(true);
  }

  return (
    <>
      {!getStarted && (
        <>
          <LandingPageHeader GetStarted={handleGetStarted} />
          <LandingPageSectionOne GetStarted={handleGetStarted} />
          <LandingPageBenefits GetStarted={handleGetStarted} />
          <NavigateAttendance />
          <LandingPageMaps />
          <LandingPageFooter />
        </>
      )}
      {getStarted && <GetStarted />}
    </>
  );
}
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192

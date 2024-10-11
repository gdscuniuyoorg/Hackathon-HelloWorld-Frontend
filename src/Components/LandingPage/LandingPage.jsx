import LandingPageBenefits from "./components/LandingPageBenefits";
import LandingPageFooter from "./components/LandingPageFooter";
import LandingPageHeader from "./components/LandingPageHeader";
import LandingPageMaps from "./components/LandingPageMaps";
import LandingPageSectionOne from "./components/LandingPageSectionOne";
import NavigateAttendance from "./components/NavigateAttendance";

export default function LandingPage() {
    return (
        <>
            <LandingPageHeader />
            <LandingPageSectionOne />
            <LandingPageBenefits />
            <NavigateAttendance />
            <LandingPageMaps />
            <LandingPageFooter />
        </>
    )
}
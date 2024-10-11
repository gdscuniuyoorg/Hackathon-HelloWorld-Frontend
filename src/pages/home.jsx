import LandingPageBenefits from "../Components/LandingPage/components/LandingPageBenefits";
import LandingPageFooter from "../Components/LandingPage/components/LandingPageFooter";
import LandingPageHeader from "../Components/LandingPage/components/LandingPageHeader";
import LandingPageMaps from "../Components/LandingPage/components/LandingPageMaps";
import LandingPageSectionOne from "../Components/LandingPage/components/LandingPageSectionOne";
import NavigateAttendance from "../Components/LandingPage/components/NavigateAttendance";

export default function Home() {
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
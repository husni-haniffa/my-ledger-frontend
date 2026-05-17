import LegalPage from "@/features/legal/LegalPage"
import { privacyPolicy } from "@/features/legal/legal.content"

const PrivacyPolicyPage = () => {
    return <LegalPage {...privacyPolicy} />
}

export default PrivacyPolicyPage
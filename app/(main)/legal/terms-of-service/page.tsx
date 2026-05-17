import LegalPage from "@/features/legal/LegalPage"
import { termsOfService } from "@/features/legal/legal.content"

const TermsOfServicePage = () => {
    return <LegalPage {...termsOfService} />
}

export default TermsOfServicePage
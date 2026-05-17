export type LegalSection = {
    title: string
    description?: string
    items?: string[]
}

export const privacyPolicy = {
    badge: "Privacy Policy",
    title: "Privacy Policy",
    updatedAt: "May 18, 2026",
    intro:
        "This Privacy Policy explains how MyLedger collects, uses, stores, and protects your information when you use our platform and services.",
    sections: [
        {
            title: "Information We Collect",
            items: [
                "Account information such as full name, email address, and authentication details provided through Clerk.",
                "Store and business information such as store name, email address, phone number, and business address if provided.",
                "Business operational data such as inventory, orders, expenses, invoices, sales analytics, and performance metrics.",
                "Payment processing information handled securely through third-party providers such as WebxPay. MyLedger does not store full card or banking details directly.",
            ],
        },
        {
            title: "How We Use Your Information",
            items: [
                "Create and manage your account.",
                "Provide access to the platform.",
                "Generate invoices and reports.",
                "Manage subscriptions and billing.",
                "Improve platform functionality and performance.",
                "Provide customer support.",
                "Maintain platform security and prevent abuse.",
            ],
        },
        {
            title: "Third-Party Services",
            items: [
                "Clerk — authentication and account management.",
                "Supabase — database and backend infrastructure.",
                "WebxPay — payment processing.",
                "Vercel — hosting and deployment.",
            ],
        },
        {
            title: "Data Security",
            description:
                "We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, loss, or disclosure.",
        },
        {
            title: "Data Retention",
            description:
                "We retain user and business data for as long as necessary to provide the service and maintain operational records. Users may request account or data removal by contacting support.",
        },
        {
            title: "User Rights",
            items: [
                "Request correction of account information.",
                "Request account removal.",
                "Ask questions regarding your data.",
                "Request support regarding privacy concerns.",
            ],
        },
        {
            title: "Cookies & Tracking",
            description:
                "MyLedger currently does not use advanced advertising trackers or behavioral monitoring tools such as marketing pixels or third-party ad profiling systems.",
        },
        {
            title: "Children’s Privacy",
            description:
                "MyLedger is intended for business and professional use and is not directed toward children under the age of 13.",
        },
        {
            title: "Changes to This Privacy Policy",
            description:
                "We may update this Privacy Policy from time to time to reflect service improvements, legal updates, or operational changes.",
        },
        {
            title: "Contact Us",
            items: ["MyLedger", "Colombo, Sri Lanka", "Email: hello@myledger.lk"],
        },
    ],
}

export const termsOfService = {
    badge: "Terms of Service",
    title: "Terms of Service",
    updatedAt: "May 18, 2026",
    intro:
        "These Terms of Service govern your use of MyLedger. By accessing or using MyLedger, you agree to comply with these Terms.",
    sections: [
        {
            title: "Eligibility",
            description:
                "You must be at least 18 years old or legally authorized to operate a business or use business software services in your jurisdiction.",
        },
        {
            title: "Account Responsibilities",
            items: [
                "Maintain the confidentiality of your account.",
                "Ensure your account information is accurate.",
                "Take responsibility for all activity occurring under your account.",
                "Do not improperly share accounts, resell the platform, attempt unauthorized access, or abuse the service.",
            ],
        },
        {
            title: "Acceptable Use",
            items: [
                "Do not use MyLedger for illegal activities.",
                "Do not use MyLedger for fraudulent transactions.",
                "Do not upload harmful or malicious content.",
                "Do not violate intellectual property rights.",
                "Do not interfere with platform operations.",
            ],
        },
        {
            title: "Subscription & Billing",
            description:
                "MyLedger currently operates on a subscription-based model. New users may receive a free 30-day trial period. After the trial period, continued access may require payment of a subscription fee.",
        },
        {
            title: "Refund Policy",
            items: [
                "Payments made to MyLedger are generally non-refundable.",
                "We do not provide partial refunds.",
                "We do not provide refunds for unused subscription periods.",
                "Refund requests related to accidental duplicate charges or billing errors may be reviewed case by case.",
            ],
        },
        {
            title: "Service Availability",
            description:
                "We aim to provide reliable platform access, but we do not guarantee uninterrupted or error-free operation at all times.",
        },
        {
            title: "User Data",
            description:
                "Users retain ownership of their business data submitted to MyLedger. We do not sell customer business data to third parties.",
        },
        {
            title: "Intellectual Property",
            description:
                "All platform content, software, branding, design, and functionality associated with MyLedger remain the property of MyLedger.",
        },
        {
            title: "Account Suspension & Termination",
            description:
                "MyLedger reserves the right to suspend or terminate accounts that violate these Terms or engage in abuse or illegal activity.",
        },
        {
            title: "Limitation of Liability",
            description:
                "MyLedger is provided on an “as is” and “as available” basis.",
        },
        {
            title: "Changes to These Terms",
            description: "We may update these Terms periodically.",
        },
        {
            title: "Governing Jurisdiction",
            description:
                "These Terms shall generally be governed in accordance with the laws and regulations applicable in Sri Lanka.",
        },
        {
            title: "Contact Information",
            items: ["MyLedger", "Colombo, Sri Lanka", "Email: hello@myledger.lk"],
        },
    ],
}
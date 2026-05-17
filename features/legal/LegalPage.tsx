import { CheckCircle2 } from "lucide-react"
import { LegalSection } from "./legal.content"

interface LegalPageProps {
    badge: string
    title: string
    updatedAt: string
    intro: string
    sections: LegalSection[]
}

const LegalPage = ({
    badge,
    title,
    updatedAt,
    intro,
    sections,
}: LegalPageProps) => {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <div className="container max-w-5xl">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold uppercase tracking-tight text-emerald-700">
                        {badge}
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-3 text-base font-semibold text-slate-500">
                        Last updated: {updatedAt}
                    </p>

                    <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-600">
                        {intro}
                    </p>
                </div>

                <div className="mt-6 grid gap-4">
                    {sections.map((section, index) => (
                        <div
                            key={section.title}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-700">
                                    {index + 1}
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                                        {section.title}
                                    </h2>

                                    {section.description && (
                                        <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                                            {section.description}
                                        </p>
                                    )}

                                    {section.items && (
                                        <div className="mt-4 grid gap-3">
                                            {section.items.map((item) => (
                                                <div key={item} className="flex items-start gap-3">
                                                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-600" />
                                                    <p className="text-base font-medium leading-7 text-slate-600">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm font-medium text-slate-500">
                    This page is provided for transparency. For legal advice, please
                    consult a qualified professional.
                </p>
            </div>
        </section>
    )
}

export default LegalPage
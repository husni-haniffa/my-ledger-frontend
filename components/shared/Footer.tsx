import Link from 'next/link'

const footers = [
    {
        id: 1,
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        id: 2,
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" },
            { label: "About", href: "#about" },
        ],
    },
    {
        id: 3,
        title: "Company",
        links: [
            { label: "hello@myledgerlk.com", href: "mailto:contact@example.com" },
            { label: "+94 (76) 905-0210", href: "tel:+94769050210" },
            { label: "Dehiwala, Mount Lavinia", href: "#address" },
        ],
    },
];

const Footer = () => {
  return (
    <footer className='bg-slate-950 py-8' id='contact'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div className='flex flex-col gap-3'>
                <Link href={'/'} className='text-xl xl:text-2xl font-bold text-emerald-500'>
                    MyLedger
                </Link>
                <p className='max-w-lg text-white'>
                    A digital business ledger built for online entrepreneurs and founders —
                    to record expenses, manage orders, monitor inventory, and analyze
                    business performance, all in one place. Replace the manual work, go
                    fully digital, and get complete visibility over your business — from
                    day one.
                </p>
            </div>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>

                {footers.map((footer) => (
                    <div key={footer.id} className='flex flex-col gap-3'>
                        <h1 className='font-semibold text-emerald-500'>{footer.title}</h1>
                        <div className='flex flex-col gap-2'>
                            {footer.links.map((link) => (
                                <Link href={link.href} key={link.href} className='text-white'>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
           </div>
        </div>
        <div className='text-muted-foreground text-xs container flex flex-wrap items-center justify-between gap-6 py-8 mt-8'>
            <p>&copy; {new Date().getFullYear()} MyLedger. All rights reserved</p>
            <p>Husni Haniffa</p>
        </div>
    </footer>
  )
}

export default Footer
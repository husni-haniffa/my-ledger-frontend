"use client"
import Link from 'next/link'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '../ui/sidebar'
import { SignOutButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

const categories = [
    {
        label: "Overview",
        links: [
            { label: "Dashboard", href: "/admin" },
             { label: "Users", href: "/admin/users" },
              { label: "Payments", href: "/admin/payments" },
               { label: "Analytics", href: "/admin/analytics" }

        ],
    },
]

const AdminSidebar = () => {
    const pathname = usePathname();
    const { setOpenMobile } = useSidebar()
  return (
    <Sidebar>
        <SidebarHeader className='px-4 py-4 border-b'>
            <Link href={'/'} className='text-xl lg:text-2xl font-bold text-emerald-700'>
                MyLedger
            </Link>
        </SidebarHeader>
          <SidebarContent>
              {categories.map((category) => (
                  <SidebarGroup key={category.label} className='bg-white'>
                      <SidebarGroupLabel className='uppercase'>
                          {category.label}
                      </SidebarGroupLabel>
                      <SidebarMenu>
                          {category.links.map((link) => (
                              <SidebarMenuItem key={link.label}>
                                  <SidebarMenuButton asChild isActive={pathname === link.href}>
                                      <Link href={link.href} onClick={() => setOpenMobile(false)}>
                                          {link.label}
                                      </Link>
                                  </SidebarMenuButton>
                              </SidebarMenuItem>
                          ))}
                      </SidebarMenu>
                  </SidebarGroup>
              ))}
          </SidebarContent>
        <SidebarFooter>
              <SignOutButton>
                  <Button className="bg-emerald-950">
                      Sign out
                  </Button>
              </SignOutButton>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AdminSidebar
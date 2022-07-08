import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { IoIosMenu } from "react-icons/io";

const LINKS = [
  { label: "Introduction", href: "/" },
  { label: "Analysis of Constitutions", href: "/article" },
  { label: "Creating Constitutions", href: "/guide" },
  { label: "Template for Constitutions", href: "/template" }
]

export default function Sidebar() {
  const router = useRouter()
  const [open, setOpen] = useState(true)

  const calculateBg = (href) => (
    router.pathname === href ||
    (router.pathname === "" && href === "/")
  ) ? 'bg-gray-hover' : 'bg-gray-wash'

  const handleResize = () => {
    setOpen(window.innerWidth > 1280)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const bg = open ? "bg-gray-wash border-r border-gray" : ""

  console.log(open)
  return <div className={`h-[100vh] z-[9999] flex flex-col fixed justify-center font-body text-xl xl:bg-transparent xl:border-none ${bg}`}>
    <IoIosMenu className="absolute left-0 top-0 m-8 xl:hidden block cursor-pointer" size={40} onClick={() => setOpen(state => !state)} />
    <div className={open ? "px-32" : "hidden pointer-events-none"}>
      <h2 className="font-bold">Table of Contents</h2>
      <ol className="list-[upper-roman] ml-4 my-4">
        {LINKS.map((link, i) => <li key={i} className="my-2">
          <Link href={link.href}>
            <a className={`no-underline rounded-md ${calculateBg(link.href)} hover:bg-gray-hover transition ease-in-out px-1`}>{link.label}</a>
          </Link>
        </li>)}
      </ol>
    </div>
  </div>
}

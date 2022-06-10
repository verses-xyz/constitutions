import Link from 'next/link'
import { useRouter } from 'next/router'

const LINKS = [
  { label: "Introduction", href: "/" },
  { label: "Article", href: "/article" },
  { label: "Constitutions", href: "/constitutions" },
  { label: "Guide", href: "/guide" },
]

export default function Sidebar() {
  const router = useRouter()
  const calculateBg = (href) => (
    router.pathname === href ||
    (router.pathname === "" && href === "/")
  ) ? 'bg-gray-hover' : 'bg-gray-wash'

  return <div className="font-body text-xl ml-36 fixed -translate-y-1/2 top-1/2">
    <h2 className="font-bold">Table of Contents</h2>
    <ol className="list-[upper-roman] ml-4 my-4">
      {LINKS.map((link, i) => <li key={i} className="my-2">
        <Link href={link.href}>
          <a className={`no-underline rounded-md ${calculateBg(link.href)} hover:bg-gray-hover transition ease-in-out px-1`}>{link.label}</a>
        </Link>
      </li>)}
    </ol>
  </div>
}

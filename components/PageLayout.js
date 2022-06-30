import Head from './Head'
import Sidebar from './Sidebar'

export default function LayoutComponents({ children }) {
  return <>
    <Head />
    <div className="w-full flex">
      <Sidebar />
      <div className="font-body my-24 text-xl xl:w-2/5 mx-auto prose w-4/5">
        {children}
      </div>
    </div>
  </>;
}

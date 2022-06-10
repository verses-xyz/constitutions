import Head from './Head'
import Sidebar from './Sidebar'

export default function LayoutComponents({ children }) {
  return <>
    <Head />
    <div className="w-full flex my-12">
      <div className="h-[100vh] flex-none w-20"><Sidebar /></div>
      <div className="font-body text-xl w-2/5 mx-auto">
        {children}
      </div>
    </div>
  </>;
}

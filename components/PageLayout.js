import Head from './Head'

export default function LayoutComponents({ children }) {
  return <>
    <Head />
    <div className="w-2/5 mx-auto">
      <div></div>
      <div className="font-body text-xl">
        {children}
      </div>
    </div>
  </>;
}

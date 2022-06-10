import Head from './Head'

export default function LayoutComponents({ children }) {
  return <div className="font-body">
    <Head />
    {children}
  </div>;
}

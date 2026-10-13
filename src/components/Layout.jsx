import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Layout(){return <div className="min-h-screen bg-cream text-slate-800"><Navbar/><main><Outlet/></main><Footer/><ScrollRestoration/></div>}

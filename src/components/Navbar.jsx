import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Leaf } from 'lucide-react';
const links = [['/', 'Home'], ['/services', 'Services'], ['/about', 'About Us'], ['/tenders', 'Tenders'], ['/contact', 'Contact']];
export default function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/95 backdrop-blur"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 lg:px-8">
    <Link to="/" className="flex items-center gap-3" aria-label="FamilyRoots home"><span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-leaf"><Leaf size={24}/></span><span><strong className="block font-display text-lg font-extrabold tracking-tight text-forest sm:text-xl">FamilyRoots</strong><small className="block text-[8px] font-bold tracking-[0.19em] text-slate-600">GROUNDS & LANDSCAPING</small></span></Link>
    <nav className="order-3 flex w-full items-center gap-5 overflow-x-auto pb-1 text-xs font-semibold text-slate-600 sm:order-none sm:w-auto sm:pb-0 md:gap-6 md:text-sm">{links.map(([to,label])=><NavLink key={to} to={to} end={to==='/'} className={({isActive})=>`whitespace-nowrap transition hover:text-sage ${isActive?'text-forest':''}`}>{label}</NavLink>)}</nav>
    <Link to="/contact" className="inline-flex items-center gap-2 rounded bg-forest px-3 py-3 text-xs font-bold text-white transition hover:bg-sage sm:px-4 sm:text-sm">Request a Quote <ArrowUpRight size={16}/></Link>
  </div></header>;
}

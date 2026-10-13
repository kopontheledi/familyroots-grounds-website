import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Tenders from './pages/Tenders';
import Contact from './pages/Contact';
const router=createBrowserRouter([{path:'/',element:<Layout/>,children:[{index:true,element:<Home/>},{path:'services',element:<Services/>},{path:'about',element:<About/>},{path:'tenders',element:<Tenders/>},{path:'contact',element:<Contact/>}]}]);
export default function App(){return <RouterProvider router={router}/>;}

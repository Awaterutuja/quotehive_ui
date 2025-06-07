
import { useLocation } from 'react-router-dom';
import {Header, QuotesList,FilterBar} from '../../components';
import './home.css';
const Home = () =>{
    const location = useLocation();
    const email = location.state?.email || "Guest"; // Get email from state, default to undefined if not present
    return(
       <>
       <Header username={email} />
        <div className='flex flex-row'>
            <FilterBar/>
            <QuotesList />
        </div>
       </>
    )
}

export default Home;
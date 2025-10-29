import './Header.css';

function Header(){
    return (
        <div className='mynav'>
            <img src='https://edupoly.in/assets/fullstack-training-hyderabad.png'/>
            <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>ContactUs</li>
            </ul>
        </div>
    )
}

export default Header;
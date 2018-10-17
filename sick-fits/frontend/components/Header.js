import Link from 'next/link';

const Header = () => (
    <div>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/sell'>
            <a>Sell</a>
        </Link>
    </div>
);

export default Header;

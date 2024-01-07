import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li className='homeLink'>
                        <a href="">Home</a>
                    </li>
                    <li className='profileLink'>
                        <a href="">
                            <Image
                                src="/profile_logo.png"
                                alt='User Profile'
                                width={54}
                                height={0}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
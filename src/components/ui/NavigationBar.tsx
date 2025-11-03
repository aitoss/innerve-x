export default function NavigationBar() {

    const navItems = ["Prizes", "Tracks", "Timeline", "Sponsor"];

    return (
        <ul className="flex gap-[4vw]">
            {navItems.map((item) => (
                <li key={item}>
                    <a href="#" className="text-white text-2xl  hover:text-gray-300 [text-shadow:_0px_3px_0px_rgb(0_0_0_/_1.00)]">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
}
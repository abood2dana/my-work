import Link from "next/link";

const Navlink =({ href, title}) => {
    return (
        <Link href="{href}" className="block py-2 pl-3 pr-4 text-[#ADB7BE]">
        {title}
        </Link>
    );
};

export default Navlink;
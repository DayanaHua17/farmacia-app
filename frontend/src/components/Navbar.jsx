import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Brand/Logo */}
                <Link href="/" className="text-xl font-bold hover:text-gray-300">
                    FarmaciaSys
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6 items-center">
                    <Link href="/laboratorios" className="hover:text-gray-300 transition duration-200">
                        Laboratorios
                    </Link>
                    <Link href="/medicamentos" className="hover:text-gray-300 transition duration-200">
                        Medicamentos
                    </Link>

                    {/* Enlaces ahora activos */}
<Link href="/ventas" className="hover:text-gray-300 transition duration-200">
    Ventas
</Link>
<Link href="/reportes" className="hover:text-gray-300 transition duration-200">
    Reportes
</Link>
                </div>
            </div>
        </nav>
    );
}
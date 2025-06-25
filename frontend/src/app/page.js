import Link from 'next/link';
import { CheckCircleIcon, ExclamationTriangleIcon, BuildingLibraryIcon, ArchiveBoxIcon, ShoppingCartIcon, ChartBarIcon } from '@heroicons/react/24/outline';


export default function HomePage() {
  // --- DATOS DE SIMULACIÓN (MOCK DATA) - AHORA CON COLORES DE FONDO ---
  const stats = [
    { name: 'Laboratorios Activos', value: '12', icon: BuildingLibraryIcon, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { name: 'Medicamentos Registrados', value: '152', icon: ArchiveBoxIcon, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
    { name: 'Ventas del Mes (Simulado)', value: 'S/ 1,850', icon: ShoppingCartIcon, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600' },
    { name: 'Alertas de Stock Bajo', value: '8', icon: ExclamationTriangleIcon, bgColor: 'bg-red-100', iconColor: 'text-red-600' },
  ];

  const recentActivity = [
    { type: 'Nuevo Medicamento', description: 'Paracetamol 500mg agregado al inventario.', time: 'hace 5 minutos' },
    { type: 'Nuevo Laboratorio', description: 'Se ha registrado al proveedor "PharmaPerú".', time: 'hace 2 horas' },
    { type: 'Venta Registrada', description: 'Venta #0512 por un total de S/ 85.50.', time: 'hace 3 horas' },
    { type: 'Actualización de Stock', description: 'Stock de "Amoxicilina" actualizado a 250 unidades.', time: 'ayer' },
  ];

  const mainModules = [
    { href: '/laboratorios', title: 'Gestionar Laboratorios', description: 'Añade, edita y consulta la información de los laboratorios.', icon: BuildingLibraryIcon, color: 'blue' },
    { href: '/medicamentos', title: 'Gestionar Medicamentos', description: 'Controla el inventario, precios y detalles de los medicamentos.', icon: ArchiveBoxIcon, color: 'green' },
    { href: '/ventas', title: 'Módulo de Ventas', description: 'Registra ventas, emite comprobantes y gestiona transacciones.', icon: ShoppingCartIcon, color: 'indigo' },
    { href: '/reportes', title: 'Generación de Reportes', description: 'Visualiza el rendimiento de tu negocio con reportes detallados.', icon: ChartBarIcon, color: 'purple' },
  ];

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <div className="space-y-16">
      {/* === SECCIÓN HERO === */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Dashboard de FarmaciaSys
        </h1>
        <p className="text-xl text-gray-600">
          Bienvenido de nuevo. Aquí tienes un resumen del estado de tu sistema.
        </p>
      </div>

      {/* === SECCIÓN DE ESTADÍSTICAS === */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">Estadísticas Clave</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className={`${stat.bgColor} p-6 rounded-2xl shadow-lg flex items-start space-x-4`}>
              <div className={`p-3 rounded-lg ${stat.iconColor}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === SECCIÓN DE MÓDULOS PRINCIPALES === */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-4">Módulos del Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainModules.map(module => (
            <Link key={module.title} href={module.href}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex space-x-6 items-center">
                <div className={`p-4 rounded-xl bg-gradient-to-br from-${module.color}-500 to-${module.color}-600 text-white`}>
                  <module.icon className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  <p className="text-gray-600 mt-1">{module.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* === SECCIÓN DE ACTIVIDAD RECIENTE === */}
      <div>
         <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-4">Actividad Reciente</h2>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity, index) => (
              <li key={index} className="py-4 flex items-center space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">{activity.type}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                <p className="text-sm text-gray-400 flex-shrink-0">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* === FOOTER === */}
      <footer className="text-center pt-8 border-t border-gray-200">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} FarmaciaSys. Todos los derechos reservados.</p>
        <p className="text-gray-500 text-sm mt-1">Desarrollado como parte del Laboratorio de Desarrollo de Aplicaciones Web Avanzado.</p>
      </footer>
    </div>
  );
}
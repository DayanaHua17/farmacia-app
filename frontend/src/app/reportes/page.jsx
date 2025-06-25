import { ChartBarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function ReportesPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Generación de Reportes</h1>
        <p className="text-lg text-gray-600 mt-2">Analiza el rendimiento de tu negocio con reportes personalizados.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        {/* === PANEL DE FILTROS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end border-b pb-8 mb-8">
          <div>
            <label htmlFor="reportType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Reporte</label>
            <select id="reportType" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Reporte de Ventas por Fecha</option>
              <option>Reporte de Inventario Actual</option>
              <option>Medicamentos Más Vendidos</option>
              <option>Rendimiento por Laboratorio</option>
            </select>
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio</label>
            <input type="date" id="startDate" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Fin</label>
            <input type="date" id="endDate" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 flex items-center space-x-2">
            <ChartBarIcon className="h-6 w-6" />
            <span>Generar Reporte</span>
          </button>
        </div>

        {/* === ÁREA DE VISUALIZACIÓN (PLACEHOLDER) === */}
        <div className="w-full h-96 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col justify-center items-center text-center text-slate-500">
            <ChartBarIcon className="h-20 w-20 mb-4" />
            <h3 className="text-xl font-semibold">El gráfico del reporte se mostrará aquí</h3>
            <p className="mt-1">Selecciona un tipo de reporte y un rango de fechas, luego haz clic en "Generar Reporte".</p>
        </div>
      </div>
    </div>
  );
}
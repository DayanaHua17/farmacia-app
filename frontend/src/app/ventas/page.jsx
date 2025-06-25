import { ShoppingCartIcon, PlusCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function VentasPage() {
  // --- DATOS DE SIMULACIÓN ---
  const cartItems = [
    { id: 1, name: 'Paracetamol 500mg', qty: 2, price: 5.50, total: 11.00 },
    { id: 2, name: 'Amoxicilina 250mg', qty: 1, price: 15.00, total: 15.00 },
    { id: 3, name: 'Vitamina C', qty: 3, price: 2.00, total: 6.00 },
  ];
  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  const recentSales = [
    { id: 'V-0512', customer: 'Juan Pérez', total: 'S/ 85.50', date: '25/06/2025' },
    { id: 'V-0511', customer: 'Cliente General', total: 'S/ 42.00', date: '25/06/2025' },
    { id: 'V-0510', customer: 'Ana García', total: 'S/ 112.30', date: '24/06/2025' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Módulo de Punto de Venta</h1>
        <p className="text-lg text-gray-600 mt-2">Registra una nueva venta o consulta transacciones recientes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* === COLUMNA PRINCIPAL: NUEVA VENTA === */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <PlusCircleIcon className="h-7 w-7 mr-3 text-green-500" />
            Registrar Nueva Venta
          </h2>

          {/* Buscador de productos */}
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Buscar Producto</label>
            <input type="text" id="search" placeholder="Escribe el nombre o código del medicamento..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Carrito de compras */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-gray-700">Carrito de Compras:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="p-3">Producto</th>
                    <th className="p-3 text-center">Cant.</th>
                    <th className="p-3 text-right">P. Unit.</th>
                    <th className="p-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3 font-medium">{item.name}</td>
                      <td className="p-3 text-center">{item.qty}</td>
                      <td className="p-3 text-right">S/ {item.price.toFixed(2)}</td>
                      <td className="p-3 text-right font-semibold">S/ {item.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totales */}
          <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-2 text-gray-700">
              <div className="flex justify-between"><span>Subtotal:</span><span>S/ {subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>IGV (18%):</span><span>S/ {igv.toFixed(2)}</span></div>
              <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-2 mt-2"><span>Total:</span><span>S/ {total.toFixed(2)}</span></div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="mt-8 flex justify-end space-x-4">
            <button className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">Cancelar</button>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Registrar Venta</button>
          </div>
        </div>

        {/* === COLUMNA LATERAL: VENTAS RECIENTES === */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <DocumentTextIcon className="h-7 w-7 mr-3 text-indigo-500" />
            Ventas Recientes
          </h2>
          <ul className="space-y-4">
            {recentSales.map(sale => (
              <li key={sale.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100">
                <div>
                  <p className="font-bold text-gray-800">{sale.id}</p>
                  <p className="text-sm text-gray-500">{sale.customer} - {sale.date}</p>
                </div>
                <p className="font-semibold text-gray-900">{sale.total}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
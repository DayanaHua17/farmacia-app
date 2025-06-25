'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getMedicamentos, deleteMedicamento } from '../../lib/api';

export default function MedicamentosPage() {
    const [medicamentos, setMedicamentos] = useState([]);
    const router = useRouter();

    const fetchMedicamentos = () => {
        getMedicamentos().then(data => {
            setMedicamentos(data);
        }).catch(error => console.error("Error al obtener los medicamentos:", error));
    };

    useEffect(() => {
        fetchMedicamentos();
    }, []);

    const handleDelete = async (id) => {
        if (confirm('¿Estás seguro de que deseas eliminar este medicamento?')) {
            await deleteMedicamento(id);
            alert("Medicamento eliminado");
            fetchMedicamentos(); // Recargar la lista
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Lista de Medicamentos</h1>
            <button
                onClick={() => router.push('/medicamentos/new')}
                className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                + Agregar Medicamento
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Código</th>
                            <th className="p-2 border">Descripción</th>
                            <th className="p-2 border">Presentación</th>
                            <th className="p-2 border">Stock</th>
                            <th className="p-2 border">Precio Unitario</th>
                            <th className="p-2 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicamentos.map((med) => (
                            <tr key={med.CodMedicamento} className="text-center">
                                <td className="p-2 border">{med.CodMedicamento}</td>
                                <td className="p-2 border text-left">{med.descripcionMed}</td>
                                <td className="p-2 border text-left">{med.Presentacion}</td>
                                <td className="p-2 border">{med.stock}</td>
                                <td className="p-2 border">S/ {med.precioVentaUni}</td>
                                <td className="p-2 border whitespace-nowrap">
                                    <button
                                        onClick={() => router.push(`/medicamentos/${med.CodMedicamento}/edit`)}
                                        className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 mr-2"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(med.CodMedicamento)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {medicamentos.length === 0 && (
                <p className="text-center mt-4">No hay medicamentos disponibles.</p>
            )}
        </div>
    );
}
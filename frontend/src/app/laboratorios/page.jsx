'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getLaboratorios, deleteLaboratorio } from '../../lib/api';

export default function LaboratoriosPage() {
    const [laboratorios, setLaboratorios] = useState([]);
    const router = useRouter();

    const fetchLaboratorios = () => {
        getLaboratorios().then(data => {
            setLaboratorios(data);
        }).catch(error => console.error("Error al obtener los laboratorios:", error));
    };

    useEffect(() => {
        fetchLaboratorios();
    }, []);

    const handleDelete = async (id) => {
        if (confirm('¿Estás seguro de que deseas eliminar este laboratorio?')) {
            await deleteLaboratorio(id);
            // Muestra una alerta y luego recarga la lista
            alert("Laboratorio eliminado");
            fetchLaboratorios();
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Lista de Laboratorios</h1>
            <button
                onClick={() => router.push('/laboratorios/new')}
                className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                + Agregar Laboratorio
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Código</th>
                            <th className="p-2 border">Razón Social</th>
                            <th className="p-2 border">Dirección</th>
                            <th className="p-2 border">Teléfono</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laboratorios.map((lab) => (
                            <tr key={lab.CodLab} className="text-center">
                                <td className="p-2 border">{lab.CodLab}</td>
                                <td className="p-2 border text-left">{lab.razonSocial}</td>
                                <td className="p-2 border text-left">{lab.direccion}</td>
                                <td className="p-2 border">{lab.telefono}</td>
                                <td className="p-2 border text-left">{lab.email}</td>
                                <td className="p-2 border whitespace-nowrap">
                                    <button
                                        onClick={() => router.push(`/laboratorios/${lab.CodLab}/edit`)}
                                        className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 mr-2"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(lab.CodLab)}
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
            {laboratorios.length === 0 && (
                <p className="text-center mt-4">No hay laboratorios disponibles.</p>
            )}
        </div>
    );
}
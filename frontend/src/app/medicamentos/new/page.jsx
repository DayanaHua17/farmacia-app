'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createMedicamento, getLaboratorios } from '../../../lib/api';

export default function CrearMedicamentoPage() {
    const router = useRouter();
    const [laboratorios, setLaboratorios] = useState([]);
    const [form, setForm] = useState({
        descripcionMed: '',
        Presentacion: '',
        stock: '',
        precioVentaUni: '',
        CodLab: ''
    });

    // Al cargar la página, obtenemos la lista de laboratorios para el dropdown
    useEffect(() => {
        getLaboratorios().then(data => {
            setLaboratorios(data);
            if (data.length > 0) {
                // Opcional: preseleccionar el primer laboratorio
                setForm(prevForm => ({ ...prevForm, CodLab: data[0].CodLab }));
            }
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMedicamento(form);
            alert('Medicamento creado con éxito');
            router.push('/medicamentos');
        } catch (error) {
            console.error('Error al crear el medicamento:', error);
            alert('Error al crear el medicamento.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Medicamento</h1>

                {/* Campo para seleccionar Laboratorio */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CodLab">
                        Laboratorio
                    </label>
                    <select
                        name="CodLab"
                        id="CodLab"
                        value={form.CodLab}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    >
                        <option value="">-- Seleccione un Laboratorio --</option>
                        {laboratorios.map(lab => (
                            <option key={lab.CodLab} value={lab.CodLab}>
                                {lab.razonSocial}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcionMed">
                        Descripción
                    </label>
                    <input
                        type="text"
                        name="descripcionMed"
                        id="descripcionMed"
                        value={form.descripcionMed}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="Nombre del Medicamento"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Presentacion">
                        Presentación
                    </label>
                    <input
                        type="text"
                        name="Presentacion"
                        id="Presentacion"
                        value={form.Presentacion}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="Caja de 20 tabletas"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                        Stock
                    </label>
                    <input
                        type="number"
                        name="stock"
                        id="stock"
                        value={form.stock}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="100"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precioVentaUni">
                        Precio Unitario (S/)
                    </label>
                    <input
                        type="number"
                        name="precioVentaUni"
                        id="precioVentaUni"
                        step="0.01"
                        value={form.precioVentaUni}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="10.50"
                        required
                    />
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <button type="button" onClick={() => router.push('/medicamentos')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crear Medicamento
                    </button>
                </div>
            </form>
        </div>
    );
}
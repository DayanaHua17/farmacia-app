'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getMedicamentoById, updateMedicamento, getLaboratorios } from '../../../../lib/api';

export default function EditarMedicamentoPage() {
    const router = useRouter();
    const params = useParams();
    const { CodMedicamento } = params;

    const [laboratorios, setLaboratorios] = useState([]);
    const [form, setForm] = useState({
        descripcionMed: '',
        Presentacion: '',
        stock: '',
        precioVentaUni: '',
        CodLab: ''
    });

    useEffect(() => {
        // Cargar la lista de laboratorios para el dropdown
        getLaboratorios().then(data => setLaboratorios(data));

        // Cargar los datos del medicamento a editar
        if (CodMedicamento) {
            getMedicamentoById(CodMedicamento)
                .then(data => setForm(data))
                .catch(err => console.error(err));
        }
    }, [CodMedicamento]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateMedicamento(CodMedicamento, form);
            alert('Medicamento actualizado con éxito');
            router.push('/medicamentos');
        } catch (error) {
            console.error('Error al actualizar el medicamento:', error);
            alert('Error al actualizar el medicamento.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Editar Medicamento</h1>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CodLab">
                        Laboratorio
                    </label>
                    <select name="CodLab" id="CodLab" value={form.CodLab} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" required>
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
                    <input type="text" name="descripcionMed" id="descripcionMed" value={form.descripcionMed} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Presentacion">
                        Presentación
                    </label>
                    <input type="text" name="Presentacion" id="Presentacion" value={form.Presentacion} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                        Stock
                    </label>
                    <input type="number" name="stock" id="stock" value={form.stock} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" required />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precioVentaUni">
                        Precio Unitario (S/)
                    </label>
                    <input type="number" step="0.01" name="precioVentaUni" id="precioVentaUni" value={form.precioVentaUni} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" required />
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <button type="button" onClick={() => router.push('/medicamentos')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancelar
                    </button>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
}
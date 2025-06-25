'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getLaboratorioById, updateLaboratorio } from '../../../../lib/api';

export default function EditarLaboratorioPage() {
    const router = useRouter();
    const params = useParams();
    const { CodLab } = params; // Obtiene el ID desde la URL

    const [form, setForm] = useState({
        razonSocial: '',
        direccion: '',
        telefono: '',
        email: '',
        contacto: ''
    });

    useEffect(() => {
        if (CodLab) {
            // Cargar los datos del laboratorio cuando el componente se monta
            getLaboratorioById(CodLab)
                .then(data => {
                    setForm(data);
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al cargar los datos del laboratorio");
                });
        }
    }, [CodLab]); // El efecto se ejecuta cuando CodLab cambia

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateLaboratorio(CodLab, form);
            alert('Laboratorio actualizado con éxito');
            router.push('/laboratorios');
        } catch (error) {
            console.error('Error al actualizar el laboratorio:', error);
            alert('Error al actualizar el laboratorio.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Editar Laboratorio</h1>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="razonSocial">
                        Razón Social
                    </label>
                    <input
                        type="text"
                        name="razonSocial"
                        id="razonSocial"
                        value={form.razonSocial}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
                        Dirección
                    </label>
                    <input
                        type="text"
                        name="direccion"
                        id="direccion"
                        value={form.direccion}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        name="telefono"
                        id="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contacto">
                        Persona de Contacto
                    </label>
                    <input
                        type="text"
                        name="contacto"
                        id="contacto"
                        value={form.contacto}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => router.push('/laboratorios')}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
}
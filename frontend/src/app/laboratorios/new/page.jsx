'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createLaboratorio } from '../../../lib/api';

export default function CrearLaboratorioPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        razonSocial: '',
        direccion: '',
        telefono: '',
        email: '',
        contacto: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createLaboratorio(form);
            alert('Laboratorio creado con éxito');
            router.push('/laboratorios');
        } catch (error) {
            console.error('Error al crear el laboratorio:', error);
            alert('Error al crear el laboratorio. Revisa la consola para más detalles.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Laboratorio</h1>

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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nombre del Laboratorio"
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
                        placeholder="Av. Principal 123, Ciudad"
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
                        placeholder="987654321"
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
                        placeholder="contacto@empresa.com"
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
                        placeholder="Juan Pérez"
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
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Crear Laboratorio
                    </button>
                </div>
            </form>
        </div>
    );
}
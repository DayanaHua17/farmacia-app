const BASE_URL_LABS = 'http://localhost:3001/api/laboratorios';
const BASE_URL_MEDS = 'http://localhost:3001/api/medicamentos';

// --- Funciones para Laboratorios ---

export const getLaboratorios = async () => {
    const res = await fetch(BASE_URL_LABS);
    return res.json();
};

export const getLaboratorioById = async (id) => {
    const res = await fetch(`${BASE_URL_LABS}/${id}`);
    return res.json();
};

export const createLaboratorio = async (laboratorio) => {
    const res = await fetch(BASE_URL_LABS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(laboratorio)
    });
    return res.json();
};

export const updateLaboratorio = async (id, laboratorio) => {
    const res = await fetch(`${BASE_URL_LABS}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(laboratorio)
    });
    return res.json();
};

export const deleteLaboratorio = async (id) => {
    await fetch(`${BASE_URL_LABS}/${id}`, {
        method: 'DELETE'
    });
};


// --- Funciones para Medicamentos ---

export const getMedicamentoById = async (id) => {
    const res = await fetch(`${BASE_URL_MEDS}/${id}`);
    return res.json();
};

export const getMedicamentos = async () => {
    const res = await fetch(BASE_URL_MEDS);
    return res.json();
};

export const createMedicamento = async (medicamento) => {
    const res = await fetch(BASE_URL_MEDS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medicamento)
    });
    return res.json();
};

export const updateMedicamento = async (id, medicamento) => {
    const res = await fetch(`${BASE_URL_MEDS}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(medicamento)
    });
    return res.json();
};

export const deleteMedicamento = async (id) => {
    await fetch(`${BASE_URL_MEDS}/${id}`, {
        method: 'DELETE'
    });
};
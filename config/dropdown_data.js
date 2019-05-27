export const account_types = [
    { label: 'Selecione el tipo de cuenta', value: '' },
    { label: 'Clinica', value: 'clinica' },
    { label: 'Clinica Dental', value: 'clinica dental' },
    { label: 'Hospital', value: 'Hospital' },
];

export const days = () => {
    let days_array = []

    for (let i = 0; i < 31; i++) {
        days_array.push({ label: i + 1, value: i + 1 })
    }

    return days_array;
};

export const months = () => [
    { label: 'Ene', value: 0 },
    { label: 'Feb', value: 1 },
    { label: 'Mar', value: 2 },
    { label: 'Abr', value: 3 },
    { label: 'May', value: 4 },
    { label: 'Jun', value: 5 },
    { label: 'Jul', value: 6 },
    { label: 'Ago', value: 7 },
    { label: 'Sep', value: 8 },
    { label: 'Oct', value: 9 },
    { label: 'Nov', value: 10 },
    { label: 'Dic', value: 11 },
]

export const years = () => {
    let years_array = []
    const d = new Date();
    const minYear = d.getFullYear() - 100; 
    const maxYear = d.getFullYear() - 18;

    for(let i = minYear; i <= maxYear; i++) {
        years_array.unshift({ label: i, value: i })
    }

    return years_array
};




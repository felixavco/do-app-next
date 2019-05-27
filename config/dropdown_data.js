 export const account_types = [
            {label: 'Selecione el tipo de cuenta', value: ''},
            {label: 'Clinica', value: 'clinica'},
            {label: 'Clinica Dental', value: 'clinica dental'},
            {label: 'Hospital', value: 'Hospital'},
        ];


export let days = []

for(let i = 1; i <= 31 ; i++) {
    days.unshift({label: i + 1, value: i})
}


export const user_type = {
    GST: 'Guest',
    VLT: 'Voluteer',
    EXE: 'Executive',
    MNG: 'Manager',
    HCO: 'Head Co-ordinator',
    OCO: 'Overall Co-ordinator',
    CAB: 'Campus Ambassador',
}

export const application_status = {
    'PND':'pending',
    'RJD':'rejected',
    'HRD':'hired',
    'URV': 'under review',
}

export const format_date = date => {
    date = new Date(date)
    date = date.toISOString()
    return `${date.slice(8,10)}-${date.slice(5,7)}-${date.slice(0,4)}`
}
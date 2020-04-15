export const user_type = {
    GST: 'Guest',
    VLT: 'Voluteer',
    EXE: 'Executive',
    MNG: 'Manager',
    HCO: 'Head Co-ordinator',
    OCO: 'Overall Co-ordinator',
    CAB: 'Campus Ambassador',
    CAB: 'Campus Ambassador',
    DRT: 'Director',
}

export const application_status = {
    'PND': 'pending',
    'RJD': 'rejected',
    'HRD': 'hired',
    'URV': 'under review',
}

export const format_date = date => {
    try {
        date = new Date(date)
        date = date.toISOString()
        return `${date.slice(8,10)}-${date.slice(5,7)}-${date.slice(0,4)}`
    } catch {
        return 'invalid-format'
    }
}

export const job_sectors = ["Accountancy", "Banking", "Finance", "Business", "Consulting", "Management", "Charity", "Design", "Engineering", "Agriculture", "Healthcare", "Hospitality", "IT", "Law", "Security", "Leisure", "Sport", "Tourism", "Marketing", "Advertising", "PR", "Media", "Construction", "Public Services", "Administration", "Retail", "Sales", "Science", "Social Care", "Teacher Training", "Education", "Transport", "Logistics", "Others"]

export const professions=["Select","Student","Professor"]
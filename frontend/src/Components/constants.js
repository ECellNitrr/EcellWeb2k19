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
    CDC:'CDC Admin'
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

export const professions=["Select","Student","Faculty"]

export const education_status= [
    {
        course:"B Tech", 
        branch:[
            {
                name:"Biomed",
                semester:["2","4","6","8"]
            },
            {
                name:"Biotech",
                semester:["2","4","6","8"]
            },
            {
                name:"Chemical",
                semester:["2","4","6","8"]
            },
            {
                name:"Civil",
                semester:["2","4","6","8"]
            },
            {
                name:"CSE",
                semester:["2","4","6","8"]
            },
            {
                name:"ELEX",
                semester:["2","4","6","8"]
            },
            {
                name:"Electrical",
                semester:["2","4","6","8"]
            },
            {
                name:"IT",
                semester:["2","4","6","8"]
            },
            {
                name:"Mech",
                semester:["2","4","6","8"]
            },
            {
                name:"Meta",
                semester:["2","4","6","8"]
            },
            {
                name:"Mining",
                semester:["2","4","6","8"]
            },
            {
                name:"Others",
                semester:["2","4","6","8"]
            }
        ]
    },
    {
        course:"M Tech",
        branch:[
            {
                name:"Biomed",
                semester:["2","4"]
            },
            {
                name:"Biotech",
                semester:["2","4"],
            },
            {
                name:"Chemical",
                semester:["2","4"]
            },
            {
                name:"Civil",
                semester:["2","4"]
            },
            {
                name:"CSE",
                semester:["2","4"]
            },
            {
                name:"ELEX",
                semester:["2","4"]
            },
            {
                name:"Electrical",
                semester:["2","4"]
            },
            {
                name:"IT",
                semester:["2","4"]
            },
            {
                name:"Mech",
                semester:["2","4"]
            },
            {
                name:"Meta",
                semester:["2","4"]
            },
            {
                name:"Mining",
                semester:["2","4"]
            },
            {
                name:"Others",
                semester:["2","4"]
            }
        ]
    },
    {
        course:"MBA",
        branch:[
            {
                name:"Finance",
                semester:["2","4"]
            },
            {
                name:"Marketing",
                semester:["2","4"],
            },
            {
                name:"HRM",
                semester:["2","4"]
            },
            {
                name:"IB",
                semester:["2","4"]
            },
            {
                name:"OM",
                semester:["2","4"]
            },
            {
                name:"SCM",
                semester:["2","4"]
            },
            {
                name:"RM",
                semester:["2","4"]
            },
            {
                name:"ABM",
                semester:["2","4"]
            },
            {
                name:"HCM",
                semester:["2","4"]
            },
            {
                name:"Others",
                semester:["2","4"]
            }
        ]
    },
    {
        course:"B Arch",
        branch:[
            {
                name:"LA",
                semester:["2","4","6","8","10"]
            },
            {
                name:"AC",
                semester:["2","4","6","8","10"]
            },
            {
                name:"HA",
                semester:["2","4","6","8","10"]
            },
            {
                name:"UP",
                semester:["2","4","6","8","10"]
            },
            {
                name:"RP",
                semester:["2","4","6","8","10"]
            }
        ]
    },
    {
        course:"B Sc",
        branch:[
            {
                name:"HM",
                semester:["2","4","6"]
            },
            {
                name:"AS",
                semester:["2","4","6"]
            },
            {
                name:"Medical",
                semester:["2","4","6"]
            },
            {
                name:"Biology",
                semester:["2","4","6"]
            },
            {
                name:"AVE",
                semester:["2","4","6"]
            },
            {
                name:"Chemistry",
                semester:["2","4","6"]
            },
            {
                name:"Maths",
                semester:["2","4","6"]
            },
            {
                name:"Physics",
                semester:["2","4","6"]
            }
        ]
    }
]

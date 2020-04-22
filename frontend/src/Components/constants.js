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
        display_name: "Bachelor of Technology", 
        branch:[
            {
                name:"Biomed",
                display_name:"Bio Medical Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Biotech",
                display_name:"Bio Technology Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Chemical",
                display_name:"Chemical Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Civil",
                display_name:"Civil Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"CSE",
                display_name:"Computer Science Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"ELEX",
                display_name:"Electronics and communication Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Electrical",
                display_name:"Electrical Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"IT",
                display_name:"Information Technology",
                semester:["2","4","6","8"]
            },
            {
                name:"Mech",
                display_name:"Mechanical Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Meta",
                display_name:"Metallurgical and Materials Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Mining",
                display_name:"Mining Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Others",
                display_name:"",semester:["2","4","6","8"]
            }
        ]
    },
    {
        course:"M Tech",
        display_name:"Master of Technology",
        branch:[
            {
                name:"Biomed",
                display_name:"Bio Medical Engineering",
                semester:["2","4"]
            },
            {
                name:"Biotech",
                display_name:"Bio Technology Engineering",
                semester:["2","4"]
            },
            {
                name:"Chemical",
                display_name:"Chemical Engineering",
                semester:["2","4"]
            },
            {
                name:"Civil",
                display_name:"Civil Engineering",
                semester:["2","4"]
            },
            {
                name:"CSE",
                display_name:"Computer Science Engineering",
                semester:["2","4"]
            },
            {
                name:"ELEX",
                display_name:"Electronics and communication Engineering",
                semester:["2","4"]
            },
            {
                name:"Electrical",
                display_name:"Electrical Engineering",
                semester:["2","4"]
            },
            {
                name:"IT",
                display_name:"Information Technology",
                semester:["2","4"]
            },
            {
                name:"Mech",
                display_name:"Mechanical Engineering",
                semester:["2","4"]
            },
            {
                name:"Meta",
                display_name:"Metallurgical and Materials Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Mining",
                display_name:"Mining Engineering",
                semester:["2","4","6","8"]
            },
            {
                name:"Others",
                display_name:"",semester:["2","4","6","8"]
            }
        ]
    },
    {
        course:"MBA",
        display_name:"Master of Business Administration",
        branch:[
            {
                name:"Finance",
                display_name:"Finance",
                semester:["2","4"]
            },
            {
                name:"Marketing",
                display_name:"Marketing",semester:["2","4"],
            },
            {
                name:"HRM",
                display_name:"Human Recourse Management",
                semester:["2","4"]
            },
            {
                name:"IB",
                display_name:"International Business",
                semester:["2","4"]
            },
            {
                name:"OM",
                display_name:"Operation Management",
                semester:["2","4"]
            },
            {
                name:"SCM",
                display_name:"Supply Chain Management",
                semester:["2","4"]
            },
            {
                name:"RM",
                display_name:"Rural Management",
                semester:["2","4"]
            },
            {
                name:"ABM",
                display_name:"Agri Business Management",
                semester:["2","4"]
            },
            {
                name:"HCM",
                display_name:"Health Care Management",
                semester:["2","4"]
            },
            {
                name:"Others",
                display_name:"Others",
                semester:["2","4"]
            }
        ]
    },
    {
        course:"B Arch",
        display_name:"Bachelor of Science",
        branch:[
            {
                name:"LA",
                display_name:"Landscape Architecture",semester:["2","4","6","8","10"]
            },
            {
                name:"AC",
                display_name:"Architectural Conservation",semester:["2","4","6","8","10"]
            },
            {
                name:"HA",
                display_name:"Housing Architecture",semester:["2","4","6","8","10"]
            },
            {
                name:"UP",
                display_name:"Urban Planning",semester:["2","4","6","8","10"]
            },
            {
                name:"RP",
                display_name:"Regional Planning",semester:["2","4","6","8","10"]
            }
        ]
    },
    {
        course:"B Sc",
        display_name:"Bachelor of Architecture",
        branch:[
            {
                name:"HM",
                display_name:"Hotel Management",
                semester:["2","4","6"]
            },
            {
                name:"AS",
                display_name:"Aernautical Science",
                semester:["2","4","6"]
            },
            {
                name:"Medical",
                display_name:"Medical Science",
                semester:["2","4","6"]
            },
            {
                name:"Biology",
                display_name:"Biologcal Science",
                semester:["2","4","6"]
            },
            {
                name:"AVE",
                display_name:"Animation and Visual Effects",
                semester:["2","4","6"]
            },
            {
                name:"Chemistry",
                display_name:"Applied Chemistry",
                semester:["2","4","6"]
            },
            {
                name:"Maths",
                display_name:"Applied Mathemartics",
                semester:["2","4","6"]
            },
            {
                name:"Physics",
                display_name:"Applied Physics",
                semester:["2","4","6"]
            }
        ]
    }
]

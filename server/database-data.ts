let iter = 1;
export const RESUMES = {
    'rammohan_holagundi': {
        'headers':['Skills', 'Academics', 'Experience','Contact'],
        'skills': {
            'headers' : ['tech','years','rating','highlights','actions'],
            'details' : [
                [
                    {
                      tech: 'c#',
                      years: '19+',
                      rating: '9',
                      highlights : { 'text': '19+ years exp', 'showspinner': false},
                      highlight : ['19+ years exp', 'full SDLC', 'full stack', 'Micro services', 'Web Services / SOA', 'Multi Threading', 'Design Patterns', 'Architecture'],
                      technologies: ['.net 1.1 - 4.6'],
                      lastused: 'current',
                      showspinner: false,
                      id: iter++
                    },
                    {
                      tech: 'angular',
                      years: '4+',
                      rating: '6',
                      highlights : { 'text': '4+ years exp', 'showspinner': false},
                      highlight :  ['4+ years exp', 'web sites', 'responsive', 'secure'],
                      technologies: ['angular (1.1 - 10)', 'ngrx', 'router', 'ES2015', 'HTML5', 'CSS3'],
                      lastused: '3 months ago',
                      showspinner: false,
                      id: iter++
                    },
                    {
                      tech: 'react',
                      years: '4+',
                      rating: '7',
                      highlights : { 'text': '4+ years exp', 'showspinner': false},
                      highlight :  ['4+ years exp', 'Micro front ends', 'web sites', 'Mobile (react native)' , 'react-router'],
                      lastused: 'current',
                      technologies: ['React (15.0.1 - 16.14)', 'react native', 'ES2015', 'HTML5', 'CSS3', 'Redux/Mobx/Hooks', 'Enzyme', 'React Testing Library'],
                      showspinner: false,
                      id: iter++
                    },
                    {
                      tech: 'SQL Server Database Development',
                      years: '10+',
                      rating: '7',
                      highlights : { 'text': '10+ years exp', 'showspinner': false},
                      highlight :  ['10+ years exp', 'stored procs / functions / Optimizations ', 'Entity Framework / Design Patterns', 'Database Migration'],
                      technologies: ['t-sql', 'pl-sql (1+ year)', 'stored procedure', 'functions','sql scripts', 'SSIS'],
                      lastused: '3 months ago',
                      showspinner: false,
                      id: iter++
                    },
                    {
                      tech: 'SOA / Micro services / REST',
                      years: '6+',
                      rating: '6',
                      highlights : { 'text': '6+ years exp', 'showspinner': false},
                      highlight :  ['6+ years exp', 'asp.net web API (.net 1.1 - 4.6) / WCF / ASMX / MuleSoft Anypoint ', 'Security / scalability'],
                      technologies: ['C#', 'Java'],
                      lastused: 'current',
                      showspinner: false,
                      id: iter++
                    }
                ]
            ]
        },
        'academics':{
            'headers': ['Institute', 'Degree', 'Specialization'],
            'details':[
                {
                    'institute': 'Indian Institute Of Technology',
                    'degree': 'Master of Technology',
                    'specialization': 'Mechanical Engineering',
                    id: iter++
                },
                {
                    'institute': 'Osmania University',
                    'degree': 'Bachelor of Engineering',
                    'specialization': 'Mechanical Engineering',
                    id: iter++
                }
            ]
        },
        'experience':{
            'headers':['Client', 'Vendor', 'Project', 'Start', 'End', 'Highlights'],
            'details':[
                {
                    client: 'Bank of America',
                    vendor: 'On Request',
                    start: 'Dec-20',
                    project:'Shared Technology Solutions',
                    end : 'Current',
                    highlights : { 'text' : 'Software Consultant',
                        'showspinner': false},
                    highlight :  ['react', 'angular', 'C#', 'asp.net webapi', 'Anypoint studio', 'Web', 'Micro Service'],
                    id: iter++
                  },
                  {
                    client: 'NB Ventures',
                    vendor: 'N/A',
                    start: 'Jan-20',
                    project:'Supply Chain Management',
                    end : 'Apr-20',
                    highlights : { 'text' : 'Principal Software Engineer',
                    'showspinner': false},
                    highlight :  ['angular', 'react native', 'C#', 'asp.net webapi', 'Azure for Webapi', 'Micro Frontend', 'Micro Service'],
                    id: iter++
                  },
            ]
        },
        'about': {
            'headers': ['Name','Email', 'Phone','Visa Status','Portfolio','Github'],
            'details': [
                'Rammohan Holagundi',
                'hrammohan@yahoo.com',
                '',
                'US Citizen',
                '',
                ''
            ]
        }
    }
}
import { Injectable } from '@angular/core';
import { Profile, Experience, Education, Skill, Project, Research, Extracurricular, Certification } from '../../shared/models/portfolio.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileDataService {
    readonly profile: Profile = {
        name: 'Md. Seyam Ali Biswas',
        title: 'Software Engineer',
        email: 'seyamhossain482@gmail.com',
        phone: '+8801989424982',
        github: 'https://github.com/seyamali',
        location: 'Gazipur, Dhaka, Bangladesh',
        summary: "Analytically driven Software Engineer and Researcher with a distinction-level academic record (CGPA 3.84/4.00). Currently engineering robust enterprise solutions at Islam Garments Ltd, specializing in high-performance architectures using Angular and .NET. My background uniquely blends full-stack development with scientific rigor, demonstrated by published research in AI vision systems with Elsevier. Focused on designing scalable, secure systems that solve real-world industrial problems.",
        objective: 'Seeking to leverage my background in full-stack engineering and machine learning research to architect high-performance software systems in an innovation-driven environment.',
        profileImage: 'assets/images/seyam.png'
    };

    readonly experiences: Experience[] = [
        {
            company: 'Islam Garments Ltd.',
            role: 'Software Engineer (Junior)',
            period: 'April 2024 – Present',
            responsibilities: [
                'Primary frontend developer for 10 of 13 business modules within a 264-component, 64,600-line Angular ERP platform.',
                'Built the Inventory and HR backend modules end-to-end in ASP.NET Core, on a Clean Architecture system spanning 206 controllers and ~1,046 endpoints.',
                'Built 3 production dashboards (manufacturing efficiency, attendance analytics, real-time output tracking) using Chart.js and Syncfusion.',
                'Automated biometric attendance sync and GRN material verification, replacing manual/paper-based processes.',
                'Collaborated with a 4-person development team, resolving production issues across frontend and backend.'
            ]
        }
    ];

    readonly education: Education[] = [
        {
            institution: 'Daffodil International University',
            degree: 'Bachelor of Science in Computer Science and Engineering',
            subject: 'Computer Science and Engineering',
            result: '3.84 / 4.00',
            passingYear: '2024'
        },
        {
            institution: 'Birshreshtha Munshi Abdur Rouf Public College',
            degree: 'Higher Secondary Certificate (HSC)',
            subject: 'Science',
            result: '4.75 / 5.00',
            passingYear: '2019'
        },
        {
            institution: 'Konabari M.A Kuddus High School',
            degree: 'Secondary School Certificate (SSC)',
            subject: 'Science',
            result: '5.00 / 5.00',
            passingYear: '2017'
        }
    ];

    readonly skills: Skill[] = [
        {
            category: 'Languages',
            items: ['C#', 'TypeScript', 'JavaScript', 'Java', 'C', 'Python']
        },
        {
            category: 'Frontend',
            items: ['Angular', 'RxJS', 'Angular SSR (Universal)', 'HTML5', 'CSS3', 'Chart.js / ng2-charts']
        },
        {
            category: 'Backend',
            items: ['ASP.NET Core', 'REST API Development', 'Entity Framework Core', 'MediatR']
        },
        {
            category: 'Database',
            items: ['SQL Server', 'MySQL']
        },
        {
            category: 'Auth & Security',
            items: ['JWT Authentication', 'Role-Based Access Control']
        },
        {
            category: 'Tools',
            items: ['Git', 'GitHub', 'Visual Studio', 'VS Code']
        },
        {
            category: 'Concepts',
            items: ['Clean Architecture', 'CQRS', 'Modular Components', 'OOP', 'SOLID Principles', 'ERP Systems', 'Agile/Hybrid Workflow']
        }
    ];

    readonly research: Research[] = [
        {
            title: 'Money Plant Disease Atlas: A Comprehensive Dataset for Disease Classification in Ornamental Horticulture',
            type: 'publication',
            journal: 'Data in Brief (Elsevier) | Volume: 58 | Pages: 111216',
            date: 'December 2024',
            authors: ['Md. Seyam Ali Biswas', 'MD Hasan Ahmad', 'Sajib Bormon', 'Sohanur Rahman Sohag', 'Amatul Bushra Akhi'],
            link: 'https://doi.org/10.1016/j.dib.2024.111216',
            description: [
                'Created a 1,872-image dataset (expanded to 6,000 via augmentation) classifying 3 categories of Money Plant leaf health (Bacterial Wilt, Manganese Toxicity, Healthy).',
                'Designed and validated an FNet-based deep learning model (Fourier-transform architecture), achieving 99.95% test accuracy on the augmented dataset (95.10% on raw data).',
                'Led conceptualization, data curation, methodology, and validation as first author on a peer-reviewed Elsevier publication.'
            ]
        }
    ];

    readonly projects: Project[] = [
        {
            title: 'Raw Nation (Official Site)',
            description: 'Built a 30-component, SSR-enabled e-commerce frontend with 21 routes, 3 payment gateways (bKash, SSLCommerz, COD), per-page SEO, GA4, and Facebook Pixel tracking.',
            tools: 'Angular SSR, Bootstrap, Custom CSS',
            link: 'https://rawnation.net/',
            type: 'web',
            image: 'assets/images/rawnation.png'
        },
        {
            title: 'Aurelia Editor',
            description: 'A framework-agnostic rich-text editor published as an MIT-licensed npm package (@seyamali/aurelia-editor), built on Meta\'s Lexical framework with 16+ plugins including tables, Markdown/Word import-export, PDF export, comments, and autosave.',
            tools: 'TypeScript, NPM, Rollup',
            link: 'https://www.npmjs.com/package/@seyamali/aurelia-editor',
            demoLink: 'https://aurelia-editor.pro.bd/',
            githubLink: 'https://github.com/seyamali/aurelia-editor',
            type: 'npm',
            image: 'assets/images/aurelia.png'
        },
        {
            title: 'PocketLedger',
            description: 'Personal finance app with multi-account tracking, loan management, real-time Firestore sync, and biometric lock.',
            tools: 'Flutter, Dart, Firebase, fl_chart',
            link: 'https://github.com/seyamali/POCKETLEDGER',
            type: 'flutter',
            image: 'assets/images/pocketledger.png'
        }
    ];

    readonly certifications: Certification[] = [
        {
            name: 'Corporate Mentorship & Leadership Training',
            organization: 'Human Resource Development Institute (DII)',
            year: '2023',
            description: 'Professional development focused on technical leadership, agile team management, and stakeholder communication.'
        },
        {
            name: 'ICPC Programming Contest (Member State)',
            organization: 'International Collegiate Programming Contest',
            year: '2021',
            description: 'Qualified to represent DIU in a national-level competitive programming showcase, solving algorithmic challenges under high-pressure scenarios.'
        }
    ];

    readonly activities: Extracurricular[] = [
        {
            title: 'Technical Undergraduate Assistant (Lab Prefect)',
            organization: 'Daffodil International University',
            period: 'Fall 2022 – Spring 2023',
            activities: [
                'Spearheaded programming workshops for underclassmen, bridging the gap between theoretical data structures and practical logic.',
                'Architected comprehensive study modules and technical guides to standardize and elevate student learning outcomes.',
                'Managed laboratory resources and mentored fellow students in complex bug resolution and algorithmic optimization.',
                'Demonstrated strong project management skills by coordinating simultaneous lab activities for large groups.'
            ]
        }
    ];
}

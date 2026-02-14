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
                'Engineered and optimized core enterprise modules utilizing Angular 18 and .NET Core RESTful APIs.',
                'Designed and managed high-concurrency MySQL database schemas, improving query response times for industrial reporting.',
                'Automated internal workflows by developing custom ERP-integrated tools, significantly reducing manual data processing.',
                'Collaborated in an Agile environment to deliver production-ready code with a focus on SSR stability and modern UI/UX principles.'
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
            category: 'Core Engineering',
            items: ['C', 'Java (OOP)', 'Python', 'C#', 'SQL', 'PHP']
        },
        {
            category: 'Frameworks & Architecture',
            items: ['Angular (SSR/SPA)', '.NET Core', 'Flutter', 'Spring Boot']
        },
        {
            category: 'Data & Infrastructure',
            items: ['MySQL', 'SQL Server', 'REST APIs', 'JWT Auth']
        },
        {
            category: 'Research & Intelligence',
            items: ['Deep Learning', 'Computer Vision', 'Image Processing', 'CNN Architectures']
        },
        {
            category: 'Dev Ecosystem',
            items: ['Git/GitHub', 'Cloud Deployment', 'UI/UX Design', 'Agile Methodologies']
        }
    ];

    readonly research: Research[] = [
        {
            title: 'Utilizing Advanced Image Processing Techniques for Precise Quantification of Leaf Diseases in Money Plant',
            type: 'thesis',
            description: [
                'Architected a multi-stage image processing pipeline for early-stage disease detection in ornamental vegetation.',
                'Evaluated state-of-the-art CNN models to achieve high-precision quantification of Bacterial Wilt and Manganese Poisoning.',
                'Utilized Python and TensorFlow to build the foundational research framework.'
            ]
        },
        {
            title: 'Money Plant Disease Atlas: A Comprehensive Dataset for Disease Classification in Ornamental Horticulture',
            type: 'publication',
            journal: 'Data in Brief (Elsevier) | Volume: 58 | Pages: 111216',
            date: 'February 2025',
            authors: ['Md. Seyam Ali Biswas', 'MD Hasan Ahmad', 'Sajib Bormon', 'Sohanur Rahman Sohag', 'Amatul Bushra Akhi'],
            link: 'https://doi.org/10.1016/j.dib.2024.111216',
            description: [
                'Curated and published a standardized dataset of high-resolution biometric imagery for horticultural disease classification.',
                'Peer-reviewed and successfully indexed by Elsevier, contributing a significant open-source resource for global plant pathology AI.'
            ]
        }
    ];

    readonly projects: Project[] = [
        {
            title: 'Raw Nation (Official Site)',
            description: 'Architected and developed the comprehensive frontend infrastructure for Raw Nation\'s official e-commerce platform, ensuring a seamless, high-performance shopping experience with Angular 21 SSR.',
            tools: 'Angular 21, SSR, Bootstrap, Custom CSS',
            link: 'https://rawnation.net/',
            type: 'web'
        },
        {
            title: 'Aurelia Editor',
            description: 'A high-fidelity, customizable rich text editor for modern web applications with seamless integration support.',
            tools: 'TypeScript, NPM, Rollup',
            link: 'https://www.npmjs.com/package/@seyamali/aurelia-editor',
            demoLink: 'https://aurelia-editor-playground-theta.vercel.app/',
            type: 'npm'
        },
        {
            title: 'Bahari Financial Engine',
            description: 'A robust mobile orchestration tool for dynamic invoice generation and financial reporting, facilitating seamless itemized ledger exports via PDF.',
            tools: 'Flutter, Dart, Provider States',
            type: 'flutter'
        },
        {
            title: 'Beyond Decimal (Arithmetic System)',
            description: 'A mathematical computation engine designed for multi-base number system transitions and complex arithmetic conversions with real-time stability.',
            tools: 'Android Studio, Java, Material Design 3',
            type: 'android'
        },
        {
            title: 'Enterprise Student Management',
            description: 'Developed a high-performance record-management system using optimized linked-list structures for high-speed data retrieval and administrative efficiency.',
            tools: 'C (Data Structures)',
            link: 'https://github.com/seyamali/Enterprise-Student-Management-System',
            type: 'c'
        },
        {
            title: 'Orion Hotel Oracle',
            description: 'A full-scale hospitality management suite for real-time room orchestration, automated inventory control, and secure customer data handling.',
            tools: 'Java (Swing/JDBC UI)',
            link: 'https://github.com/seyamali/Orion-Hotel-Oracle',
            type: 'java'
        },
        {
            title: 'Village Rendering Simulation',
            description: 'An immersive 3D rural simulation leveraging OpenGL primitives to demonstrate complex geometric calculations and real-time graphics rendering.',
            tools: 'C++ & OpenGL',
            type: 'graphics'
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

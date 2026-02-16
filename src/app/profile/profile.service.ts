import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [

  ]
  about2 = `Software Developer with 8+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 12+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1oQAmT9ZnZ0iDk7cSnht-wSszkMeFu3C-ww9PqZJSZZY/edit?tab=t.0"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 18+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '50%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '50%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '30%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 May - 2016 August',
      'education': 'Masters Degree',
      'stream': 'MSCS',
      'info': `Silicon valley University, silicaon vallley, california`,
      'institution': 'Silicon valley University'
    },
    {
      'id': '2',
      'from_to_year': '2010 - 2014',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Jawaharlal Nehru Technological University, Hyderabad is a public university, located in Hyderabad, Telangana
              Completed B.E in Computer Engineering.`,
      'institution': 'Jawaharlal Nehru Technological University'
    },
    {
      'id': '3',
      'from_to_year': '2008 - 2010',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'New Generation collage, Khammam',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
              There was also a good base on physics, mathematics and chemistry.
              Completed my high school with 70%.`
    },
    {
      'id': '4',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'Madhu Vidylayam, wyra, Khammam',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
               Completed my Secondary school with 78%.`
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Synechron ',
      location: 'Tampa, FL',
      timeline: 'May 2025 to Present',
      role: 'Sr.Associate technology (Angular/UI) ',
      work: 'Lead maintenance and enhancement of a large-scale enterprise platform built on Micro Frontend Architecture (MFE) using Angular and Java microservices. .Upgraded 10+ micro-frontend applications from Angular 13 to Angular 18, modernizing codebases with updated Angular patterns to improve performance, security, and long-term maintainability. .Led AG Grid upgrades from v22 to v32 across multiple MFEs, resolving breaking changes, refactoring grid APIs, and stabilizing complex data-driven UI workflows. .Implemented advanced AG Grid features including Server-Side Row Model (SSRM), custom cell renderers/editors, pagination, multi-column sorting, and advanced filtering, enabling scalable handling of large datasets. .Improved grid performance and usability by leveraging row virtualization, server-side filtering/sorting, and optimized rendering strategies, resulting in faster grid load times and smoother user interactions. .Enhanced Angular application architecture through improved lazy loading, shared component libraries, and Module Federation–based integration across micro-frontends. .Migrated micro-frontends from Java JAR–based builds to NGINX static deployments, simplifying CI/CD pipelines and improving runtime efficiency and reliability. .Remediated critical security vulnerabilities by resolving Black Duck and Snyk findings across frontend and backend services, ensuring compliance with enterprise security standards. .Led CI/CD migration from Lightspeed Classic to Citi enterprise tooling using Harness, standardizing build, deployment, and rollback processes across teams. .Served as the primary technical escalation point for production issues, performing root-cause analysis and delivering stable, compliant fixes. .Expanded automated test coverage for upgraded Angular and AG Grid functionality, reducing regression issues and improving release confidence. .Provided technical leadership, code reviews, and mentoring, enforcing enterprise Angular standards, performance best practices, and maintainable design patterns.'
    },
    {
      id: 2,
      company: 'Optum Technology',
      location: 'MI (Remote)',
      timeline: 'Nov 2021 to Apr 2025s',
      role: 'Sr. Front End Developer/AEM (Angular)',
      work: 'Working as a front end developer .Responsible for handling the user interface. .Integrating angular components into AEM web pages. .Support operations team with day-to-day requests related to website functionality, user experience and performance.Write clean, efficient, well-commented code. .Work autonomously and be comfortable executing features from start to finish. .Involved in all aspects of the application development lifecycle: Idea, Development, QA, Documentation, Implementation, and Integration. .Development, maintenance, troubleshooting and enhancements of the existing Web, Video and Mobile web applications and services. .Adhere to project schedules and effectively report progress to meet challenging deadlines. .Write unit tests & review code prior to merging.'

    },
    {
      id: 3,
      company: 'ICF',
      location: 'Chicago, (Remote)',
      timeline: 'April 2021 to Octomber 2021',
      role: 'Sr. Front End Developer/AEM',
      work: `Technologies : AEM UI, HTML, CSS frameworks, Java Script, JQuery' .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },

    {
      id: 4,
      company: 'Verizon Wireless ',
      location: 'New Jersey, NJ (Remote)',
      timeline: 'August 2020 - April 2021',
      role: 'Sr. Front End Web Application Developer/AEM',
      work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

      .Build and own our frontend architecture.
      .Push the boundaries of modern frontend engineering to build fast and ambitious web applications.
      .Work closely with our Product Team and Engineering teams to build features that have significant business impact
      Design elegant and intuitive UI components.
      .Implement the functionality necessary to power the front end to life in our backend services
      Work in small but tight teams.
      .Understand our business context deeply and leverage your engineering knowledge to propose creative solutions to Develop codes for interactive data driven web applications
      Develop interfaces to back end databases.
      .Troubleshoot and debugs pre-production web applications.
      .Maintain and upgrades applications.
      .Troubleshoot web server, setup and control form issues in the student information system that affect web applications.`
    },

    {
      id: 5,
      company: 'DaVita',
      location: 'Brentwood, TN',
      timeline: 'Feb 2019 To July 2020',
      role: 'Front End Developer (Angular) ',
      work: `Technologies : HTML, CSS frameworks, Type Script, Angular, Bootstrap, story book' .
      Worked on the web application built in Angular for health care related project.
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },

    {
      id: 6,
      company: 'Kroger Technology',
      location: 'Charlotte, NC',
      timeline: 'Oct 2016 To July 2020',
      role: 'Angular UI Developer',
      work: `Technologies : HTML, CSS frameworks, Type Script, Angular, ionic, cordova, Bootstrap, story book' .
      Worked on the web application built in Angular for retail industry related project.
      in this project we have created a hybrid application which will goes into two IOS and andriod
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },



  ]

  extraCircularInfo: any = [

  ]


  skills(): Observable<any> {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }
  education(): Observable<any> {
    return this.educationData;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    return this.extraCircularInfo;
  }
}

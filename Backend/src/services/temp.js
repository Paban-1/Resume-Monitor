const resume = `
Name: Alex Morgan
Title: Fullstack Software Engineer
Email: alex.morgan@email.com
Phone: +1 (415) 555-0198
GitHub: github.com/alexmorgan
LinkedIn: linkedin.com/in/alexmorgan
Location: San Francisco, CA

SUMMARY
-------
Fullstack engineer with 5+ years building scalable web applications. Experienced across
the entire development lifecycle — from designing REST/GraphQL APIs and managing databases
on the backend, to crafting responsive, accessible interfaces with React on the frontend.

BACKEND SKILLS
--------------
Node.js, Python, Go, REST APIs, GraphQL, PostgreSQL, MongoDB, Redis,
Docker, Kubernetes, AWS, CI/CD, Microservices, JWT / OAuth2

FRONTEND SKILLS
---------------
React, TypeScript, Next.js, HTML5, CSS3, Tailwind CSS, Redux, React Query,
Webpack, Vite, Jest, Cypress, Figma, Accessibility (WCAG)

EXPERIENCE
----------
Senior Fullstack Engineer | Stripe | San Francisco, CA | Jan 2022 – Present
- Built and maintained payment dashboard UI with React and TypeScript, serving 200k+ merchants.
- Designed GraphQL APIs on Node.js handling 50M+ daily transactions with 99.99% uptime.
- Led migration of legacy REST services to microservices architecture, cutting p99 latency by 40%.
- Introduced Cypress E2E testing suite, reducing production regressions by 60%.

Fullstack Developer | Shopify | Remote | Jun 2019 – Dec 2021
- Developed merchant-facing storefront themes using React and Next.js with SSR/SSG patterns.
- Built product catalog and inventory microservices in Python (FastAPI) backed by PostgreSQL and Redis.
- Integrated third-party logistics APIs and managed deployment pipelines on AWS ECS.

Junior Web Developer | Acme Digital Agency | New York, NY | Aug 2017 – May 2019
- Built responsive marketing sites and landing pages for 20+ clients using HTML, CSS, and vanilla JS.
- Developed CMS-driven blog and e-commerce features with Express.js and MongoDB.

EDUCATION
---------
B.S. Computer Science | University of California, Berkeley | Graduated May 2017

CERTIFICATIONS
--------------
- AWS Certified Developer – Associate
- Google Professional Cloud Developer
- MongoDB Certified Developer

LANGUAGES
---------
English (Native), Spanish (Conversational)
`
const selfDescription = `
I am Alex Morgan, a Fullstack Software Engineer based in San Francisco, CA with over 5 years
of professional experience building and shipping scalable web applications from end to end.

On the backend, I work primarily with Node.js, Python, and Go to design and maintain REST and
GraphQL APIs that handle millions of requests daily. I am comfortable working with both relational
and NoSQL databases including PostgreSQL, MongoDB, and Redis, and I have hands-on experience
containerizing and deploying services using Docker, Kubernetes, and AWS.

On the frontend, I specialize in React and TypeScript, building fast, responsive, and accessible
user interfaces. I have worked extensively with Next.js for server-side rendered and statically
generated applications, and I use tools like Tailwind CSS, Redux, and React Query to keep
codebases clean and maintainable. Testing is a core part of my workflow — I write unit tests
with Jest and end-to-end tests with Cypress.

Throughout my career I have worked at companies like Stripe and Shopify, where I contributed to
large-scale products used by hundreds of thousands of users. I enjoy working across the full stack,
collaborating closely with designers and product teams, and taking ownership of features from
architecture and API design all the way through to the final UI.

I hold a B.S. in Computer Science from UC Berkeley and am certified as an AWS Certified Developer
and Google Professional Cloud Developer. I am fluent in English and conversational in Spanish.
`
const jobDescription = `
Job Title: Senior Fullstack Engineer
Company: FinFlow Solutions Pvt. Ltd.
Location: Hyderabad, Telangana, India (Hybrid – 3 days onsite)
Employment Type: Full-Time
Salary Range: ₹25,00,000 – ₹38,00,000 per annum + ESOPs + benefits

ABOUT US
--------
FinFlow Solutions is a Hyderabad-based fintech company building payment infrastructure and
lending products for India's rapidly growing MSME sector. We are backed by Tiger Global and
Elevation Capital and currently process over ₹5,000 crore in monthly transactions. Our
engineering team of 80+ engineers operates in small autonomous squads and ships to production
multiple times a day.

ABOUT THE ROLE
--------------
We are looking for a Senior Fullstack Engineer to join our Payments Squad. You will own the
full lifecycle of features — from database design and API development to the React-based
merchant portal. Beyond typical fullstack work, this role requires comfort with high-throughput
event-driven systems and real-time data pipelines, which are core to how FinFlow operates.

RESPONSIBILITIES
----------------
- Design and build high-performance REST APIs in Java (Spring Boot) and Node.js.
- Develop and maintain frontend interfaces using React, TypeScript, and Material UI.
- Build and maintain real-time data pipelines using Apache Kafka and Apache Flink.
- Write complex SQL queries and manage MySQL and MongoDB databases at scale.
- Implement and maintain infrastructure on Google Cloud Platform (GCP) using Terraform.
- Ensure payment systems comply with PCI-DSS and RBI regulatory guidelines.
- Conduct code reviews, write technical documentation, and mentor junior engineers.
- Collaborate with data engineers and ML teams to surface analytics inside the dashboard.

REQUIREMENTS
------------
- 5+ years of fullstack development experience with at least 2 years in a fintech or payments company.
- Strong proficiency in Java (Spring Boot) for backend development — this is a hard requirement.
- Solid experience with React and TypeScript on the frontend.
- Hands-on experience with Apache Kafka or any event-driven messaging system.
- Experience with Google Cloud Platform (GCP) — GKE, Cloud Run, BigQuery, or Pub/Sub.
- Strong understanding of MySQL schema design and query optimization.
- Knowledge of PCI-DSS compliance standards and secure coding practices.
- B.Tech / B.E. in Computer Science or equivalent from a recognized Indian university.

NICE TO HAVE
------------
- Experience with Apache Flink or Spark for stream processing.
- Familiarity with Terraform or any infrastructure-as-code tooling.
- Understanding of RBI payment regulations and UPI / NPCI ecosystem.
- Prior experience working with NACH, NEFT, IMPS, or UPI payment rails.
- Google Cloud Professional Developer certification.

BENEFITS
--------
- Competitive salary with bi-annual appraisal cycles.
- ESOPs with a 4-year vesting schedule and 1-year cliff.
- Health insurance for employee, spouse, children, and parents (up to ₹10 lakh coverage).
- ₹20,000 annual learning and certification reimbursement.
- 5 days work from home per month over the hybrid policy.
- Relocation bonus of ₹1,00,000 for candidates outside Hyderabad.
- Free lunch at office, annual retreats, and quarterly team events.
- 24 days paid leave plus 12 public holidays per year.
`

module.exports = {
    resume, selfDescription, jobDescription
}
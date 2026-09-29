/**
 * Single source of truth for every piece of copy on the site.
 * Edit here; the components read from this file and nothing else.
 *
 * Figures here are taken from 1_Resume_SahaiAnbuKulandainathan.pdf (Sep 2026). Keep `metrics` and
 * `intro` consistent with `experience`, and keep all three consistent with the
 * resume itself, since recruiters read them side by side.
 */

export const profile = {
  name: 'Sahai Jordi Alan',
  shortName: 'Alan',
  initials: 'SJA',
  role: 'Engineering & Program Management',
  location: 'Ithaca, NY · Open to relocation',
  availability:
    'Cornell MEM ’27 · Recruiting for full-time engineering & program management roles starting mid-2027',

  headline: 'I get hard engineering work across the finish line.',

  intro:
    'Automotive cybersecurity engineer turned program leader. Two years at Tata Elxsi owning security validation for Marelli and Jaguar Land Rover ECUs, automating diagnostics, and mentoring the engineers who came in behind me, after directing 150+ students across 14+ projects at CEG Tech Forum. Now at Cornell, building the management toolkit to run technical programs at scale.',

  email: 'sahaijordialan@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sahaijordialana',
    github: 'https://github.com/SJAlanA',
    leetcode: 'https://leetcode.com/u/Sahai-Jordi-Alan-A/',
    resume:
      'https://drive.google.com/file/d/15IskN5gDI7DLVEVsUZ1pJvz-WcJCo0FW/view?usp=sharing',
  },

  // Where the contact form POSTs. Leave `contactEndpoint` empty and the form
  // composes a prefilled mailto instead, which needs no backend at all.
  //
  // Replaced the old Google Apps Script endpoint, which returned 403 "You need
  // access" as of 2026-07-28 and had been failing every submission.
  //
  // The access key is public by design: Web3Forms keys live in client-side
  // code and are visible in the built bundle. It only permits sending to the
  // inbox it is registered against. Rotate it at web3forms.com if it is abused.
  contactEndpoint: 'https://api.web3forms.com/submit',
  contactAccessKey: '434b1c42-4a2b-4667-b8ad-07b38de0ac61',
};

export const metrics = [
  { value: '2 yrs', label: 'Automotive security', detail: 'Tata Elxsi' },
  { value: '150+', label: 'Students led', detail: 'CEG Tech Forum' },
  { value: '4h → 30m', label: 'Manual test cycle', detail: 'ECU diagnostics' },
  { value: 'Cornell', label: 'M.Eng, Engineering Mgmt', detail: 'Class of 2027' },
];

export const experience = [
  {
    org: 'Cornell University',
    role: 'M.Eng, Engineering Management (MEM)',
    period: 'Aug 2026 – May 2027',
    place: 'Ithaca, NY',
    current: true,
    summary:
      'Building the formal management layer on top of a hands-on engineering career: product strategy, operations, systems engineering, and data-driven decision making.',
    points: [
      'Coursework: Project Management, Applied AI for Teams, Decision Analysis, Data Analytics',
      'Student Assistant, Negotiations and Contracts (Fall 2026)',
    ],
    tags: ['Product Strategy', 'Decision Analysis', 'Data Analytics'],
  },
  {
    org: 'Tata Elxsi',
    role: 'Automotive Cybersecurity Engineer',
    period: 'Dec 2024 – May 2026',
    place: 'Bengaluru, India',
    summary:
      'Security validation for Marelli and Jaguar Land Rover programs. This is the work that taught me how technical risk actually gets prioritized and shipped.',
    points: [
      'Owned security validation planning for infotainment and telematics ECUs across 2 vehicle programs, running working sessions and daily status tracking between Marelli engineering, internal test, and client stakeholders.',
      'Automated ECU diagnostic and UDS test workflows in Python, cutting each engineer’s manual cycle from 4 hours to 30 minutes and freeing roughly 17 engineer-hours per firmware drop across a 5-person validation team.',
      'Led penetration testing and firmware analysis on production ECU builds for Jaguar Land Rover, reporting 5+ security findings, of which 2 drove design changes ahead of release sign-off.',
      'Tracked requirements coverage in IBM DOORS and defect closure in Jira, giving client and internal leads one view of test status against release gates.',
      'Onboarded and mentored 3 interns and new engineers, reducing typical ramp-up from 6 weeks to 2.',
    ],
    tags: ['Mentorship', 'Test Planning', 'Workflow Automation'],
  },
  {
    org: 'Tata Elxsi',
    role: 'Cybersecurity Intern',
    period: 'Jan 2024 – Jun 2024',
    place: 'Chennai, India',
    summary:
      'Six months embedded with the automotive security team while finishing my degree, which turned into the full-time role.',
    points: [
      'Built 2 Python and C tools for the ECU test bench, removing 25+ engineering hours of manual work per month.',
      'Executed simulated attack scenarios against automotive communication stacks and documented findings.',
    ],
    tags: ['Python', 'C', 'Vulnerability Analysis'],
  },
  {
    org: 'CSIR-CEERI',
    role: 'Project Intern',
    period: 'Jul 2022 – Aug 2022',
    place: 'Chennai, India',
    summary:
      'A research internship in driver-safety sensing, split between computer vision and embedded hardware.',
    points: [
      'Developed a driver drowsiness detection system in Python using live video processing, improving detection accuracy by over 40%.',
      'Coded an ECG sensor in C on Arduino and integrated it with a Raspberry Pi for real-time driver monitoring.',
    ],
    tags: ['Python', 'Computer Vision', 'Embedded'],
  },
  {
    org: 'CEG Tech Forum',
    role: 'Projects Student Director',
    period: 'Jul 2023 – May 2024',
    place: 'College of Engineering, Guindy',
    summary:
      'Elected to run the projects vertical of CEG’s flagship student engineering body. My first real experience owning a portfolio rather than a task.',
    points: [
      'Directed 150+ students across 14+ concurrent multidisciplinary projects, owning scope, solution design mentoring, milestone tracking, and cross-team dependencies from kickoff through final demo.',
      'Launched a project-based learning program with faculty buy-in, building its intake, review, and mentorship process.',
      'Ran logistics, event planning, finance, and cross-functional coordination for Kurukshetra, an international techno-management festival with 1,000+ participants across 20+ events.',
    ],
    tags: ['Team Leadership', 'Portfolio Management', 'Mentorship'],
  },
  {
    org: 'College of Engineering, Guindy · Anna University',
    role: 'B.E. Electronics & Communication Engineering',
    period: '2020 – Jun 2024',
    place: 'Chennai, India',
    summary:
      'Embedded systems, signals, and networks: the foundation everything since has been built on. GPA 3.69/4.00.',
    points: [],
    tags: ['Embedded Systems', 'Networks', 'Signal Processing'],
  },
];

export const work = [
  {
    kind: 'Product',
    title: 'FIGORO: Group Hangout Planning App',
    context:
      'Planning a night out with friends stalls on scheduling, venue debates, and who owes whom, and Gen Z groups tend to give up and stay home.',
    action:
      'With a four-person team, developed FIGORO as a startup concept for a Cornell course: availability matching, venue recommendations, group decisions, and cost splitting. Backed it with a Five Forces analysis, a business model, and customer profiles.',
    outcome:
      'A defined product concept and business case, worked out with the team on a shared Miro board.',
    tags: ['Product Strategy', 'Business Model', 'Customer Research'],
  },
  {
    kind: 'Automation',
    title: 'TA Email Triage and Routing System',
    context:
      'Student emails to a course inbox mix grade disputes, content questions, and logistics, and each needs a different responder.',
    action:
      'Built an n8n workflow that polls the inbox every minute, classifies each email with Claude, and routes it to the professor, a TA, or an automatic reply drawn from the course syllabus. Added a human-in-the-loop gate for disputes and any classification below 70% confidence, fail-safe JSON validation, and a Google Sheets ticket log that checks message IDs to prevent duplicate handling.',
    outcome:
      'Routine questions get answered automatically, while anything sensitive or uncertain always reaches a person.',
    tags: ['n8n', 'Claude API', 'Gmail API'],
  },
  {
    kind: 'Program',
    title: 'Autonomous Agricultural Spraying Drone',
    context:
      'A drone that sprays a farmer-defined field perimeter and auto-docks to recharge, needing mechanical, electronics, and software to land together.',
    action:
      'Led a 16-person mechanical, electronics, and CS/IT team as Team Lead, owning the budget and integration through daily standups, weekly mentor reviews, and biweekly advisor checkpoints.',
    outcome:
      'Kept three disciplines integrating against one plan, with dependencies and spend visible at every checkpoint.',
    tags: ['Team Leadership', 'Budget Ownership', 'Integration'],
  },
  {
    kind: 'Program',
    title: 'Kurukshetra: Projects & Research Track',
    context:
      'CEG’s international techno-management festival, with a projects vertical that had to be planned, staffed, and delivered against a hard event date.',
    action:
      'Ran logistics, event planning, finance, and cross-functional coordination across the organizing committee.',
    outcome:
      'Delivered on schedule at an international-scale event with 1,000+ participants across 20+ events, alongside the 150+ students and 14+ projects I was directing across the Forum.',
    tags: ['Program Management', 'Cross-team Coordination', 'Event Delivery'],
  },
  {
    kind: 'Engineering',
    title: 'Automotive Vehicle Binary Analyzer',
    context:
      'Firmware analysis on vehicle binary (VBF) files was manual and slow, and integrity checks were easy to get wrong by hand.',
    action:
      'Built a Python parser that extracts firmware metadata, memory sections, and integrity information, then implemented CRC validation and LZSS decompression on top of it.',
    outcome:
      'Turned ad-hoc firmware inspection into a repeatable, verifiable workflow for secure firmware analysis.',
    tags: ['Python', 'Firmware Analysis', 'CRC · LZSS'],
  },
  {
    kind: 'Engineering',
    title: 'Manhole Scavenging Robot',
    context:
      'A safety problem with a human cost: manual scavenging in confined, hazardous spaces.',
    action:
      'Built an embedded obstacle-detection system using current sensors to cut motors on impact, with PID-based motor control for encoder precision and system stability.',
    outcome:
      'Working prototype that improved operational safety and removed the need for a person to enter the space to assess load.',
    tags: ['C', 'Embedded', 'PID Control'],
  },
  {
    kind: 'Engineering',
    title: 'Road Accident Detection',
    context:
      'Real-time detection of road accidents from video feeds, where false positives are as costly as misses.',
    action:
      'Built and trained a CNN-based detection pipeline in Python with OpenCV, tuning against the precision/recall tradeoff that matters for an alerting system.',
    outcome: 'Achieved 89.73% AUC on real-time accident detection.',
    tags: ['Python', 'CNN', 'OpenCV'],
  },
];

export const approach = [
  {
    title: 'Technical credibility, not technical control',
    body: 'I can read the firmware and follow the protocol trace, which means I can tell an optimistic estimate from a real one without taking the keyboard away from the engineer who owns it.',
  },
  {
    title: 'Risk gets ranked, then it gets closed',
    body: 'Security taught me that a finding nobody prioritizes is a finding nobody fixes. I work in prioritized, owned, dated lists, and I follow them to zero.',
  },
  {
    title: 'Automate the work nobody should be doing',
    body: 'Half the manual effort in our diagnostic workflow was there by habit, not necessity. Finding that kind of waste and removing it is the cheapest throughput a team ever gets.',
  },
];

export const capabilities = [
  {
    group: 'Management & Delivery',
    items: [
      'Program & project coordination',
      'Cross-functional stakeholder communication',
      'Test planning & validation',
      'Mentorship & onboarding',
      'Process improvement',
      'Stakeholder reporting · Budget ownership',
      'Requirements traceability (DOORS)',
      'Jira · Git',
      'Agile delivery',
    ],
  },
  {
    group: 'Technical Foundation',
    items: [
      'Python · C/C++ · Bash',
      'n8n · Claude API · OpenCV',
      'Penetration testing · Firmware analysis',
      'CAN · LIN · UDS · XCP · FlexRay',
      'Automotive Ethernet · TCP/IP · TLS',
      'CANoe · Wireshark',
      'Reverse engineering',
      'OWASP Top 10 · MITRE ATT&CK',
      'Intrusion detection & log analysis',
      'Linux · Android Debugger',
    ],
  },
];

export const writing = [
  {
    title: 'Leading the projects vertical at CEG Tech Forum as Student Director',
    date: 'July 2024',
    blurb:
      'What running 14+ concurrent student projects taught me about scoping, staffing, and saying no.',
    link: 'https://www.linkedin.com/posts/sahaijordialana_projects-cegtechforum-kurukshetra-activity-7198382442422951937-2-xW',
  },
  {
    title: 'Starting my career in automotive cybersecurity',
    date: 'June 2024',
    blurb:
      'Moving from student projects into OEM-grade security work, and what surprised me about the gap.',
    link: 'https://www.linkedin.com/posts/sahaijordialana_cybersecurity-internship-careergrowth-activity-7222298401470652416-zmyg',
  },
];

export const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Approach', href: '#approach' },
  { name: 'Writing', href: '#writing' },
  { name: 'Contact', href: '#contact' },
];

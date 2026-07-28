/**
 * Single source of truth for every piece of copy on the site.
 * Edit here; the components read from this file and nothing else.
 *
 * Keep `metrics` and `intro` consistent with the dates in `experience`.
 * They restate the same facts and are easy to leave stale.
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
    'Automotive cybersecurity engineer turned program leader. I spent eighteen months breaking and hardening vehicle systems at Tata Elxsi, and led a 150-engineer student organization through 14+ concurrent projects before that. Now at Cornell, building the management toolkit to run technical programs at scale.',

  email: 'sahaijordialan@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sahaijordialana',
    github: 'https://github.com/SJAlanA',
    leetcode: 'https://leetcode.com/u/Sahai-Jordi-Alan-A/',
    resume:
      'https://drive.google.com/file/d/1Bkg-3KmO09vgvzi9BP00C_czUkYaRg3L/view?usp=sharing',
  },

  // Google Apps Script endpoint carried over from the previous site.
  contactEndpoint:
    'https://script.google.com/macros/s/AKfycbxh3mHTAo0_w78BDUEfcdUqdUhWMx0B9ecqTth-Pe7x857g92k_s_FITmKd0gCtoEi35Q/exec',
};

export const metrics = [
  { value: '150+', label: 'Engineers led', detail: 'CEG Tech Forum' },
  { value: '14+', label: 'Projects delivered', detail: 'Concurrent portfolio' },
  { value: '18 mo', label: 'Automotive security', detail: 'Tata Elxsi' },
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
      'Project Management, Data Analytics, AI for Teams, Engineering Economics and Finance',
    ],
    tags: ['Product Strategy', 'Operations', 'Systems Engineering'],
  },
  {
    org: 'Tata Elxsi',
    role: 'Cybersecurity Engineer, Automotive',
    period: 'Dec 2024 – May 2026',
    place: 'Chennai, India',
    summary:
      'Security assessment and hardening of in-vehicle systems for automotive OEM programs. This is the work that taught me how technical risk actually gets prioritized and shipped.',
    points: [
      'Ran security assessments on automotive ECUs and in-vehicle networks: protocol analysis, firmware reverse engineering, and vulnerability triage.',
      'Translated raw findings into prioritized, developer-ready remediation plans, and drove them to closure with engineering teams and OEM stakeholders.',
      'Built Python and Bash tooling that removed repetitive work from the assessment cycle, shortening turnaround on each engagement.',
    ],
    tags: ['Reverse Engineering', 'Threat Modeling', 'Stakeholder Management'],
  },
  {
    org: 'CEG Tech Forum',
    role: 'Projects & Research Student Director',
    period: '2023 – 2024',
    place: 'College of Engineering, Guindy',
    summary:
      'Elected to run the projects vertical of CEG’s flagship student engineering body. My first real experience owning a portfolio rather than a task.',
    points: [
      'Led 150+ student engineers across a portfolio of 14+ concurrent projects, from proposal through public demo.',
      'Designed the intake, review, and mentorship process that matched students to teams and kept blocked projects moving.',
      'Ran the projects & research track for Kurukshetra, CEG’s international techno-management festival.',
    ],
    tags: ['Team Leadership', 'Portfolio Management', 'Mentorship'],
  },
  {
    org: 'College of Engineering, Guindy · Anna University',
    role: 'B.E. Electronics & Communication Engineering',
    period: '2020 – 2024',
    place: 'Chennai, India',
    summary:
      'Embedded systems, signals, and networks: the foundation everything since has been built on.',
    points: [],
    tags: ['Embedded Systems', 'Networks', 'Signal Processing'],
  },
];

export const work = [
  {
    kind: 'Program',
    title: 'Kurukshetra: Projects & Research Track',
    context:
      'CEG’s international techno-management festival, with a projects vertical that had to be planned, staffed, and delivered against a hard event date.',
    action:
      'Owned the track end to end: scoped the project slate, recruited and assigned student teams, set review checkpoints, and coordinated across the organizing committee.',
    outcome:
      'Delivered the full slate on schedule at an international-scale event, with 150+ engineers coordinated across parallel workstreams.',
    tags: ['Program Management', 'Cross-team Coordination', 'Event Delivery'],
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
  {
    kind: 'Engineering',
    title: 'Manhole Scavenging Robot',
    context:
      'A safety problem with a human cost: manual scavenging in confined, hazardous spaces.',
    action:
      'Designed a load-detection system on Arduino in C, with PID control governing the actuation loop.',
    outcome:
      'Working prototype that removed the need for a person to enter the space to assess load.',
    tags: ['C', 'Arduino', 'PID Control'],
  },
  {
    kind: 'Engineering',
    title: 'Agri Spraying Drone',
    context:
      'Precision spraying for smallholder farms, where operator time is the binding constraint.',
    action:
      'Integrated sensors and an ESP8266 control stack with OpenCV-based targeting, plus an auto-docking routine for unattended cycles.',
    outcome:
      'Automated spray runs with auto-docking, cutting the manual supervision each cycle required.',
    tags: ['Python', 'OpenCV', 'ESP8266'],
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
    title: 'Process exists to unblock people',
    body: 'At CEG Tech Forum the only process that survived was the process that got teams unstuck. I add ceremony when it removes friction and cut it the moment it stops.',
  },
];

export const capabilities = [
  {
    group: 'Management & Delivery',
    items: [
      'Program & project management',
      'Cross-functional stakeholder management',
      'Roadmapping & prioritization',
      'Risk assessment & mitigation',
      'Team leadership & mentorship',
      'Agile delivery',
      'Technical requirements & specs',
      'Vendor & OEM coordination',
    ],
  },
  {
    group: 'Technical Foundation',
    items: [
      'Automotive & embedded security',
      'Reverse engineering',
      'Penetration testing · OWASP Top 10',
      'MITRE ATT&CK',
      'Network protocols',
      'Python · C/C++ · SQL',
      'ARM Assembly · Bash',
      'Machine learning (CNNs, OpenCV)',
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

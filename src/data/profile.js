/**
 * Single source of truth for every piece of copy on the site.
 * Edit here; the components read from this file and nothing else.
 *
 * Figures here are taken from Sahai_Jordi_Alan_Resume.pdf. Keep `metrics` and
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
    'Automotive cybersecurity engineer turned program leader. Two years at Tata Elxsi validating in-vehicle systems, automating ECU diagnostics, and mentoring the engineers who came in behind me, after leading 100+ students across 10+ projects at CEG Tech Forum. Now at Cornell, building the management toolkit to run technical programs at scale.',

  email: 'sahaijordialan@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sahaijordialana',
    github: 'https://github.com/SJAlanA',
    leetcode: 'https://leetcode.com/u/Sahai-Jordi-Alan-A/',
    resume:
      'https://drive.google.com/file/d/1Bkg-3KmO09vgvzi9BP00C_czUkYaRg3L/view?usp=sharing',
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
  { value: '100+', label: 'Students led', detail: 'CEG Tech Forum' },
  { value: '50%', label: 'Manual effort removed', detail: 'ECU diagnostics' },
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
    role: 'Automotive Cybersecurity Engineer',
    period: 'Dec 2024 – May 2026',
    place: 'Bengaluru, India',
    summary:
      'Security validation and hardening of in-vehicle systems for automotive OEM programs. This is the work that taught me how technical risk actually gets prioritized and shipped.',
    points: [
      'Mentored and trained incoming interns on automotive cybersecurity practices, technical workflows, and corporate process, accelerating onboarding and getting them contributing sooner.',
      'Automated ECU diagnostic workflows in Python, reducing manual intervention by over 50% and improving testing efficiency.',
      'Coordinated cybersecurity validation for infotainment and telematics ECUs, managing structured test plans across secure boot, secure communication, and access control.',
      'Analyzed ECU firmware and diagnostic security mechanisms to identify system-level vulnerabilities and improve workflows.',
      'Validated intrusion detection for infotainment systems through structured penetration testing and adversarial scenarios.',
    ],
    tags: ['Mentorship', 'Test Planning', 'Workflow Automation'],
  },
  {
    org: 'Tata Elxsi',
    role: 'Cybersecurity Trainee',
    period: 'Jan 2024 – Jun 2024',
    place: 'Chennai, India',
    summary:
      'Six months embedded with the automotive security team while finishing my degree, which turned into the full-time role.',
    points: [
      'Developed Python and C automation tools that cut manual tasks by 20% and saved 25+ engineering hours per month.',
      'Ran security testing and simulated attack scenarios on automotive communication systems, including key fob and TPMS functionality, to support vulnerability analysis and system validation.',
    ],
    tags: ['Python', 'C', 'Vulnerability Analysis'],
  },
  {
    org: 'CEG Tech Forum',
    role: 'Projects Student Director',
    period: 'Jul 2023 – May 2024',
    place: 'College of Engineering, Guindy',
    summary:
      'Elected to run the projects vertical of CEG’s flagship student engineering body. My first real experience owning a portfolio rather than a task.',
    points: [
      'Led and mentored 100+ students across 10+ technical projects, coordinating execution, timelines, collaboration, and knowledge sharing across multidisciplinary teams.',
      'Promoted project-based learning initiatives across the college, driving multidisciplinary innovation and hands-on technical development.',
      'Organized events for Kurukshetra, an international techno-management festival, managing logistics, operations, and cross-functional coordination.',
    ],
    tags: ['Team Leadership', 'Portfolio Management', 'Mentorship'],
  },
  {
    org: 'College of Engineering, Guindy · Anna University',
    role: 'B.E. Electronics & Communication Engineering',
    period: '2020 – Jun 2024',
    place: 'Chennai, India',
    summary:
      'Embedded systems, signals, and networks: the foundation everything since has been built on. GPA 8.53/10.',
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
      'Organized the projects events end to end, managing logistics, operations, and cross-functional coordination across the organizing committee.',
    outcome:
      'Delivered on schedule at an international-scale event, drawing on the 100+ students and 10+ projects I was coordinating across the Forum.',
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
      'Requirements management (DOORS)',
      'Jira · Git',
      'Agile delivery',
    ],
  },
  {
    group: 'Technical Foundation',
    items: [
      'Python · C/C++ · Bash',
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
      'What running 10+ concurrent student projects taught me about scoping, staffing, and saying no.',
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

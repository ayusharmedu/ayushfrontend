export interface MetricCard {
  label: string;
  value: string;
  helper: string;
  sublabel: string;
  tone: 'success' | 'neutral' | 'warning' | 'danger';
}

export interface UserRow {
  initials: string;
  colorClass: string;
  name: string;
  email: string;
  role: string;
  scope: 'Org' | 'Dept' | 'Team';
  team: string;
  mfa: 'enrolled' | 'missing';
  status: 'active' | 'inactive' | 'invited';
  lastActive: string;
}

export const metrics: MetricCard[] = [
  { label: 'Total members', value: '218', helper: '+12', sublabel: 'this month', tone: 'success' },
  { label: 'Active in 30d', value: '194', helper: '89%', sublabel: 'of total', tone: 'neutral' },
  { label: 'Pending invites', value: '6', helper: '2 expiring', sublabel: '', tone: 'warning' },
  { label: 'MFA enrolled', value: '87%', helper: '13 missing', sublabel: '', tone: 'danger' },
];

export const users: UserRow[] = [
  {
    initials: 'AA',
    colorClass: 'avatar-indigo',
    name: 'Alice Admin',
    email: 'alice@acme.com',
    role: 'Administrator',
    scope: 'Org',
    team: 'Platform',
    mfa: 'enrolled',
    status: 'active',
    lastActive: 'Active now',
  },
  {
    initials: 'MR',
    colorClass: 'avatar-sky',
    name: 'Maya Reyes',
    email: 'm.reyes@acme.com',
    role: 'Department Lead',
    scope: 'Dept',
    team: 'Engineering',
    mfa: 'enrolled',
    status: 'active',
    lastActive: '12 minutes ago',
  },
  {
    initials: 'JD',
    colorClass: 'avatar-amber',
    name: 'James Doe',
    email: 'james@acme.com',
    role: 'Data Engineer',
    scope: 'Team',
    team: 'Analytics',
    mfa: 'enrolled',
    status: 'active',
    lastActive: '2 hours ago',
  },
  {
    initials: 'KA',
    colorClass: 'avatar-emerald',
    name: 'Kai Aalto',
    email: 'kai@acme.com',
    role: 'Data Engineer',
    scope: 'Team',
    team: 'Analytics',
    mfa: 'missing',
    status: 'active',
    lastActive: 'Yesterday',
  },
  {
    initials: 'PL',
    colorClass: 'avatar-rose',
    name: 'Priya Lin',
    email: 'priya@acme.com',
    role: 'Auditor',
    scope: 'Org',
    team: 'Compliance',
    mfa: 'enrolled',
    status: 'active',
    lastActive: '3 days ago',
  },
  {
    initials: 'TK',
    colorClass: 'avatar-violet',
    name: 'Tom Kim',
    email: 'tom@acme.com',
    role: 'Viewer',
    scope: 'Team',
    team: 'Analytics',
    mfa: 'enrolled',
    status: 'inactive',
    lastActive: '2 weeks ago',
  },
  {
    initials: 'SR',
    colorClass: 'avatar-orange',
    name: 'Sara Ruiz',
    email: 'sara@acme.com',
    role: 'Data Engineer',
    scope: 'Team',
    team: 'Platform',
    mfa: 'enrolled',
    status: 'active',
    lastActive: '1 hour ago',
  },
];

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { metrics, users } from '../../mock-data';

type UserTab = 'all' | 'active' | 'invited' | 'inactive' | 'sso' | 'no-mfa';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly metrics = metrics;
  readonly users = users;
  readonly search = signal('');
  readonly activeTab = signal<UserTab>('all');

  readonly tabs: Array<{ id: UserTab; label: string; count: string }> = [
    { id: 'all', label: 'All users', count: '218' },
    { id: 'active', label: 'Active', count: '194' },
    { id: 'invited', label: 'Invited', count: '6' },
    { id: 'inactive', label: 'Inactive', count: '12' },
    { id: 'sso', label: 'SSO', count: '142' },
    { id: 'no-mfa', label: 'No MFA', count: '28' },
  ];

  readonly filteredUsers = computed(() => {
    const query = this.search().trim().toLowerCase();
    const tab = this.activeTab();

    return this.users.filter((user) => {
      const matchesSearch =
        !query ||
        [user.name, user.email, user.role, user.team, user.scope].some((value) =>
          value.toLowerCase().includes(query),
        );

      const matchesTab =
        tab === 'all' ||
        (tab === 'active' && user.status === 'active') ||
        (tab === 'invited' && user.status === 'invited') ||
        (tab === 'inactive' && user.status === 'inactive') ||
        (tab === 'sso' && user.role !== 'Viewer') ||
        (tab === 'no-mfa' && user.mfa === 'missing');

      return matchesSearch && matchesTab;
    });
  });

  setSearch(value: string): void {
    this.search.set(value);
  }

  setTab(tab: UserTab): void {
    this.activeTab.set(tab);
  }

  scopeLabel(scope: 'Org' | 'Dept' | 'Team'): string {
    return {
      Org: 'Organization',
      Dept: 'Department',
      Team: 'Team',
    }[scope];
  }
}

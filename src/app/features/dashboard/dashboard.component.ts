import { CommonModule } from '@angular/common';
import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { metrics, users } from '../../mock-data';
type UserTab = 'all' | 'active' | 'invited' | 'inactive' | 'sso' | 'no-mfa';
type Density = 'compact' | 'comfortable' | 'spacious';
type SortField = 'name' | 'lastActive';
type SortOrder = 'asc' | 'desc';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly metrics = metrics;
  readonly users = users;
  readonly search: WritableSignal<string> = signal('');
  readonly activeTab: WritableSignal<UserTab> = signal<UserTab>('all');
  readonly density: WritableSignal<Density> = signal<Density>('compact');
  readonly sortField: WritableSignal<SortField> = signal<SortField>('name');
  readonly sortOrder: WritableSignal<SortOrder> = signal<SortOrder>('asc');
  readonly selectedUsers: WritableSignal<Set<string>> = signal(new Set<string>());

  readonly tabs: Array<{ id: UserTab; label: string; count: string }> = [
    { id: 'all', label: 'All users', count: '218' },
    { id: 'active', label: 'Active', count: '194' },
    { id: 'invited', label: 'Invited', count: '6' },
    { id: 'inactive', label: 'Inactive', count: '12' },
    { id: 'sso', label: 'SSO', count: '142' },
    { id: 'no-mfa', label: 'No MFA', count: '28' },
  ];

  readonly filteredUsers: Signal<typeof users> = computed(() => {
    const query = this.search().trim().toLowerCase();
    const tab = this.activeTab();
    const field = this.sortField();
    const order = this.sortOrder();

    let filtered = this.users.filter((user) => {
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

    return [...filtered].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      const modifier = order === 'asc' ? 1 : -1;

      // Special handling for Last Active (simplified for mock data)
      if (field === 'lastActive') {
        if (valA === 'Active now') return -1 * modifier;
        if (valB === 'Active now') return 1 * modifier;
      }

      return valA.localeCompare(valB) * modifier;
    });
  });

  readonly selectedCount = computed(() => this.selectedUsers().size);
  readonly allVisibleSelected = computed(() => {
    const visibleUsers = this.filteredUsers();
    const selected = this.selectedUsers();

    return visibleUsers.length > 0 && visibleUsers.every((user) => selected.has(user.email));
  });
  readonly partiallySelected = computed(() => {
    const visibleUsers = this.filteredUsers();
    const selected = this.selectedUsers();
    const visibleSelectedCount = visibleUsers.filter((user) => selected.has(user.email)).length;

    return visibleSelectedCount > 0 && visibleSelectedCount < visibleUsers.length;
  });

  setSearch(value: string): void {
    this.search.set(value);
  }

  setTab(tab: UserTab): void {
    this.activeTab.set(tab);
  }

  setDensity(value: Density): void {
    this.density.set(value);
  }

  toggleSort(field: SortField): void {
    if (this.sortField() === field) {
      this.sortOrder.set(this.sortOrder() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortField.set(field);
      this.sortOrder.set('asc');
    }
  }

  isSelected(email: string): boolean {
    return this.selectedUsers().has(email);
  }

  toggleUser(email: string): void {
    this.selectedUsers.update((selected) => {
      const next = new Set(selected);

      if (next.has(email)) {
        next.delete(email);
      } else {
        next.add(email);
      }

      return next;
    });
  }

  toggleAllVisible(): void {
    const visibleUsers = this.filteredUsers();

    this.selectedUsers.update((selected) => {
      const next = new Set(selected);

      if (visibleUsers.length > 0 && visibleUsers.every((user) => next.has(user.email))) {
        visibleUsers.forEach((user) => next.delete(user.email));
      } else {
        visibleUsers.forEach((user) => next.add(user.email));
      }

      return next;
    });
  }

  clearSelection(): void {
    this.selectedUsers.set(new Set<string>());
  }

  scopeLabel(scope: 'Org' | 'Dept' | 'Team'): string {
    return {
      Org: 'Organization',
      Dept: 'Department',
      Team: 'Team',
    }[scope];
  }
}

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IconComponent } from '../../../shared/ui/icon/icon.component';

interface PasswordCriterion {
  label: string;
  met: boolean;
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly workspace = signal('acme');
  readonly email = signal('alice@acme.com');
  readonly password = signal('Sunshine42!Trail');
  readonly showPassword = signal(false);

  readonly criteria = computed<PasswordCriterion[]>(() => {
    const value = this.password();
    return [
      { label: '12+ characters', met: value.length >= 12 },
      { label: 'Upper & lowercase', met: /[A-Z]/.test(value) && /[a-z]/.test(value) },
      { label: 'Number', met: /\d/.test(value) },
      { label: 'Symbol', met: /[^a-zA-Z0-9]/.test(value) },
    ];
  });

  readonly strengthScore = computed(() => this.criteria().filter((item) => item.met).length);
  readonly strengthLabel = computed(() => ['', 'Weak', 'Fair', 'Good', 'Strong'][this.strengthScore()]);
  readonly strengthTone = computed(() => {
    const score = this.strengthScore();
    if (score <= 1) {
      return 'danger';
    }
    if (score <= 3) {
      return 'warning';
    }
    return 'success';
  });

  constructor(private readonly router: Router) {}

  updatePassword(value: string): void {
    this.password.set(value);
  }

  signIn(): void {
    void this.router.navigateByUrl('/dashboard');
  }
}

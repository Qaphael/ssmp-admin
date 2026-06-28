/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Sport = 'football' | 'basketball' | 'volleyball' | 'athletics' | 'swimming' | 'other';

export type UserRole =
  | 'system_admin'
  | 'comp_admin'
  | 'registrar'
  | 'referee_coordinator'
  | 'media_officer'
  | 'official'
  | 'coach';

export type CompetitionStatus =
  | 'draft'
  | 'setup'
  | 'registration_open'
  | 'registration_closed'
  | 'in_progress'
  | 'completed'
  | 'archived';

export type RegistrationStatus = 'pending' | 'approved' | 'rejected';

export type RosterApprovalStatus = 'draft' | 'submitted' | 'approved' | 'rejected';

export type PlayerStatus = 'active' | 'injured' | 'suspended' | 'inactive';

export type MatchStatus =
  | 'scheduled'
  | 'officials_assigned'
  | 'lineups_submitted'
  | 'lineups_locked'
  | 'kickoff'
  | 'half_time'
  | 'second_half'
  | 'extra_time'
  | 'penalties'
  | 'full_time'
  | 'report_submitted'
  | 'verified'
  | 'published'
  | 'postponed'
  | 'cancelled'
  | 'abandoned'
  | 'walkover';

export interface Organization {
  id: string;
  name: string;
  description?: string;
  logoUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Season {
  id: string;
  organizationId: string;
  name: string;
  startDate: string;
  endDate: string;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CompetitionRules {
  pointsForWin: number;
  pointsForDraw: number;
  pointsForLoss: number;
  matchDurationMinutes: number;
  halfTimeDurationMinutes: number;
  extraTimeDurationMinutes: number;
  allowedSubstitutions: number;
  yellowCardsForSuspension: number;
  suspensionMatches: number;
  redCardImmediateSuspension: boolean;
  walkoverDefaultScoreHome: number;
  walkoverDefaultScoreAway: number;
}

export interface RegistrationWindow {
  opensAt: string;
  closesAt: string;
}

export interface Competition {
  id: string;
  seasonId: string;
  name: string;
  sport: Sport;
  division?: string;
  status: CompetitionStatus;
  rules: CompetitionRules;
  registrationWindow: RegistrationWindow;
  enableGroups: boolean;
  enableKnockouts: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Group {
  id: string;
  competitionId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Pitch {
  id: string;
  organizationId: string;
  name: string;
  address?: string;
  capacity?: number;
  surfaceType?: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  competitionId: string;
  groupId?: string;
  name: string;
  schoolName: string;
  description?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  registrationStatus: RegistrationStatus;
  rosterApprovalStatus: RosterApprovalStatus;
  coachId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Player {
  id: string;
  teamId: string;
  firstName: string;
  lastName: string;
  jerseyNumber: number;
  position?: string;
  dateOfBirth: string;
  nationality?: string;
  height?: number;
  weight?: number;
  photoUrl?: string;
  status: PlayerStatus;
  createdAt: string;
  updatedAt: string;
}

export interface TeamRegistration {
  id: string;
  competitionId: string;
  teamName: string;
  schoolName: string;
  coachEmail: string;
  coachFirstName: string;
  coachLastName: string;
  status: RegistrationStatus;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RosterSubmission {
  id: string;
  teamId: string;
  competitionId: string;
  playerIds: string[];
  status: RosterApprovalStatus;
  submittedBy: string;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Fixture {
  id: string;
  competitionId: string;
  matchday: number;
  homeTeamId: string;
  awayTeamId: string;
  scheduledAt: string;
  pitchId?: string;
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
  officialId?: string;
  postponedReason?: string;
  walkoverTeamId?: string;
  walkoverReason?: string;
  createdAt: string;
  updatedAt: string;
}

export type CardType = 'yellow' | 'red';
export type OfficialAttendance = 'present' | 'absent' | 'late';
export type NotificationType =
  | 'fixture_published'
  | 'fixture_changed'
  | 'official_assigned'
  | 'roster_approved'
  | 'roster_rejected'
  | 'transfer_approved'
  | 'transfer_rejected'
  | 'suspension_applied'
  | 'kickoff_reminder'
  | 'match_postponed'
  | 'match_cancelled';

export type MediaType = 'logo' | 'photo' | 'video' | 'document';

export interface Official {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone?: string;
  certifications?: string[];
  availability?: {
    weekdayEvenings: boolean;
    weekends: boolean;
    holidays: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface TransferRequest {
  id: string;
  playerId: string;
  fromTeamId: string;
  toTeamId: string;
  competitionId: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedBy: string;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}

export type MatchEventType =
  | 'kickoff'
  | 'goal'
  | 'own_goal'
  | 'assist'
  | 'yellow_card'
  | 'red_card'
  | 'substitution'
  | 'half_time'
  | 'full_time'
  | 'extra_time_start'
  | 'penalty_scored'
  | 'penalty_missed';

export interface MatchEvent {
  id: string;
  matchId: string;
  type: MatchEventType;
  minute: number;
  playerId?: string;
  teamId?: string;
  description?: string;
  recordedBy: string;
  createdAt: string;
}

export interface Lineup {
  id: string;
  matchId: string;
  teamId: string;
  playerIds: string[];
  isStarting: boolean;
  isLocked: boolean;
  submittedBy: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Card {
  id: string;
  matchId: string;
  playerId: string;
  teamId: string;
  type: CardType;
  minute: number;
  reason?: string;
  competitionId: string;
  createdAt: string;
}

export interface Suspension {
  id: string;
  playerId: string;
  competitionId: string;
  reason: string;
  matchesCount: number;
  matchesServed: number;
  cardId?: string;
  startDate: string;
  endDate?: string;
  isServed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  readAt?: string;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  oldValue?: Record<string, unknown>;
  newValue?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

export interface Media {
  id: string;
  uploadedBy: string;
  type: MediaType;
  url: string;
  filename: string;
  fileSize: number;
  mimeType: string;
  caption?: string;
  matchId?: string;
  teamId?: string;
  playerId?: string;
  isApproved: boolean;
  approvedBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  authorId: string;
  isPublished: boolean;
  publishedAt?: string;
  competitionId?: string;
  teamId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Standing {
  id: string;
  competitionId: string;
  teamId: string;
  groupId?: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  position?: number;
  createdAt: string;
  updatedAt: string;
}

import { Activity } from '../models/activity';
import { format } from './format-camel-case';
import { routeFor } from './route-for';
import type { EventParameter } from './route-for';

export type EventClassification = typeof eventClassifications[number];
type EventOrActivity = HistoryEventWithId | PendingActivity | Activity;

type EventSummary = {
  id: string;
  name: string;
  timeStamp: string;
  classification: EventClassification;
  tag: string;
  pending: boolean;
  activity: boolean;
  type: 'event' | 'pending-activity' | 'activity';
  routeFor: (parameters: EventParameter) => string;
};

export const eventClassifications = [
  'Unspecified',
  'Scheduled',
  'Open',
  'New',
  'Started',
  'Initiated',
  'Running',
  'Completed',
  'Fired',
  'CancelRequested',
  'TimedOut',
  'Signaled',
  'Canceled',
  'Failed',
  'Terminated',
] as const;

const has = (target: unknown, property: string): boolean => {
  return Object.prototype.hasOwnProperty.call(target, property);
};

export const isEvent = (event: unknown): event is HistoryEventWithId => {
  if (event === null) return false;
  if (typeof event !== 'object') return false;
  if (Array.isArray(event)) return false;
  if (has(event, 'eventType')) return true;
  return false;
};

export const isPendingActivity = (
  event: EventOrActivity,
): event is PendingActivity => {
  if (event === null) return false;
  if (typeof event !== 'object') return false;
  if (Array.isArray(event)) return false;
  if (has(event, 'activityType')) return true;
  return false;
};

export const isActivity = (event: EventOrActivity): event is Activity => {
  return event instanceof Activity;
};

export const getEventClassification = (
  event: EventOrActivity,
): EventClassification => {
  if (isPendingActivity(event)) return event.state;
  if (isActivity(event)) event = event.get('ActivityTaskScheduled');

  const eventType = event.eventType;

  if (eventType.includes('RequestCancel')) return 'CancelRequested';
  for (const classification of eventClassifications) {
    if (eventType.includes(classification)) return classification;
  }
};

const getName = (event: EventOrActivity): string => {
  if (isEvent(event)) return String(event.eventType);
  if (isPendingActivity(event))
    return `${event.activityType.name}:${event.state}`;
  if (isActivity(event)) return event.name;
};

const getTime = (event: EventOrActivity): string => {
  if (isEvent(event)) return String(event.eventTime);
  if (isPendingActivity(event)) return String(event.lastStartedTime);
  if (isActivity(event)) return String(event.last.eventTime);
};

const getId = (event: EventOrActivity): string => {
  if (isEvent(event)) return String(event.eventId);
  if (isPendingActivity(event)) return String(event.activityId);
  if (isActivity(event)) return String(event.id);
};

const getType = (
  event: EventOrActivity,
): 'event' | 'pending-activity' | 'activity' => {
  if (isEvent(event)) return 'event';
  if (isPendingActivity(event)) return 'pending-activity';
  if (isActivity(event)) return 'activity';
};

export const getHref = (
  event: EventOrActivity,
  parameters: EventParameter,
): string => {
  if (isEvent(event)) return routeFor('workflow.events.full.event', parameters);
  if (isPendingActivity(event))
    routeFor('workflow.events.full.pending', parameters);
  if (isActivity(event))
    return routeFor('workflow.events.compact.activity', parameters);
};

export const formatEvent = (
  event: EventOrActivity | Activity,
): EventSummary => {
  return {
    id: getId(event),
    name: format(getName(event)),
    timeStamp: getTime(event),
    classification: getEventClassification(event),
    tag: getName(event),
    type: getType(event),
    pending: isPendingActivity(event),
    activity: isActivity(event),
    routeFor: (parameters: EventParameter) => getHref(event, parameters),
  };
};
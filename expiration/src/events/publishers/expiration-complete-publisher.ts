import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@wayson-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

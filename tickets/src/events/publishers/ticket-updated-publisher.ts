import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@wayson-ticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

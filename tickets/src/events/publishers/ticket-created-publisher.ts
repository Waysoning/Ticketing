import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@wayson-ticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

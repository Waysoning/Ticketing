import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@wayson-ticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

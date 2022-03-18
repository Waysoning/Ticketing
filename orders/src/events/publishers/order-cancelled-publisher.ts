import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@wayson-ticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

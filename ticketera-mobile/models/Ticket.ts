export interface Ticket {
  id: string; //GUID Or Ulid
  eventId: number;
  sectionId: string;
  rowId: string;
  seatId: string;
  price: number;
  discountAmount: number;
  paidAmount: number;
  status: "USED" | "AVAILABLE" | "BLOCKED";
  qrImageUrl: string;
  paymentStatus: "PAID" | "REVERSED" | "PARTIAL";
  activityHistory: ActivityHistory[];
  buyerId: number;
  purchasedDate: Date;
  createdAt: Date;
}

export interface ActivityHistory {
  id: string;
  ticketId: string;
  
}

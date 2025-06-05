export interface Event {
  id: number;
  name: string;
  createdDate: Date;
  date: Date;
  visibility: "PUBLISHED" | "PRIVATE" | "READY" | "INCOMPLETE";
  creationDate: Date;
  seatSections: EventSection[];
  capacity: number;
  venueType: string;
  address: EventAddress;
  paymentCurrency: string;
  images: EventImages;
  hasPrevent: boolean;
  ticketsSalePreventEndTime?: Date;
  ticketsSaleStartTime: Date;
  organizerId: number;
  activityHistory: ActivityHistory[];
}

export interface ActivityHistory {
  id: string;
  eventId: number;
  description: string;
  userId: string;
  date: Date;
}
export interface EventSection {
  id: string;
  eventId: number;
  name: string;
  seatsQuantity: number;
  availableQuantity: number;
  isActive: boolean;
}

export interface SectionRow {
  id: string;
  name: string;
  sectionId: string;
  eventId: string;
}

export interface RowSeat {
  id: string; //GUID or ULID
  seatNumber: number;
  rowId: number;
  sectionId: number;
  eventId: number;
  isAvailable: boolean;
  price: number;
}

export interface EventImages {
  id: string;
  eventId: number;
  portraitUrl: string;
  bannerUrl: string;
}

export interface EventAddress {
  id: string;
  eventId: number;
  city: string;
  country: string;
  postalCode?: number;
  fullAddress: string;
}

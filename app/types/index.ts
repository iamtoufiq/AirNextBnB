import { BnbListing, BnbReservation, BnbUser } from "@prisma/client";

export type SafeListing = Omit<BnbListing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  BnbReservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  BnbUser,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

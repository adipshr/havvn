import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

import sendReservationEmail from "@/app/utils/mailer/sendReservationEmail";
import sendBookingEmail from "@/app/utils/mailer/sendBookingEmail";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { listingId, startDate, endDate, totalPrice } = body;

  if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    include: {
      user: true,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });

  const { user: host } = listingAndReservation;
  const hostEmail = host.email;
  const hostName = host.name;
  const hostFirstName = hostName?.split(" ")[0];

  const guestEmail = currentUser.email;
  const guestName = currentUser.name;
  const guestFirstName = guestName?.split(" ")[0];

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const startDateobj = new Date(startDate);
  const formattedStartDate = new Intl.DateTimeFormat("en-GB", options).format(
    startDateobj
  );
  const endDateobj = new Date(endDate);
  const formattedEndDate = new Intl.DateTimeFormat("en-GB", options).format(
    endDateobj
  );

  try {
    await sendReservationEmail(
      hostEmail, // Receiver's email (host's email)
      `Hey ${hostFirstName}, New Reservation Made for Your Property on Havvn!`, // Email subject
      guestName, // Guest's name
      guestEmail, // Guest's email
      formattedStartDate, // Check-in date
      formattedEndDate, // Check-out date
      hostFirstName // Host's name
    );

    await sendBookingEmail(
      guestEmail, // Receiver's email
      `Hey ${guestFirstName}, Get Ready for an Amazing Stay!`, // Email subject
      guestFirstName, // Guest's name
      formattedStartDate, // Check-in date
      formattedEndDate, // Check-out date
      totalPrice, // Total price
      hostName, // Host's name
      hostEmail // Host's email
    );
  } catch (error) {
    console.log("Email not sent", error);
  }

  return NextResponse.json(listingAndReservation);
}

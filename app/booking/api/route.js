import { supabase } from "@/app/utils/supabaseClient";
import { sendBookingEmails } from "@/app/utils/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      date,
      time,
      guest,
      type_of_eating,
      special_request,
    } = body;

    if (!name || !date || !time || !guest || !type_of_eating) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const guestNumber = Number(guest);
    if (!Number.isFinite(guestNumber) || guestNumber < 1) {
      return new Response(JSON.stringify({ error: "Invalid guest number" }), {
        status: 400,
      });
    }

    const chosen = new Date(`${date}T${time}:00`);
    if (isNaN(chosen.getTime()) || chosen <= new Date()) {
      return new Response(
        JSON.stringify({ error: "Invalid or past date/time" }),
        { status: 400 }
      );
    }

    const { data: booking, error: insertError } = await supabase
      .from("booking")
      .insert([
        {
          name,
          email,
          phone,
          date,
          time,
          guest: guestNumber,
          type_of_eating,
          special_request,
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return new Response(JSON.stringify({ error: insertError.message }), {
        status: 500,
      });
    }

    // send emails
    try {
      await sendBookingEmails({
        clientEmail: email,
        ownerMsg: {
          from: process.env.SMTP_USER,
          subject: `New booking: ${name} — ${date} ${time}`,
          text: `
🎉 New Booking Received 🎉

🔹 Name: ${name}
🔹 Email: ${email || "N/A"}
🔹 Phone: ${phone || "N/A"}
🔹 Date: ${date}
🔹 Time: ${time}
🔹 Guests: ${guestNumber}
🔹 Type: ${type_of_eating}
🔹 Special Request: ${special_request || "None"}
          `,
        },
        clientMsg: {
          from: `"Caffe del 900" <no-reply@caffedel900.com>`,
          subject: `Booking confirmation - ${date} ${time}`,
          text: `
Hi ${name}, 👋

Thank you for booking with Caffe del 900! Here’s a summary of your reservation:

📅 Date: ${date}
⏰ Time: ${time}
👥 Guests: ${guestNumber}
🍽 Type: ${type_of_eating}

Special Requests: ${special_request || "None"}

If you need to change or cancel your booking, simply reply to this email.

We look forward to welcoming you soon!  

— Caffe del 900 Team
          `,
        },
      });
      console.log("Emails sent successfully");
    } catch (mailErr) {
      console.warn("Failed to send emails:", mailErr);
    }

    return new Response(
      JSON.stringify({ message: "Booking created", booking }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Booking API unexpected error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

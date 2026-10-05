import { NextRequest, NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation/inquirySchema";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check honeypot first
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    // Validate with Zod
    const validation = inquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validation.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL || "hello@thejourneystudio.com";
    const fromEmail = process.env.INQUIRY_FROM_EMAIL || "Journey Studio <onboarding@resend.dev>";

    // If Resend API key is configured, send notifications
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      // 1. Internal notification to Maheen
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: data.email,
        subject: `New Journey Studio inquiry — ${data.projectObjective || "Project"} — ${data.brand || data.firstName}`,
        text: `
New project inquiry submitted on Journey Studio:

Name: ${data.firstName}
Email: ${data.email}
Brand / Company: ${data.brand || "N/A"}
Role: ${data.role || "N/A"}
Website / Social: ${data.website || "N/A"}
Objective: ${data.projectObjective || "N/A"}
Distribution: ${data.distribution?.join(", ") || "N/A"}
Production Investment: ${data.budget || "N/A"}
Timeline: ${data.timeline || "N/A"}
Location: ${data.location || "N/A"}
Brand Aesthetic: ${data.brandAesthetic || "N/A"}
Attraction: ${data.attraction || "N/A"}

Story:
${data.story}
        `,
      });

      // 2. Client confirmation email
      await resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: "Your Journey Studio inquiry is in",
        text: `Hi ${data.firstName},

Thanks for reaching out to Journey Studio.

I've received your project details and will review the idea, scope, and timing. If it feels like a natural fit, I'll follow up with next steps.

Maheen
Journey Studio
Toronto · Global
https://thejourneystudio.com
        `,
      });
    } else {
      console.log("[INQUIRY LOG] Submission received (Resend key not set in dev):", {
        name: data.firstName,
        email: data.email,
        brand: data.brand,
        storyPreview: data.story.substring(0, 80),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

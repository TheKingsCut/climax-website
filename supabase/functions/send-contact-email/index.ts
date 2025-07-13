import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  reason: string;
  industry: string;
  projectDetails?: string;
}

const getSubjectLine = (reason: string, company: string): string => {
  const subjects = {
    quote: `Quote Request from ${company}`,
    partnership: `Partnership Inquiry from ${company}`,
    information: `More Information Request from ${company}`,
    other: `General Inquiry from ${company}`,
  };
  
  return subjects[reason as keyof typeof subjects] || `Contact Form Submission from ${company}`;
};

const formatEmailContent = (data: ContactFormData): string => {
  const reasonLabels = {
    quote: "Quote Request",
    partnership: "Partnership Inquiry", 
    information: "More Information",
    other: "Other",
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0066cc; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Company:</strong> ${data.company}</p>
        ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
      </div>

      <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #0066cc; margin-top: 0;">Inquiry Details</h3>
        <p><strong>Reason for Contact:</strong> ${reasonLabels[data.reason as keyof typeof reasonLabels] || data.reason}</p>
        <p><strong>Industry Application:</strong> ${data.industry}</p>
      </div>

      ${data.projectDetails ? `
        <div style="background-color: #fff8dc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0066cc; margin-top: 0;">Project Details</h3>
          <p style="white-space: pre-wrap;">${data.projectDetails}</p>
        </div>
      ` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; font-size: 12px;">
        <p>This email was sent from the CLI-MAX contact form at ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactFormData = await req.json();

    console.log("Received contact form submission:", {
      name: contactData.name,
      company: contactData.company,
      reason: contactData.reason,
      industry: contactData.industry,
    });

    const subject = getSubjectLine(contactData.reason, contactData.company);
    const htmlContent = formatEmailContent(contactData);

    const emailResponse = await resend.emails.send({
      from: "CLI-MAX Contact Form <noreply@cli-max.co.za>",
      to: ["hello@cli-max.co.za"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
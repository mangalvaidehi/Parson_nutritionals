export default {
  async afterCreate(event) {
    const { result } = event;

    const RECEIVING_EMAIL = "info@parsonsnutrionals.in";

    const escapeHtml = (value: unknown) =>
      String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    try {
      if (!process.env.SENDGRID_API_KEY) {
        strapi.log.warn(
          "SENDGRID_API_KEY is not set; contact form emails will not send."
        );
      }

      // 1. Notify admin of new inquiry
      await strapi.plugin("email").service("email").send({
        to: RECEIVING_EMAIL,
        from: RECEIVING_EMAIL,
        replyTo: result?.email,
        subject: `New Contact Form Inquiry from ${result?.name ?? "Unknown"}`,
        html: `
          <h2>New Inquiry Received</h2>
          <table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
            <tr><td><strong>Name</strong></td><td>${escapeHtml(result?.name)}</td></tr>
            <tr><td><strong>Email</strong></td><td>${escapeHtml(result?.email)}</td></tr>
            <tr><td><strong>Mobile</strong></td><td>${escapeHtml(result?.mobile || "-")}</td></tr>
            <tr><td><strong>City</strong></td><td>${escapeHtml(result?.city)}</td></tr>
            <tr><td><strong>Country</strong></td><td>${escapeHtml(result?.country)}</td></tr>
            <tr><td><strong>Company Name</strong></td><td>${escapeHtml(result?.company_name || "-")}</td></tr>
            <tr><td><strong>Website</strong></td><td>${escapeHtml(result?.website || "-")}</td></tr>
            <tr><td><strong>Service Requirements</strong></td><td>${escapeHtml(result?.service_requirements)}</td></tr>
          </table>
        `,
      });

      // 2. Auto-reply to the person who submitted the form
      await strapi.plugin("email").service("email").send({
        to: result?.email,
        from: RECEIVING_EMAIL,
        subject: "Thank you for your inquiry – Parsons Nutritionals",
        html: `
          <p>Dear ${escapeHtml(result?.name)},</p>
          <p>Thank you for reaching out to <strong>Parsons Nutritionals</strong>.</p>
          <p>We have received your inquiry and our team will get back to you shortly.</p>
          <br/>
          <p>Warm regards,</p>
          <p><strong>Parsons Nutritionals Team</strong><br/>
          <a href="mailto:info@parsonsnutrionals.in">info@parsonsnutrionals.in</a></p>
        `,
      });
    } catch (err) {
      strapi.log.error("Contact form email send error");
      strapi.log.error(err);
    }
  },
};


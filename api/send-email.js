import { resend } from "../lib/resend.js";

export default async function handler(req, res) {

  try {

    const data = await resend.emails.send({

      from: "Blinkita Multiverse <onboarding@resend.dev>",

      to: "onboarding@resend.dev",

      subject: "✨ Dobrodošla v Blinkita Multiverse",

      html: `
      <h1>BLINKITA MULTIVERSE</h1>

      <p>To je prvi testni email.</p>

      <p>Če bereš to sporočilo, potem sva uspešno povezala:</p>

      <ul>
        <li>✅ Vercel</li>
        <li>✅ Resend</li>
        <li>✅ Email Engine</li>
      </ul>

      <p>Dobrodošla v Blinkita Multiverse. 🌈</p>
      `

    });

    return res.status(200).json(data);

  } catch (error) {

    console.error(error);

    return res.status(500).json(error);

  }

}
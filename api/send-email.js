import {
    sendWelcomeEmail,
    sendAdminNotification
} from "../lib/emailService.js";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const {

            name,
            email,
            packageValue,
            seatNumber,
            payment,
            memberCode

        } = req.body;

        // 1. Welcome email uporabniku

        await sendWelcomeEmail({

            name,
            email,
            package: packageValue,
            seat: seatNumber,
            payment,
            member_code: memberCode

        });

// 2. Email administratorju

await sendAdminNotification({

    name,
    email,
    packageValue,
    seatNumber,
    payment,
    memberCode

});

        return res.status(200).json({

            success: true

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            error: error.message

        });

    }

}
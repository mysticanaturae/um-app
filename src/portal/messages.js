export function getPortalMessages(member){

    return [

        {
            text:
            "Dobrodošel, dobrodošla v Portalu Časa.",
            delay:1000
        },


        {
            text:
            "Portal zaznava tvojo prisotnost...",
            delay:2500
        },


        {
            text:
            `${member.name}, danes odpiraš eno izmed 99 poti.`,
            delay:2500
        },


        {
            text:
            "Tvoja srečna številka je ...",
            delay:3000
        }

    ];

}
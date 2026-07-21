import { supabase } from "../supabase/client.js";


export async function getCurrentMember(){


console.log("🔐 Checking authentication...");



// počakaj, da Supabase obdela magic link

const {
data: {
session
}
}
=
await supabase.auth.getSession();



let user =
session?.user;



// če session še ni pripravljena, poslušaj auth event

if(!user){


await new Promise((resolve)=>{


const {
data: listener
}
=
supabase.auth.onAuthStateChange(
(event, session)=>{


console.log(
"AUTH EVENT:",
event
);


if(session?.user){

user =
session.user;

resolve();

}


}
);


setTimeout(()=>{

listener.subscription.unsubscribe();

resolve();

},3000);



});


}




if(!user){


console.log(
"ℹ️ Guest user - no login session"
);


return null;


}




console.log(
"AUTH USER:",
user.email
);






const {
data:member,
error
}
=
await supabase
.from("members")
.select("*")
.eq(
"email",
user.email
)
.single();





if(error){


console.error(
"❌ MEMBER NOT FOUND:",
error
);


return null;


}





console.log(
"✅ MEMBER FOUND:",
member
);



return member;



}
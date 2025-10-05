"use client"; // if you're in Next.js App Router
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    adSpend: "",
    goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:7000/sendMail", {   // <-- if Express backend
        // use "/api/sendMail" if Next.js API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Thank you! We’ll reach out within 24 hours.");
        setForm({ firstName: "", lastName: "", email: "", company: "", adSpend: "", goals: "" });
      } else {
        setMessage("❌ Failed to send. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Error sending email.");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content remains the same */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Let's Connect
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to build
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  unstoppable momentum?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every great campaign starts with a conversation. Let's discuss how we can 
                transform your marketing performance and drive exponential growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Office Location</h4>
                  <p className="text-muted-foreground">Capital Pk Rd, beside Lot Mobile, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 9347847228</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@adsgoat.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri : 10:30 AM - 7:30 PM IST</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Join 30+ growing companies who trust AdsGoat
              </p>
            </div>
          </div>
          {/* Right: Contact Form */}
          <Card className="bg-card border-border shadow-[0_20px_40px_hsl(220_8%_4%/0.4)]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <Input 
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <Input 
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Company</label>
                  <Input 
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Current Monthly Ad Spend</label>
                  <Input 
                    name="adSpend"
                    value={form.adSpend}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Tell us about your goals</label>
                  <Textarea 
                    name="goals"
                    value={form.goals}
                    onChange={handleChange}
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={loading}
                  variant="hero"
                  size="lg"
                  className="w-full text-lg py-4"
                >
                  {loading ? "Sending..." : "Start the Conversation"}
                </Button>

                {message && <p className="text-center text-sm mt-2">{message}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// "use client"; // if you're in Next.js App Router
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";

// const Contact = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     adSpend: "",
//     goals: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch("http://localhost:7000//sendMail", {   // <-- if Express backend
//         // use "/api/sendMail" if Next.js API route
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (data.success) {
//         setMessage("✅ Thank you! We’ll reach out within 24 hours.");
//         setForm({ firstName: "", lastName: "", email: "", company: "", adSpend: "", goals: "" });
//       } else {
//         setMessage("❌ Failed to send. Please try again later.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("⚠️ Error sending email.");
//     }

//     setLoading(false);
//   };

//   return (
//     <section className="py-24 bg-background">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left content remains the same */}

//           {/* Right: Contact Form */}
//           <Card className="bg-card border-border shadow-[0_20px_40px_hsl(220_8%_4%/0.4)]">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium">First Name</label>
//                     <Input 
//                       name="firstName"
//                       value={form.firstName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium">Last Name</label>
//                     <Input 
//                       name="lastName"
//                       value={form.lastName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Email</label>
//                   <Input 
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Company</label>
//                   <Input 
//                     name="company"
//                     value={form.company}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Current Monthly Ad Spend</label>
//                   <Input 
//                     name="adSpend"
//                     value={form.adSpend}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium">Tell us about your goals</label>
//                   <Textarea 
//                     name="goals"
//                     value={form.goals}
//                     onChange={handleChange}
//                     className="min-h-[120px]"
//                   />
//                 </div>

//                 <Button 
//                   type="submit"
//                   disabled={loading}
//                   variant="hero"
//                   size="lg"
//                   className="w-full text-lg py-4"
//                 >
//                   {loading ? "Sending..." : "Start the Conversation"}
//                 </Button>

//                 {message && <p className="text-center text-sm mt-2">{message}</p>}
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

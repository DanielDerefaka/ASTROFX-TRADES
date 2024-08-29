

import NavBar from "@/components/navbar";
import Footer from "@/components/site/pages/Footer";
import Features from "@/components/site/pages/Feature";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en">
        <body >
       <NavBar/>
       <main className="relative overflow-hidden">
       {children}
       </main>
        <Footer/>
       
        </body>
      </html>
  
  );
}

import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({
  variable: "--font-dancing-script-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const LogoText = () => (
  <h1 className={`${dancing_script.className} text-3xl`}>Vinícius</h1>
);

export default LogoText;
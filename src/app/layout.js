import { Epilogue } from "next/font/google";

import "bootstrap/scss/bootstrap.scss";
import Default from "@/components/default";

// ========= Font-Family START =========
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-1",
});
// ========= Font-Family END =========

import "../../public/scss/style.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${epilogue.variable}`}>
      <body cz-shortcut-listen="true">
        <Default />
        {children}
      </body>
    </html>
  );
}

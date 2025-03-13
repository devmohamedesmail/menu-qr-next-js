
import "./globals.css";
import { DataProvider } from "./context/DataProvider";
import ReduxProvider from "./redux/provider";
import I18nProvider from "./components/I18nProvider/I18nProvider";







export const metadata = {
  title: "Resturant Menu",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en" data-theme="dark">
      <body  >
        <I18nProvider>
        <ReduxProvider>
            <DataProvider>  {children}</DataProvider>
         </ReduxProvider>
        </I18nProvider>
       
      </body>
    </html>
   
    
  );
}

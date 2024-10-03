import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { Root }from "./Root";
import { Introduction } from "./Introduction";
import { Races } from "./Races";
import { Professions } from "./Professions";
import { LanguageProvider, useLanguageContext } from "./LanguageContext";
import { IntlProvider } from "react-intl";
import messagesCs from "./messages_cs.json";
import messagesEn from "./messages_en.json";

const messages = {
  cs: messagesCs,
  en: messagesEn
};

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
      { path: "/", element: <Introduction /> },
      { path: "/races", element: <Races /> },
      { path: "/professions", element: <Professions /> },
  ],
}]);

const AppInner = () => {
  const { language } = useLanguageContext();
  return (
      <IntlProvider locale={language} messages={messages[language]}>
          <RouterProvider router={router}></RouterProvider>
      </IntlProvider>
  );
};

function App() {
  return (
    <LanguageProvider><AppInner /></LanguageProvider>
);

}



export default App;

import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../translations/i18n";
import LeasingManagerInProgress from "./LeasingManagerInProgress";

test('should contains En cours when language is french', () => {

    const language : string = 'fr';
    i18n.changeLanguage(language);
    const c = render(
        
        <I18nextProvider i18n={i18n}>
           <LeasingManagerInProgress />
        </I18nextProvider>
      );
 
     expect(c.getByText(i18n.getDataByLanguage(language)?.sideNav.inProgress, {exact: false})).toBeInTheDocument();  
  });


test('should contains In Progress when language is english', () => {

    const language : string = 'en';
    i18n.changeLanguage(language);
    const c = render(
        
        <I18nextProvider i18n={i18n}>
           <LeasingManagerInProgress />
        </I18nextProvider>
      );

    expect(c.getByText(i18n.getDataByLanguage(language)?.sideNav.inProgress, {exact: false})).toBeInTheDocument();   
  });
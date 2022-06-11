import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import WaitList from "./waitlist";

import PricingPage from "./pricing";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import PurchasePage from "./purchase";
import FirebaseActionPage from "./firebase-action";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import { AuthProvider } from "./../util/auth";
import { ThemeProvider } from "./../util/theme";
import { QueryClientProvider } from "./../util/db";
import FundRaising from "../Form/FundRaising";
import Questionnaire from "../pages/Questionnaire";
import Incorporate from "./Incorporate";
import Profile from "../pages/profile";
import { Routes } from "../util/routesSideBar";
import { Sidebar } from "../components/sidebar";
import { getAuth } from "firebase/auth";
import { PrivateRoute } from "../components/PrivateRoutes";
import Landing from "./Landing";

const auth = getAuth();

function App(props) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <>
              {/* <Navbar
                color="default"
                logo="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Flogos%2Flogo.svg?alt=media&token=678064b1-faf7-49ce-b90c-bf9497616bbc"
                logoInverted="https://firebasestorage.googleapis.com/v0/b/pitchblack-608ed.appspot.com/o/Resources%2Flogos%2Flogo.svg?alt=media&token=678064b1-faf7-49ce-b90c-bf9497616bbc"
              /> */}
              <Switch>
                <Sidebar>
                  {Routes.map((e) => {
                    return (
                      <PrivateRoute
                        exact
                        path={e.path}
                        component={e.component}
                      />
                    );
                  })}
                  <PrivateRoute
                    exact
                    path="/dashboard/profile"
                    component={Profile}
                  />
                  <Route exact path="/ab" component={FundRaising} />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/faq" component={FaqPage} />
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/waitlist" component={WaitList} />
                  <Route exact path="/pricing" component={PricingPage} />
                  <Route exact path="/auth/:type" component={AuthPage} />
                  <Route
                    exact
                    path="/settings/:section"
                    component={SettingsPage}
                  />
                  <Route exact path="/legal/:section" component={LegalPage} />
                  <Route
                    exact
                    path="/purchase/:plan"
                    component={PurchasePage}
                  />
                  <Route
                    exact
                    path="/firebase-action"
                    component={FirebaseActionPage}
                  />
                  <Route path="/Questionnaire" component={Questionnaire} />
                  <Route path="/Incorporate" component={Incorporate} />
                </Sidebar>
              </Switch>

              {/* <Footer
                bgColor="default"
                size="medium"
                bgImage=""
                bgImageOpacity={1}
                description="A short description of what you do here"
                copyright={`© ${new Date().getFullYear()} Company`}
                logo="https://uploads.divjoy.com/logo.svg"
                logoInverted="https://uploads.divjoy.com/logo-white.svg"
                sticky={true}
              /> */}
            </>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import logo from './logo.svg';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { SignInPage } from "./SignInPage";
import { NotFoundPage } from "./NotFoundPage";
import { fontFamily, fontSize, gray2 } from './Styles';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div 
        css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>    
  </BrowserRouter>
  );
};

export default App;

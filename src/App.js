import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from './page/Catalog';
import NewThread from './page/NewThread';
import PostSuccessful from './page/PostSuccessful';

/* TODO
    Clicking on title should redirect user to main page (catalog)
    Submit post will redirect user to "success screen" (in future, add failure screen for failed submission)
    Footer Position as Absolute
    Breadcrumb to allow user to go back to previous page

    More:
    Connect to Firebase
    Allow Image Submission
*/

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Catalog/> } />
        <Route path="/new-thread" element={ <NewThread/> } />
        <Route path="/success" element={ <PostSuccessful/> } />

      </Routes>
  );
}

export default App;

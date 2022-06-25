import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from './page/Catalog';
import TemplatePage from './page/TemplatePage';
import NewThread from './page/NewThread';
import ThreadMain from './page/ThreadMain';
import ThreadDetail from './page/ThreadDetail'
import PostSuccessful from './page/PostSuccessful';
import PageNotFound from './page/PageNotFound'
import Home from './page/Home';

/* TODO
    High    
    Submit post will redirect user to "success screen" (in future, add failure screen for failed submission)
      if content available, then submit, else, prompt user to write something.
    Clicking card leads user to individual thread
    Link to Firebase

    Med
    Quote user reply

    Low
    Footer Position as Absolute
    Breadcrumb to allow user to go back to previous page

    More:
    Connect to Firebase
    Allow Image Submission
*/

function App() {
  
  return (
      <Routes>
        <Route path="/" element={ <TemplatePage/> } >
          <Route path="/home" element={ <Home/> } />
          <Route path="/catalog" element={ <Catalog/> } />
          <Route path="/thread" element={ <ThreadMain/> }>
            <Route path=":threadId" element= { <ThreadDetail/>}></Route>
          </Route>
          <Route path="/new-thread" element={ <NewThread/> } />
          <Route path="/success" element={ <PostSuccessful/> } />
          <Route path="*" element={ <PageNotFound/> } />
        </Route>
      </Routes>
  );
}

export default App;

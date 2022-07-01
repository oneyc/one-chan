import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
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
    If content available, then submit, else, prompt user to write something.
    Make sure credential is safe
    Overflow at Catalog

    Med
    Clean up homepage
    Quote user reply
    sort thread by submitted time

    Low
    Footer Position as Absolute
    Breadcrumb to allow user to go back to previous page
    check submission rule, like overwrite when id already exist

    More:
    Allow Image Submission
*/

function App() {
  const[selectedThreadID, setSelectedThreadID] = useState("")

  const getThreadId = (threadId) => {
    console.log("App", threadId);
    setSelectedThreadID(threadId)
  }

  return (
      <Routes>
        <Route path="/" element={ <TemplatePage/> } >
          <Route path="/home" key="/home" element={ <Home/> } />
          <Route path="/catalog" key="/catalog" element={ <Catalog ongetId={getThreadId}/> } />
          <Route path="/thread" key="/thread" element={ <ThreadMain/> }>
            <Route path=":threadId" key=":threadId" element= { <ThreadDetail/>}></Route>
          </Route>
          <Route path="/new-thread" key="/new-thread" element={ <NewThread/> } />
          <Route path="/success" key="/success" element={ <PostSuccessful/> } />
          <Route path="*" element={ <PageNotFound/> } />
        </Route>
      </Routes>
  );
}

export default App;

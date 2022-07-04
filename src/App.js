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
    If content available, then submit, else, prompt user to write something.
    Clear data after posting
    Make sure credential is safe
    Overflow at Catalog

    Med
    Clean up homepage
    sort thread by submitted time
    Max no. of thread in catalog
    Max no. of replies shown
    Breadcrumb to allow user to go back to previous page

    Low
    Footer Position as Absolute
    Quote user reply
    check submission rule, like overwrite when id already exist
  */

function App() {

  return (
      <Routes>
        <Route path="/" element={ <TemplatePage/> } >
          <Route index element={ <Home/> } />
          <Route path="/catalog" key="/catalog" element={ <Catalog/> } />
          <Route path="/thread" key="/thread" element={ <ThreadMain/> }>
            <Route path=":threadId" key="/:threadId" element= { <ThreadDetail/>}/>
          </Route>
          <Route path="/new-thread" key="/new-thread" element={ <NewThread/> } />
          <Route path="/success" key="/success" element={ <PostSuccessful/> } />
          <Route path="*" element={ <PageNotFound/> } />
        </Route>
      </Routes>
  );
}

export default App;

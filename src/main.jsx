import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import './index.css'

import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import {Home,About,Blog,Post,Contact } from "./component/index"
import FormInput from './component/FormInput.jsx'
import Form from './component/Form.jsx'
import Form2 from './component/Form2.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="post/:postid" element={<Post />} />
      <Route path="form1" element={<FormInput/>}/>
      <Route path="form" element={<Form/>}/>
      <Route path="form2" element={<Form2/>}/>

    </Route>
  )
);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home/>,},
//       { path: "about", element: <About/>,},
//       { path: "blog", element: <Blog/>,},
//       { path: "contact", element: <Contact/>,},
//       { path: "post/:postid", element: <Post/>,},
//     ],
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

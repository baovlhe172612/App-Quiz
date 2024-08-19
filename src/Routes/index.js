// import PrivateRoutes from "../components/PrivateRouter";
// import LayoutDefault from "../layout/LayoutDefault";

// import Answers from "../pages/Answers/Answers";
// import Home from "../pages/Home";
// import Login from "../pages/Login/Login";
// import Logout from "../pages/Logout";
// import Quiz from "../pages/Quiz/Quiz";
// import Register from "../pages/Register/Register";
// import Result from "../pages/Result/Result";
// import Topic from "../pages/Topic/Topic";

// export const routes = [

//     {
//         path: "/",
//         element: <LayoutDefault />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />
//             },
                         
//             {
//                 path: "Login",
//                 element: <Login />
//             },
          
//             {
//                 path: "register",
//                 element: <Register />
//             },
//             {
//                 path: "Logout",
//                 element: <Logout />
//             },

//             {
//                 element: <PrivateRoutes />,
//                 children: [
//                     {
//                         path: "answers",
//                         element: <Answers />
//                     },
//                     {
//                         path: "quiz/:id",
//                         element: <Quiz />
//                     },
//                     {
//                         path: "result/:id",
//                         element: <Result />
//                     },
//                     {
//                         path: "topic",
//                         element: <Topic />
//                     }
//                 ]
//             },


//         ]
//     }
// ]

import PrivateRoutes from "../components/PrivateRouter";
import LayoutDefault from "../layout/LayoutDefault";
import Answers from "../pages/Answers/Answers";
import Error403 from "../pages/Error/Error403";
import Error404 from "../pages/Error/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout";
import Quiz from "../pages/Quiz/Quiz";
import Register from "../pages/Register/Register";
import Result from "../pages/Result/Result";
import Topic from "../pages/Topic/Topic";


export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "logout",
                element: <Logout />
            },
            {
                path: "error403",
                element: <Error403 />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "answers",
                        element: <Answers />
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz />
                    },
                    {
                        path: "result/:id",
                        element: <Result />
                    },
                    {
                        path: "topic",
                        element: <Topic />
                    }
                ]
            },
            // Cấu hình trang 404 bắt tất cả các đường dẫn khác
            {
                path: "*",
                element: <Error404 />
            }
        ]
    }
];

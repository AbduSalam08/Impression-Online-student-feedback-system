import LandingPage from "./Landing/LandingPage";
import CLogin from "./Landing/CLogin.jsx";
import ALogin from "./Admin/ALogin";
import SLogin from "./Student/SLogin";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import LoginAsLayout from "./LoginAsLayout";
import StuDashboard from "./Student/StuDashboard";
import DashboardLayout from "./DashboardLayout";
import ActiveFeedbacks from "./Student/ActiveFeedbacks";
import History from "./Student/History";
import Dashboard from "./Student/Dashboard";
import FeedbackForm from "./Student/FeedbackForm";
import AcTLayout from "./AcTLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewResponse from "./Student/ViewResponse";
import Historylayout from "./Historylayout";
import PageNotFound from "./Student/PageNotFound";

function App() {
  const [Questions, setQuestions] = useState();
  const [usersData, setUsersData] = useState();

  const loadData = async () => {
    const result = await axios.get("http://localhost:4000/Questions");
    const userResult = await axios.get("http://localhost:4000/Student");
    setQuestions(result.data);
    setUsersData(userResult.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/loginAs",
      element: <LoginAsLayout />,
      errorElement: <PageNotFound />,

      children: [
        {
          index: true,
          element: <CLogin />,
          errorElement: <PageNotFound />,
        },
        {
          path: "Student",
          element: <SLogin usersData={usersData} Questions={Questions} />,
          errorElement: <PageNotFound />,
        },
        {
          path: "Admin",
          element: <ALogin />,
          errorElement: <PageNotFound />,
        },
      ],
    },
    {
      path: "/Dashboard",
      element: <DashboardLayout />,
      errorElement: <PageNotFound />,

      children: [
        {
          index: true,
          element: <Dashboard QuestionsData={Questions} UsData={usersData} />,
          errorElement: <PageNotFound />,
        },
        {
          path: "Active_Feedbacks",
          element: <AcTLayout />,
          errorElement: <PageNotFound />,

          children: [
            {
              index: true,
              element: <ActiveFeedbacks />,
              errorElement: <PageNotFound />,
            },
            {
              path: "Form/:id",
              element: <FeedbackForm />,
              errorElement: <PageNotFound />,
            },
          ],
        },
        {
          path: "History",
          element: <Historylayout />,
          errorElement: <PageNotFound />,

          children: [
            {
              index: true,
              element: <History resp={Questions} />,
              errorElement: <PageNotFound />,
            },
            {
              path: "View_response/:code",
              element: <ViewResponse />,
              errorElement: <PageNotFound />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      {/* <StuDashboard /> */}
    </div>
  );
}

export default App;

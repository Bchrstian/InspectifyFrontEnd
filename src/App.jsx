// App.jsx

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import AssignmentDetails from "./pages/AssignmentDetails";
import AssignmentList from "./pages/AssignmentList";
import AssignmentSubmission from "./pages/AssignmentSubmission";
import StudentDashboard from "./pages/StudentDashboard";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import AssignmentsManagement from "./pages/AssignmentsManagement";
import GradingCenter from "./pages/GradingCenter";
import StudentManagement from "./pages/StudentManagement";
import AppLayoutStudent from "./ui/AppLayoutStudent";
import Announcementview from "./pages/announcementview";
import Progress from "./pages/progress";
import Feedback from "./pages/Feedback";
import StudentSettings from "./pages/StudentSettings";
import CohortCreation from "./pages/CohortCreation";
import UserManagement from "./pages/UserManagement";
import ProblemReports from "./pages/ProblemReports";
import SystemConfigurations from "./pages/SystemConfigurations";
import AdminSettings from "./pages/AdminSettings";
import MyCourse from "./pages/MyCourse";

import { Toaster } from "react-hot-toast";
import AppLayoutAdmin from "./ui/AppLayoutAdmin";
import RoleSelection from "./pages/RoleSelection";
import StudentInfo from "./pages/StudentInfo";
import InstructorInfo from "./pages/InstructorInfo";
import { DarkModeProvider } from "./context/DarkModeContext";
import SignUpComponent from "./pages/SignUpComponent";
import { signup } from "./services/apiAuth";
import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        {/* Your entire application JSX */}

        <DarkModeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="login" element={<Login />} />

              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
                <Route path="mycourse" element={<MyCourse />} />
                <Route
                  path="assignmentsmanagement"
                  element={<AssignmentsManagement />}
                />
                <Route path="grading" element={<GradingCenter />} />
                <Route
                  path="studentmanagement"
                  element={<StudentManagement />}
                />
              </Route>
              <Route element={<AppLayoutStudent />}>
                <Route
                  index
                  element={<Navigate replace to="studentdashboard" />}
                />
                <Route path="studentdashboard" element={<StudentDashboard />} />
                <Route path="assignmentlist" element={<AssignmentList />} />
                <Route path="announcementview" element={<Announcementview />} />
                <Route path="progress" element={<Progress />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="studentsettings" element={<StudentSettings />} />
                <Route
                  path="assignmentdetails"
                  element={<AssignmentDetails />}
                />
                <Route
                  path="assignmentsubmission"
                  element={<AssignmentSubmission />}
                />
              </Route>

              <Route element={<AppLayoutAdmin />}>
                <Route
                  index
                  element={<Navigate replace to="admindashboard" />}
                />
                <Route path="admindashboard" element={<AdminDashboard />} />
                <Route path="cohortcreation" element={<CohortCreation />} />
                <Route path="usermanagement" element={<UserManagement />} />
                <Route path="Problemreport" element={<ProblemReports />} />
                <Route
                  path="systemconfiguration"
                  element={<SystemConfigurations />}
                />
                <Route path="adminsettings" element={<AdminSettings />} />
              </Route>

              <Route path="roleselection" element={<RoleSelection />} />
              <Route path="studentinfo" element={<StudentInfo />} />
              <Route path="instructorinfo" element={<InstructorInfo />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </DarkModeProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;

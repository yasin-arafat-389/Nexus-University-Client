import ProtectedRoute from "./Components/ProtectedRoute";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <ProtectedRoute role={undefined}>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;

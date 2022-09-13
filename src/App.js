import AppStore from './pages/app-store';
import MedicationManager from './pages/medication-manager';

function App() {
  return (
    <div>
      <header className="app-header">
        <img src="https://s3.amazonaws.com/images.teladoc.com/member/Logo-Horz-RGB.svg" alt="teladoc-logo" height='40px' />
      </header>
      <AppStore />
      {/* <MedicationManager /> */}
    </div>
  );
}

export default App;

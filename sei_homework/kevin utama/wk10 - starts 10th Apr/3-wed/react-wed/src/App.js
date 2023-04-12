import './App.css';
import PoopTranslator from './PoopTranslator';
import CreditCardDetector from './CreditCardDetector';
import PasswordChecker from './PasswordChecker';
import Bank from './Bank';

function App() {
  return (
    <div className="App">
      <PoopTranslator />
      <CreditCardDetector />
      <PasswordChecker />
      <Bank />
    </div>
  );
}

export default App;

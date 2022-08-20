import "./assets/app.css"
import AddContact from "./components/AddContact";
import AppHeader from "./components/AppHeader";
import ContactItem from "./components/ContactItem";
function App() {
  return (
    <section className="app_container">
      <main>
        <AppHeader/>
        <ContactItem/>
      </main>
    </section>
  );
}

export default App;

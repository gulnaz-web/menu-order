import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Pizza } from './components/Pizza';

function App({ pizzaData }) {
   return (
      <div className="container">
         <Header />
         <Menu />
         <ul className="pizzas">
            {pizzaData.map((item) => (
               <Pizza item={item} key={item.name} />
            ))}
         </ul>
         <Footer />
      </div>
   );
}
export default App;

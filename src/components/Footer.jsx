const hour = new Date().getHours();
const openHour = 9;
const closeHour = 22;

const isOpen = hour >= openHour && hour < closeHour;

export const Footer = () => {
   return (
      <div className="footer">
         <div className="order">
            <p>
               {isOpen
                  ? `We're open until ${closeHour}:00. Come visit us or order online`
                  : `Sorry. We're closed. We will open at ${openHour}:00`}
            </p>
            {isOpen && <button className="btn">Order now</button>}
         </div>
      </div>
   );
};
